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

  function renderCorpo(corpo, steps, useFlat) {
    var frag = document.createDocumentFragment();
    var linhas = corpo.replace(/^\n+/, "").replace(/\n+$/, "").split("\n");
    linhas.forEach(function (linha) {
      if (linha.trim() === "") {
        var vazio = document.createElement("div");
        vazio.className = "linha-vazia";
        frag.appendChild(vazio);
        return;
      }
      if (ehSecao(linha)) {
        var sec = document.createElement("div");
        sec.className = "secao";
        sec.textContent = linha.trim();
        frag.appendChild(sec);
        return;
      }
      frag.appendChild(renderLinha(linha, steps, useFlat));
    });
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
    steps: 0 // semitons de transposição da música aberta
  };

  var el = {};

  function musicasDoDia(dia) {
    return window.HINARIO
      .filter(function (m) { return m.dia === dia; })
      .sort(function (a, b) { return a.ordem - b.ordem; });
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
    el.cifra.appendChild(renderCorpo(m.corpo, estado.steps, useFlat));
    // esconde durante a medição para não "piscar" o tamanho grande
    el.cifra.style.visibility = "hidden";
    requestAnimationFrame(function () {
      requestAnimationFrame(ajustarFonte);
    });
  }

  /* Encaixa a música inteira na tela reduzindo a fonte automaticamente */
  var FIT_MAX = 22, FIT_MIN = 8;
  function ajustarFonte() {
    if (!el.cifra) return;
    var wrap = el.cifraWrap;
    if (wrap.clientHeight < 40) { el.cifra.style.visibility = "visible"; return; }
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
    document.body.classList.remove("vendo-musica");
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
      if (e.key === "ArrowUp" || e.key === "+") { transpor(1); }
      else if (e.key === "ArrowDown" || e.key === "-") { transpor(-1); }
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
