/* Hinário Digital ECC — lógica do aplicativo */
(function () {
  "use strict";

  /* ---------- Transposição de acordes ---------- */
  var SHARP = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  var FLAT  = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
  // tons que costumam ser escritos com bemol
  var PREFER_FLAT = { "F": 1, "Bb": 1, "Eb": 1, "Ab": 1, "Db": 1, "Gb": 1,
                      "Dm": 1, "Gm": 1, "Cm": 1, "Fm": 1, "Bbm": 1 };

  function noteIndex(n) {
    n = n.replace("b", "b"); // normaliza
    var i = SHARP.indexOf(n);
    if (i >= 0) return i;
    i = FLAT.indexOf(n);
    return i; // -1 se não achar
  }

  // Transpõe um acorde único (ex.: "F#m7", "A7", "Bm7/D") por 'passos' semitons
  function transposeChord(chord, steps, useFlat) {
    var scale = useFlat ? FLAT : SHARP;
    // separa acorde da baixo (barra)
    return chord.replace(/([A-G])(#|b)?/g, function (m, letra, acidente) {
      var base = letra + (acidente || "");
      var idx = noteIndex(base);
      if (idx < 0) return m;
      var novo = ((idx + steps) % 12 + 12) % 12;
      return scale[novo];
    });
  }

  // decide se o tom transposto deve usar bemol
  function shouldUseFlat(tomTransposto) {
    return !!PREFER_FLAT[tomTransposto];
  }

  /* ---------- Renderização estilo Cifra Club ---------- */
  // Converte "[D]Pode en[G]trar" numa linha com acordes acima das sílabas
  function renderLinha(linha, steps, useFlat) {
    var container = document.createElement("div");
    container.className = "linha";
    var regex = /\[([^\]]+)\]/g;
    var lastIndex = 0;
    var match;
    var pieces = [];
    while ((match = regex.exec(linha)) !== null) {
      var textoAntes = linha.slice(lastIndex, match.index);
      if (textoAntes) pieces.push({ chord: null, text: textoAntes });
      pieces.push({ chord: match[1], text: "" });
      lastIndex = regex.lastIndex;
    }
    var resto = linha.slice(lastIndex);
    if (resto) pieces.push({ chord: null, text: resto });

    // agrupa: cada acorde gruda no texto que vem logo depois
    var grupos = [];
    for (var i = 0; i < pieces.length; i++) {
      var p = pieces[i];
      if (p.chord !== null) {
        var texto = "";
        if (i + 1 < pieces.length && pieces[i + 1].chord === null) {
          texto = pieces[i + 1].text;
          i++;
        }
        grupos.push({ chord: p.chord, text: texto });
      } else {
        grupos.push({ chord: null, text: p.text });
      }
    }

    grupos.forEach(function (g) {
      var span = document.createElement("span");
      span.className = "trecho";
      var acorde = document.createElement("span");
      acorde.className = "acorde";
      if (g.chord) {
        acorde.textContent = transposeChord(g.chord, steps, useFlat);
      } else {
        acorde.innerHTML = "&nbsp;";
      }
      var texto = document.createElement("span");
      texto.className = "texto";
      texto.textContent = g.text || " ";
      span.appendChild(acorde);
      span.appendChild(texto);
      container.appendChild(span);
    });
    return container;
  }

  function ehSecao(linha) {
    var t = linha.trim();
    return /^(REFRÃO|REFRAO|ANTES|DEPOIS|REFRÃO:|PONTE)$/i.test(t);
  }
  function ehRefrao(linha) {
    var t = linha.trim().replace(/:$/, "").toUpperCase();
    return t === "REFRÃO" || t === "REFRAO";
  }

  function renderCorpo(corpo, steps, useFlat) {
    var frag = document.createDocumentFragment();
    var linhas = corpo.replace(/^\n+/, "").replace(/\n+$/, "").split("\n");
    var i = 0;
    while (i < linhas.length) {
      var linha = linhas[i];
      // bloco do REFRÃO: cabeçalho + linhas seguintes, com fundo destacado
      if (ehRefrao(linha)) {
        var box = document.createElement("div");
        box.className = "bloco-refrao";
        var h = document.createElement("div");
        h.className = "secao secao-refrao";
        h.textContent = linha.trim();
        box.appendChild(h);
        i++;
        while (i < linhas.length && linhas[i].trim() !== "" && !ehSecao(linhas[i])) {
          box.appendChild(renderLinha(linhas[i], steps, useFlat));
          i++;
        }
        frag.appendChild(box);
        continue;
      }
      if (linha.trim() === "") {
        var vazio = document.createElement("div");
        vazio.className = "linha-vazia";
        frag.appendChild(vazio);
        i++; continue;
      }
      if (ehSecao(linha)) {
        var sec = document.createElement("div");
        sec.className = "secao";
        sec.textContent = linha.trim();
        frag.appendChild(sec);
        i++; continue;
      }
      frag.appendChild(renderLinha(linha, steps, useFlat));
      i++;
    }
    return frag;
  }

  /* ---------- Estado ---------- */
  var DIAS = [
    { id: "sexta", nome: "Sexta-feira" },
    { id: "sabado", nome: "Sábado" },
    { id: "domingo", nome: "Domingo" }
  ];
  var estado = {
    dia: "sexta",
    musicaAtual: null,
    steps: 0, // semitons de transposição da música aberta
    fit: true,
    fontManual: 0,
    editando: false,
    modelo: null, // modelo de linhas em edição
    sel: null     // {li, ci} acorde selecionado
  };

  var el = {};

  /* ---------- Cifras editadas (salvas no aparelho) ---------- */
  var STORE_CIFRAS = "hinario-cifras";
  function songId(m) { return m.dia + ":" + m.ordem; }
  function lerOverrides() {
    try { return JSON.parse(localStorage.getItem(STORE_CIFRAS) || "{}") || {}; }
    catch (e) { return {}; }
  }
  function salvarOverrides(o) {
    try { localStorage.setItem(STORE_CIFRAS, JSON.stringify(o)); } catch (e) {}
  }
  function corpoEfetivo(m) {
    var o = lerOverrides(); var id = songId(m);
    return (o[id] != null) ? o[id] : m.corpo;
  }
  function temOverride(m) { return lerOverrides()[songId(m)] != null; }
  function definirOverride(m, corpo) { var o = lerOverrides(); o[songId(m)] = corpo; salvarOverrides(o); }
  function removerOverride(m) { var o = lerOverrides(); delete o[songId(m)]; salvarOverrides(o); }

  /* ---------- Modelo da cifra (para edição) ---------- */
  function parseLinhaLetra(linha) {
    var text = "", chords = [], re = /\[([^\]]+)\]/g, last = 0, m;
    while ((m = re.exec(linha)) !== null) {
      text += linha.slice(last, m.index);
      chords.push({ pos: text.length, chord: m[1] });
      last = re.lastIndex;
    }
    text += linha.slice(last);
    return { text: text, chords: chords };
  }
  function serializaLinhaLetra(l) {
    var out = l.text;
    var ch = l.chords.slice().sort(function (a, b) { return a.pos - b.pos; });
    for (var i = ch.length - 1; i >= 0; i--) {
      var p = Math.max(0, Math.min(l.text.length, ch[i].pos));
      out = out.slice(0, p) + "[" + ch[i].chord + "]" + out.slice(p);
    }
    return out;
  }
  function construirModelo(corpo) {
    var linhas = corpo.replace(/^\n+/, "").replace(/\n+$/, "").split("\n");
    return linhas.map(function (linha) {
      if (linha.trim() === "") return { tipo: "vazia" };
      if (ehSecao(linha)) return { tipo: "secao", text: linha.trim() };
      var p = parseLinhaLetra(linha);
      return { tipo: "letra", text: p.text, chords: p.chords };
    });
  }
  function serializaModelo(modelo) {
    return modelo.map(function (l) {
      if (l.tipo === "vazia") return "";
      if (l.tipo === "secao") return l.text;
      return serializaLinhaLetra(l);
    }).join("\n");
  }

  function musicasDoDia(dia) {
    return window.HINARIO
      .filter(function (m) { return m.dia === dia; })
      .sort(function (a, b) { return a.ordem - b.ordem; });
  }

  // lista com TODAS as músicas em ordem (sexta -> sábado -> domingo)
  function listaGlobal() {
    var arr = [];
    DIAS.forEach(function (d) { arr = arr.concat(musicasDoDia(d.id)); });
    return arr;
  }
  function nomeDia(dia) {
    var n = dia;
    DIAS.forEach(function (d) { if (d.id === dia) n = d.nome; });
    return n;
  }
  function navegar(delta) {
    var g = listaGlobal();
    var i = g.indexOf(estado.musicaAtual);
    if (i < 0) return;
    var alvo = g[(i + delta + g.length) % g.length];
    estado.dia = alvo.dia;
    abrirMusica(alvo);
  }
  function atualizarNav() {
    var m = estado.musicaAtual;
    if (!m || !el.navAtual) return;
    var doDia = musicasDoDia(m.dia);
    var pos = doDia.indexOf(m) + 1;
    el.navAtual.textContent = nomeDia(m.dia) + " · " + pos + "/" + doDia.length;
  }

  /* ---------- Lista ---------- */
  function renderTabs() {
    el.tabs.innerHTML = "";
    DIAS.forEach(function (d) {
      var b = document.createElement("button");
      b.className = "tab" + (d.id === estado.dia ? " ativa" : "");
      b.textContent = d.nome;
      b.onclick = function () {
        estado.dia = d.id;
        renderTabs();
        renderLista();
      };
      el.tabs.appendChild(b);
    });
  }

  function renderLista() {
    el.lista.innerHTML = "";
    var musicas = musicasDoDia(estado.dia);
    musicas.forEach(function (m, idx) {
      var card = document.createElement("button");
      card.className = "musica-card";
      card.onclick = function () { abrirMusica(m); };

      var ordem = document.createElement("span");
      ordem.className = "ordem";
      ordem.textContent = (idx + 1);

      var info = document.createElement("span");
      info.className = "info";
      var titulo = document.createElement("span");
      titulo.className = "titulo";
      titulo.textContent = m.titulo;
      var meta = document.createElement("span");
      meta.className = "meta";
      meta.textContent = "Tom " + m.tom + (m.tomObs ? " · " + m.tomObs : "") + " · pág. " + m.pagina;
      info.appendChild(titulo);
      info.appendChild(meta);

      var seta = document.createElement("span");
      seta.className = "seta";
      seta.innerHTML = "&rsaquo;";

      card.appendChild(ordem);
      card.appendChild(info);
      card.appendChild(seta);
      el.lista.appendChild(card);
    });
  }

  /* ---------- Música ---------- */
  function tomAtual() {
    var m = estado.musicaAtual;
    if (!m) return "";
    return transposeChord(m.tom, estado.steps, shouldUseFlat(transposeChord(m.tom, estado.steps, false)));
  }

  function abrirMusica(m) {
    estado.musicaAtual = m;
    estado.steps = 0;
    estado.fit = true;
    estado.fontManual = 0;
    el.mvTitulo.textContent = m.titulo;
    el.mvPagina.textContent = "pág. " + m.pagina;
    el.mvNumero.textContent = "nº " + m.numero;
    el.mvObs.textContent = m.tomObs ? m.tomObs : "";
    el.mvObs.style.display = m.tomObs ? "" : "none";
    document.body.classList.add("vendo-musica");
    el.cifraWrap.scrollTop = 0;
    window.scrollTo(0, 0);
    atualizarNav();
    atualizarCifra();
  }

  function atualizarCifra() {
    var m = estado.musicaAtual;
    if (!m) return;
    var tomBase = m.tom;
    var tomNovo = transposeChord(tomBase, estado.steps, false);
    var useFlat = shouldUseFlat(tomNovo);
    var tomExibir = transposeChord(tomBase, estado.steps, useFlat);
    el.mvTom.textContent = tomExibir;
    el.mvTom.title = (estado.steps === 0)
      ? "tom original"
      : "original: " + tomBase + " (" + (estado.steps > 0 ? "+" : "") + estado.steps + ")";
    el.cifra.innerHTML = "";
    if (estado.editando) { renderEditor(); return; }
    el.cifra.appendChild(renderCorpo(corpoEfetivo(m), estado.steps, useFlat));
    // ajusta de forma síncrona (garante que a cifra sempre apareça),
    // e refina depois que o layout/fontes assentam
    ajustarFonte();
    requestAnimationFrame(function () {
      requestAnimationFrame(ajustarFonte);
    });
  }

  /* ---------- Editor de cifra ---------- */
  function renderEditor() {
    el.cifra.classList.remove("modo-fit");
    el.cifra.style.visibility = "visible";
    el.cifra.style.fontSize = "17px";
    var frag = document.createDocumentFragment();
    estado.modelo.forEach(function (l, li) {
      if (l.tipo === "vazia") {
        var v = document.createElement("div"); v.className = "linha-vazia"; frag.appendChild(v); return;
      }
      if (l.tipo === "secao") {
        var s = document.createElement("div"); s.className = "secao"; s.textContent = l.text; frag.appendChild(s); return;
      }
      frag.appendChild(renderLinhaEditor(l, li));
    });
    el.cifra.innerHTML = "";
    el.cifra.appendChild(frag);
  }

  function renderLinhaEditor(l, li) {
    var cont = document.createElement("div");
    cont.className = "linha edit";
    var len = l.text.length;
    var chords = l.chords.map(function (c, idx) {
      return { idx: idx, pos: Math.max(0, Math.min(len, c.pos)), chord: c.chord };
    }).sort(function (a, b) { return a.pos - b.pos; });

    // monta grupos: cada acorde gruda no texto que vem depois dele (letra contínua)
    var grupos = [];
    if (chords.length === 0) {
      grupos.push({ idx: -1, chord: null, start: 0, text: l.text });
    } else {
      if (chords[0].pos > 0) grupos.push({ idx: -1, chord: null, start: 0, text: l.text.slice(0, chords[0].pos) });
      for (var i = 0; i < chords.length; i++) {
        var start = chords[i].pos;
        var end = (i + 1 < chords.length) ? chords[i + 1].pos : len;
        grupos.push({ idx: chords[i].idx, chord: chords[i].chord, start: start, text: l.text.slice(start, end) });
      }
    }

    grupos.forEach(function (g) {
      var col = document.createElement("span");
      col.className = "trecho edit";
      var ac = document.createElement("span");
      ac.className = "acorde edit";
      if (g.chord != null) {
        var pill = document.createElement("span");
        pill.className = "pill-acorde" + (estado.sel && estado.sel.li === li && estado.sel.ci === g.idx ? " sel" : "");
        pill.textContent = g.chord || "?";
        pill.dataset.li = li; pill.dataset.ci = g.idx;
        pill.onclick = function (ev) { ev.stopPropagation(); selecionarAcorde(li, g.idx); };
        pill.ondblclick = function (ev) { ev.stopPropagation(); ev.preventDefault(); editarInline(li, g.idx, false); };
        ac.appendChild(pill);
      } else {
        ac.innerHTML = "&nbsp;";
      }
      var tx = document.createElement("span");
      tx.className = "texto";
      tx.textContent = g.text || " ";
      tx.onclick = function (ev) {
        ev.stopPropagation();
        var seg = g.text || "";
        var rect = tx.getBoundingClientRect();
        var off = 0;
        if (seg.length > 0 && rect.width > 0) {
          var rel = ev.clientX - rect.left;
          off = Math.max(0, Math.min(seg.length, Math.round(rel / (rect.width / seg.length))));
        }
        adicionarAcordeEm(li, g.start + off);
      };
      col.appendChild(ac); col.appendChild(tx);
      cont.appendChild(col);
    });
    return cont;
  }

  function selecionarAcorde(li, ci) {
    estado.sel = { li: li, ci: ci };
    renderEditor();
    document.body.classList.add("sel-ativa");
    var pill = el.cifra.querySelector(".pill-acorde.sel");
    if (pill && pill.scrollIntoView) pill.scrollIntoView({ block: "nearest", inline: "center" });
  }
  function acordeSel() {
    if (!estado.sel) return null;
    var l = estado.modelo[estado.sel.li];
    if (!l || !l.chords[estado.sel.ci]) return null;
    return { l: l, c: l.chords[estado.sel.ci] };
  }
  function moverAcorde(delta) {
    var s = acordeSel(); if (!s) return;
    s.c.pos = Math.max(0, Math.min(s.l.text.length, s.c.pos + delta));
    marcarEditado(); renderEditor();
  }
  function editarAcordeTexto() {
    if (!estado.sel) return;
    editarInline(estado.sel.li, estado.sel.ci, false);
  }

  // Edita a nota ali mesmo (campo inline), sem abrir janela
  function editarInline(li, ci, isNew) {
    var l = estado.modelo[li];
    if (!l || !l.chords[ci]) return;
    // garante que a nota esteja selecionada e re-renderizada
    if (!estado.sel || estado.sel.li !== li || estado.sel.ci !== ci) {
      estado.sel = { li: li, ci: ci };
      document.body.classList.add("sel-ativa");
      renderEditor();
    }
    var pill = el.cifra.querySelector('.pill-acorde[data-li="' + li + '"][data-ci="' + ci + '"]');
    if (!pill) return;
    var chord = l.chords[ci];
    var inp = document.createElement("input");
    inp.type = "text";
    inp.className = "pill-input";
    inp.value = chord.chord;
    inp.setAttribute("autocapitalize", "off");
    inp.setAttribute("autocorrect", "off");
    inp.spellcheck = false;
    pill.replaceWith(inp);
    inp.focus();
    try { inp.select(); } catch (e) {}
    var feito = false;
    function commit() {
      if (feito) return; feito = true;
      var v = inp.value.trim();
      if (v) { chord.chord = v; marcarEditado(); }
      else if (isNew) { l.chords.splice(ci, 1); estado.sel = null; document.body.classList.remove("sel-ativa"); }
      renderEditor();
    }
    function cancelar() {
      if (feito) return; feito = true;
      if (isNew) { l.chords.splice(ci, 1); estado.sel = null; document.body.classList.remove("sel-ativa"); }
      renderEditor();
    }
    inp.onblur = commit;
    inp.onkeydown = function (e) {
      e.stopPropagation(); // não deixa as setas do editor moverem a nota enquanto digita
      if (e.key === "Enter") { e.preventDefault(); inp.blur(); }
      else if (e.key === "Escape") { e.preventDefault(); cancelar(); }
    };
  }
  function apagarAcorde() {
    var s = acordeSel(); if (!s) return;
    s.l.chords.splice(estado.sel.ci, 1);
    estado.sel = null;
    document.body.classList.remove("sel-ativa");
    marcarEditado(); renderEditor();
  }
  function adicionarAcordeEm(li, pos) {
    var l = estado.modelo[li];
    l.chords.push({ pos: pos, chord: "" });
    var ci = l.chords.length - 1;
    estado.sel = { li: li, ci: ci };
    document.body.classList.add("sel-ativa");
    renderEditor();
    editarInline(li, ci, true); // digita a nota ali mesmo
  }
  function marcarEditado() { estado.editouAlgo = true; }

  // lista de acordes em ordem (linha, depois posição) — para navegar pelo teclado
  function listaAcordes() {
    var arr = [];
    estado.modelo.forEach(function (l, li) {
      if (l.tipo !== "letra") return;
      l.chords.map(function (c, ci) {
        return { li: li, ci: ci, pos: Math.max(0, Math.min(l.text.length, c.pos)) };
      }).sort(function (a, b) { return a.pos - b.pos; })
        .forEach(function (x) { arr.push(x); });
    });
    return arr;
  }
  function navegarSelecao(dir) {
    var arr = listaAcordes();
    if (!arr.length) return;
    var cur = -1;
    if (estado.sel) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].li === estado.sel.li && arr[i].ci === estado.sel.ci) { cur = i; break; }
      }
    }
    var next = (cur < 0) ? (dir > 0 ? 0 : arr.length - 1) : Math.max(0, Math.min(arr.length - 1, cur + dir));
    selecionarAcorde(arr[next].li, arr[next].ci);
  }

  function entrarEdicao() {
    if (!estado.musicaAtual) return;
    estado.editando = true;
    estado.editouAlgo = false;
    estado.steps = 0;
    estado.sel = null;
    estado.modelo = construirModelo(corpoEfetivo(estado.musicaAtual));
    document.body.classList.add("editando");
    document.body.classList.remove("sel-ativa");
    atualizarCifra();
  }
  function sairEdicao(salvar) {
    if (salvar && estado.musicaAtual) {
      definirOverride(estado.musicaAtual, serializaModelo(estado.modelo));
    }
    estado.editando = false;
    estado.sel = null;
    document.body.classList.remove("editando");
    document.body.classList.remove("sel-ativa");
    atualizarCifra();
    renderLista();
  }
  function copiarCodigo() {
    var m = estado.musicaAtual; if (!m) return;
    var corpo = estado.editando ? serializaModelo(estado.modelo) : corpoEfetivo(m);
    var payload = "### " + m.titulo + " | dia:" + m.dia + " | tom:" + m.tom + "\n" + corpo;
    var btn = document.getElementById("btn-copiar");
    function ok() {
      if (!btn) return;
      var antigo = btn.innerHTML; btn.innerHTML = "&#10003; Copiado!";
      setTimeout(function () { btn.innerHTML = antigo; }, 1800);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(payload).then(ok, function () { window.prompt("Copie o código abaixo (Ctrl+C) e cole no chat:", payload); });
    } else {
      window.prompt("Copie o código abaixo (Ctrl+C) e cole no chat:", payload);
    }
  }

  function restaurarOriginal() {
    if (!estado.musicaAtual) return;
    if (!window.confirm("Voltar a cifra desta música ao original? Isso apaga as suas edições dela.")) return;
    removerOverride(estado.musicaAtual);
    estado.modelo = construirModelo(estado.musicaAtual.corpo);
    estado.sel = null;
    estado.editouAlgo = true;
    document.body.classList.remove("sel-ativa");
    renderEditor();
  }

  /* Encaixa a música inteira na tela reduzindo a fonte automaticamente */
  var FIT_MAX = 22, FIT_MIN = 8;
  function ajustarFonte() {
    if (!el.cifra) return;
    var wrap = el.cifraWrap;
    if (wrap.clientHeight < 40) { el.cifra.style.visibility = "visible"; return; }
    el.cifra.style.visibility = "hidden"; // some durante a medição (mesma execução síncrona)
    if (estado.fit) {
      el.cifra.classList.add("modo-fit");
      // mede com a maior fonte e vai reduzindo até caber (altura e largura)
      var tamanho = FIT_MAX;
      el.cifra.style.fontSize = tamanho + "px";
      var dispAltura = wrap.clientHeight - 8;
      var dispLargura = wrap.clientWidth;
      var guarda = 0;
      while (tamanho > FIT_MIN &&
            (el.cifra.scrollHeight > dispAltura || el.cifra.scrollWidth > dispLargura) &&
            guarda < 60) {
        tamanho -= 0.5;
        el.cifra.style.fontSize = tamanho + "px";
        guarda++;
      }
      atualizarBotaoFit(true);
    } else {
      el.cifra.classList.remove("modo-fit");
      var base = 15 + estado.fontManual * 1.5;
      base = Math.max(9, Math.min(30, base));
      el.cifra.style.fontSize = base + "px";
      atualizarBotaoFit(false);
    }
    el.cifra.style.visibility = "visible";
  }

  function atualizarBotaoFit(ativo) {
    if (!el.btnFit) return;
    el.btnFit.classList.toggle("ativo", ativo);
  }

  function transpor(delta) {
    estado.steps += delta;
    if (estado.steps > 11) estado.steps = 11;
    if (estado.steps < -11) estado.steps = -11;
    atualizarCifra();
  }

  function fecharMusica() {
    if (estado.editando) { sairEdicao(false); }
    document.body.classList.remove("vendo-musica");
    document.body.classList.remove("sel-ativa");
    estado.musicaAtual = null;
  }

  /* ---------- Init ---------- */
  function init() {
    el.tabs = document.getElementById("tabs");
    el.lista = document.getElementById("lista");
    el.musicaView = document.getElementById("musica-view");
    el.mvTitulo = document.getElementById("mv-titulo");
    el.mvPagina = document.getElementById("mv-pagina");
    el.mvNumero = document.getElementById("mv-numero");
    el.mvObs = document.getElementById("mv-obs");
    el.mvTom = document.getElementById("mv-tom");
    el.cifra = document.getElementById("cifra");
    el.cifraWrap = document.getElementById("cifra-wrap");
    el.btnFit = document.getElementById("btn-fit");
    el.navAtual = document.getElementById("nav-atual");
    document.getElementById("nav-prev").onclick = function () { navegar(-1); };
    document.getElementById("nav-next").onclick = function () { navegar(1); };

    document.getElementById("btn-voltar").onclick = fecharMusica;
    document.getElementById("btn-menos").onclick = function () { transpor(-1); };
    document.getElementById("btn-mais").onclick = function () { transpor(1); };
    document.getElementById("btn-reset").onclick = function () {
      estado.steps = 0; atualizarCifra();
    };
    el.btnFit.onclick = function () {
      estado.fit = !estado.fit;
      if (!estado.fit) estado.fontManual = 0;
      ajustarFonte();
    };
    document.getElementById("btn-fonte-menos").onclick = function () {
      estado.fit = false; estado.fontManual -= 1; ajustarFonte();
    };
    document.getElementById("btn-fonte-mais").onclick = function () {
      estado.fit = false; estado.fontManual += 1; ajustarFonte();
    };
    document.getElementById("btn-toggle").onclick = function () {
      var ocultar = !document.body.classList.contains("controles-ocultos");
      document.body.classList.toggle("controles-ocultos", ocultar);
      try { localStorage.setItem("hinario-controles", ocultar ? "ocultos" : "visiveis"); } catch (e) {}
      // recalcula o encaixe após a cortina abrir/fechar (transição ~240ms)
      setTimeout(ajustarFonte, 260);
    };
    try {
      if (localStorage.getItem("hinario-controles") === "ocultos") {
        document.body.classList.add("controles-ocultos");
      }
    } catch (e) {}
    // ---- Editor ----
    document.getElementById("btn-editar").onclick = entrarEdicao;
    document.getElementById("btn-salvar").onclick = function () { sairEdicao(true); };
    document.getElementById("btn-cancelar").onclick = function () { sairEdicao(false); };
    document.getElementById("btn-restaurar").onclick = restaurarOriginal;
    document.getElementById("btn-copiar").onclick = copiarCodigo;
    document.getElementById("sel-esq").onclick = function () { moverAcorde(-1); };
    document.getElementById("sel-dir").onclick = function () { moverAcorde(1); };
    document.getElementById("sel-editar").onclick = editarAcordeTexto;
    document.getElementById("sel-apagar").onclick = apagarAcorde;
    document.getElementById("sel-ok").onclick = function () {
      estado.sel = null; document.body.classList.remove("sel-ativa"); renderEditor();
    };

    document.getElementById("btn-tema").onclick = function () {
      var atual = document.documentElement.getAttribute("data-theme");
      var novo = atual === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", novo);
      try { localStorage.setItem("hinario-tema", novo); } catch (e) {}
    };

    try {
      var t = localStorage.getItem("hinario-tema");
      if (t) document.documentElement.setAttribute("data-theme", t);
    } catch (e) {}

    renderTabs();
    renderLista();

    document.addEventListener("keydown", function (e) {
      if (!document.body.classList.contains("vendo-musica")) return;

      // ---- modo edição: setas do teclado ----
      if (estado.editando) {
        var k = e.key;
        if (k === "ArrowLeft" || k === "ArrowRight") {
          e.preventDefault();
          if (!estado.sel) { navegarSelecao(1); }
          else { moverAcorde(k === "ArrowLeft" ? -1 : 1); }
        } else if (k === "ArrowUp") {
          e.preventDefault(); navegarSelecao(-1);
        } else if (k === "ArrowDown") {
          e.preventDefault(); navegarSelecao(1);
        } else if (k === "Enter") {
          if (estado.sel) { e.preventDefault(); editarAcordeTexto(); }
        } else if (k === "Delete") {
          if (estado.sel) { e.preventDefault(); apagarAcorde(); }
        } else if (k === "Escape") {
          if (estado.sel) {
            estado.sel = null; document.body.classList.remove("sel-ativa"); renderEditor();
          } else { sairEdicao(false); }
        }
        return;
      }

      if (e.key === "ArrowUp" || e.key === "+") { transpor(1); }
      else if (e.key === "ArrowDown" || e.key === "-") { transpor(-1); }
      else if (e.key === "ArrowLeft") { navegar(-1); }
      else if (e.key === "ArrowRight") { navegar(1); }
      else if (e.key === "Escape") { fecharMusica(); }
    });

    var reajuste;
    window.addEventListener("resize", function () {
      if (!estado.musicaAtual) return;
      clearTimeout(reajuste);
      reajuste = setTimeout(ajustarFonte, 120);
    });
    window.addEventListener("orientationchange", function () {
      setTimeout(ajustarFonte, 250);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
