/*
  Hinário Digital ECC — base de dados das músicas
  ------------------------------------------------
  Formato das cifras (estilo ChordPro): o acorde vem entre colchetes,
  colado na sílaba onde ele deve tocar. Ex.: "[D]Pode entrar a [G]casa é [D]sua"
  O aplicativo posiciona o acorde acima da sílaba automaticamente e
  transpõe (aumenta/diminui o tom) sem estragar o alinhamento.

  Campos:
    dia    -> "sexta" | "sabado" | "domingo"
    ordem  -> ordem da música dentro do dia
    numero -> número da música no hinário impresso
    pagina -> página no hinário impresso
    titulo -> nome da música
    tom    -> tom base (o mesmo em que a cifra foi escrita)
    tomObs -> observação sobre o tom (ex.: "sugerido", "violão", "teclado")
    corpo  -> letra com as cifras
*/

window.HINARIO = [
/* ======================= SEXTA-FEIRA ======================= */
{
  dia: "sexta", ordem: 1, numero: 1, pagina: 3,
  titulo: "Aleluia — Pode Entrar", tom: "D",
  corpo: `
[D]Pode entrar a casa é sua. [G]Alelu[D]ia!
Lado a lado [Bm]viveremos. [Em]Alelu[A]ia! [D]
[D]O Encontro é de alegria. [G]Alelu[D]ia!
Cantaremos [Bm]neste dia. [Em]Alelu[A]ia! [D]
[D]Todos numa só família. [G]Alelu[D]ia!
De mãos dadas [Bm]como irmãos. [Em]Alelu[A]ia! [D]
[D]Corações entrelaçados. [G]Alelu[D]ia!
Pelo Cristo [Bm]abençoado. [Em]Alelu[A]ia! [D]
[D]Procurando a mesma luz. [G]Alelu[D]ia!
Chegaremos a [Bm]Jesus. [Em]Alelu[A]ia! [D]`
},
{
  dia: "sexta", ordem: 2, numero: 2, pagina: 3,
  titulo: "Cristo Já Vem", tom: "G",
  corpo: `
[G]Cristo já vem [Em]iluminar
Minha [C]alma[Am] de amor e [D]paz
Meu sol, Jesus [G]amigo

Os anjos [G]cantam
Em seu [Em]louvor
Derraman[C]do [Am]bênçãos de a[D]mor
[D]Meu sol, Jesus [G]amigo

Deixai que eu [G]viva
Sempre, sempre a cantar o [B7]amor
E o [Em]esplendor
Que o céu [C]criou
Em seu [D]louvor
[G]Cristo já vem`
},
{
  dia: "sexta", ordem: 3, numero: 4, pagina: 5,
  titulo: "Lenta e Calma", tom: "C",
  corpo: `
[C]Lenta e calma sobre a [Dm]terra
[G]Desce a noite, foge a [C]luz
[Am]Quero agora despedir-[Em]me
[F]Boa noite, meu Je[C]sus (bis)
[C]Senhor, dai-nos a ben[Dm]ção
[G]E do mal que nos se[C]duz
[Am]Nossos filhos e a nós guardai-[Em]nos
[F]Boa noite, meu Je[C]sus [G](bis)`
},

/* ========================= SÁBADO ========================= */
{
  dia: "sabado", ordem: 1, numero: 5, pagina: 5,
  titulo: "Alô Bom Dia", tom: "E", tomObs: "violão",
  corpo: `
[E]Alô, bom dia, ó [A]como vai vo[E]cê
[A]Um olhar bem amigo
Um claro s[B]orriso um aperto de [E]mão
E a gente sem [A]saber com e por q[E]ue
Se sente fe[A]liz e sai a canta[B]r a alegre canç[E]ão
[E]Saber dar um bom dia cheio de bon[F#m]dade
[B7]Dizer bom dia com since[E]ridade
É dar sempre o melhor do [F#m]nosso coraç[A]ão
A[E]lô, bom dia, ir[B7]mão... [E]

REFRÃO
[E]Bom dia nada custa ao nosso cora[F#m]ção
[B7]É bom fazer feliz o nosso irmão [E]
Por Deus se deve amar, amar sem di[F#m]stinção [A]
A[E]lô, bom dia, ir[B7]mão... [E]`
},
{
  dia: "sabado", ordem: 2, numero: 6, pagina: 6,
  titulo: "Saber Amar", tom: "D",
  corpo: `
[D]Saber amar é [A]colher a [D]flor.
[Bm]É cultivar o que Deus plan[A]tou.
[G]É ouvir a [A]voz da ra[F#m]zão,
[Bm]é só se[A]guir, sua di[Em]reçã[A7]o.  [D]

[D]Saber amar é [A]dizer a[D]mém.
[Bm]É superar o mal pelo [A]bem.
[G]É abrir, [A]sempre o cora[F#m]ção,
[Bm]Para pe[A]dir e [Em]dar o[A7] perd[D]ão.

[D]Saber amar é [A]compreen[D]der.
[Bm]É encontrar sempre o outro [A]ser.
[G]É sorrir, [A]um sorriso a [F#m]mais,
[Bm]é constru[A]ir, um[Em] mund[A7]o de pa[D]z.

[D]Saber amar é [A]plantar o a[D]mor.
[Bm]É confiar em nosso Se[A]nhor.
[G]Abraçar, [A]sempre o nosso ir[F#m]mão,
[Bm]é cami[A]nhar [Em]estendend[A7]o a mã[D]o`
},
{
  dia: "sabado", ordem: 3, numero: 8, pagina: 8,
  titulo: "Um Coração Para Amar", tom: "G",
  corpo: `
[G]Um coração para amar
Pra perdoar e sent[Am]ir  [D7]
P[Am]ara chor[D7]ar e sorr[Am]ir
[D7]Ao me criar tu me d[G]este

Um coração pra sonhar
Inquieto e sempre a bat[Am]er  [D7]
[Am]Ansioso p[D7]or ent[Am]ender
[D7]As coisas que tu diss[G]este

REFRÃO
[G7]Eis o que eu venho te d[C]ar
[D]Eis o que eu ponho no alt[G]ar [D/F#]
T[Em]oma senhor que ele é t[Am]eu
M[D]eu coração não é m[F]eu [G7]

Qu[G]ero que o meu coração
Seja tão cheio de p[Am]az  [D7]
Q[Am]ue não se s[D7]inta cap[Am]az
D[D7]e sentir ódio ou r[G]ancor

Quero que a minha oração
Possa me amadurec[Am]er  [D7]
L[Am]eve-me a c[D7]ompreend[Am]er
As consequ[D]ências do am[G]or

REFRÃO`
},
{
  dia: "sabado", ordem: 4, numero: 10, pagina: 10,
  titulo: "Sempre Encontrando", tom: "G", tomObs: "violão",
  corpo: `
[G]Sempre encontrando, Sempre encontrando
[D7]Sempre encontra[G]ndo nosso irmão
[Em]Sempre encontra[Am]ndo, [D7]sempre encontran[G]do nosso irmão
V[G7]iva a nossa be[C]la união
[D7]Viva a nossa be[G]la união
[Em]Viva a nossa [Am]bela união
[D7]Sempre encontran[G]do nosso irmão`
},
{
  dia: "sabado", ordem: 5, numero: 11, pagina: 10,
  titulo: "Canto Para as Refeições", tom: "D", tomObs: "dedilhado / violão",
  corpo: `
ANTES
[D]Ao Senhor oferecemos. [G]Alelui[D]a.
[Bm]O alimento que aqui te[Em]mos. [A]Alelu[D]ia.

ANTES
[D]Esta mesa de teus [G]filhos
[Bm]Vem Senhor aben[Em]ço[A]ar [D](bis)
[D]Haverá mais ale[G]gria, haverá mais ale[D]gria
[Bm]Com a tua, com a [Em]tua com[A]panhia [D](bis)

DEPOIS
[D]Ao Senhor agradecemos. [G]Alelu[D]ia.
[Bm]O alimento que tivem[Em]os. [A]Alelu[D]ia.`
},
{
  dia: "sabado", ordem: 6, numero: 13, pagina: 12,
  titulo: "És Água Viva", tom: "A", tomObs: "violão",
  corpo: `
Eu te p[A]eço desta
Água que tu tens!
É água viva
Meu Senh[Bm]or
Tenho sede e tenho
Fome de amo[E7]r
E acredito nesta
Fonte de onde v[A]ens
Vens de D[A]eus, estás
Em Deus, também és Deus
E Deus contigo faz um s[Bm]ó
Eu, porém, que vim
Da terra e volto ao [E7]pó
Quero viver eternamente
Ao lado t[A]eu

REFRÃO
És água v[D]iv[E]a
És vida n[A]ova[F#m]
E todo d[Bm]ia me
Bat[E]izas outra v[A]ez
Me fazes r[D]enasc[E]er
Me fazes r[A]eviv[F#m]er
Eu quero [Bm]água desta
Fonte de[E] onde v[A]ens`
},
{
  dia: "sabado", ordem: 7, numero: 15, pagina: 14,
  titulo: "Eu Quero um Rio", tom: "Em",
  corpo: `
[D]Ex[D7]iste um po[Em]ço  [A7]     no meio do d[D]eserto[Bm]
O povo passa p[Em]erto  [A7]    da sede a reclam[D]ar  [D7]

REFRÃO
Eu quero um r[G]io de água viva[A7]
Eu quero um s[F#m]opro de esperança[Bm]
Minha alma s[Em]egue e não se cans[A7]a
De caminh[D]ar  [D7]

[D]Se [D7]tu soube[Em]sse[A7]s    Quem pode dar-te [D]a vid[Bm]a
Seria dissolvi[Em]da  A [A7]mágoa mais cru[D]el  [D7]

REFRÃO

[D]Jesu[D7]s é a v[Em]ida[A7]           Vencendo[D] toda [Bm]morte
Mudando a nossa [Em]sorte [A7]   Livrando-nos do[D] mal[D7]`
},
{
  dia: "sabado", ordem: 8, numero: 16, pagina: 15,
  titulo: "Utopia", tom: "G", tomObs: "sugerido",
  corpo: `
Das muitas c[G]oisas
Do meu t[D7]empo de cri[G]ança
Guardo v[D7]ivo na lembr[G]ança
O aconch[G7]ego do meu l[C]ar
No fim da t[Am]arde
Quando t[D7]udo se aquiet[Am]ava
A fam[D7]ília se aj[Am]untava
Lá no alp[D7]endre a convers[G]ar [D7]
Meus pais não t[G]inham
Nem esc[D]ola e nem dinh[G]eiro
Todo o d[D]ia o ano int[G]eiro
Trabalh[G7]avam sem par[C]ar
Faltava tudo mas a gente nem lig[G]ava
O import[Em]ante não falt[Am]ava
Seu sorr[D7]iso e seu olh[G]ar
Eu tantas v[G]ezes
Vi meu p[D7]ai chegar cans[G]ado
Mas aqu[D7]ilo era sagr[G]ado
Um por [G7]um ele afag[C]ava
E pergunt[Am]ava quem fiz[D7]era estripol[Am]ia
E mam[D7]ãe nos defend[Am]ia
E tudo aos p[D7]oucos se ajeit[G]ava [D7]
O sol se p[G]unha, a vi[D7]ola alguém traz[G]ia
Todo m[D7]undo então ped[G]ia
Pro pap[G7]ai cantar com a g[C]ente
Desafinado meio rouco voz cans[G]ada
Ele cant[Em]ava mil to[Am]adas
Seu olh[D7]ar ao sol po[G]ente [D7]
Correu o t[G]empo
E hoje eu v[D7]ejo a marav[G]ilha
De se t[D7]er uma fam[G]ília
Quando t[G7]antos não a t[C]êm
Agora f[Am]alam do desqu[D7]ite do div[Am]órcio
O am[D7]or virou cons[Am]órcio
Comprom[D7]isso de ningu[G]ém [D7]
Há tantos f[G]ilhos
Que bem m[D7]ais do que um pal[G]ácio
Gostar[D7]iam de um abr[G]aço
E do car[G7]inho entre seus p[C]ais
Se os pais amassem o divórcio não vir[Bm]ia
Chame a [Em]isso de Utop[Am]ia
Eu a [D7]isso chamo p[G]az`
},
{
  dia: "sabado", ordem: 9, numero: 17, pagina: 16,
  titulo: "Eu Tenho Tanto", tom: "G",
  corpo: `
Eu tenho t[Am7]anto pra lhe fal[D7]ar
Mas com pal[G]avras não sei diz[Bm7]er   [A#7]
Como é gr[Am7]ande o meu am[D7]or por voc[G]ê    [G]          [Em7]
E não há n[Am7]ada pra compar[D7]ar
Para pod[G]er lhe explic[Bm7]ar   [A#7]
Como é gr[Am7]ande o meu am[D7]or por v[G]ocê [C]      [G]   [Em7]
Nem mesmo o c[Am7]éu, nem as estr[D7]elas
Nem mesmo o m[G]ar e o infin[Em7]ito
Não é mai[Am7]or que o meu am[D7]or
Nem mais bon[G]ito  [G]          [Em7]
Me desesp[Am7]ero a procur[D7]ar
Alguma f[G]orma de lhe fal[Em7]ar
Como é gr[A7]ande    [A7]   o meu am[A7]or       [A7]
Por voc[D7]ê         [D7]    [Am7]     [G#°]
Nunca se esqu[Am7]eça nenhum seg[D7]undo
Que eu tenho o am[G]or maior do m[Bm7]undo  [A#7]
Como é gr[Am7]ande o meu am[D7]or
Por voc[G]ê  [C]      [G]
Nunca se esqu[Am7]eça nenhum seg[D7]undo
Que eu t[G]enho o amor mai[Bm7]or do mund[A#7]o
Como é gr[Am7]ande o meu am[D7]or por v[G]ocê  [G]          [Em7]
Como é gr[Am7]ande o meu am[D7]or por voc[G]ê  [C]      [G]`
},
{
  dia: "sabado", ordem: 10, numero: 18, pagina: 17,
  titulo: "Salmo 22", tom: "D", tomObs: "teclado",
  corpo: `
Pelos pr[D]ados e camp[F#m7]inas
Verdej[G]antes eu v[D]ou
É o Senh[F#m7]or que me l[G]eva [Em7]
A descans[A4]ar  [A]
Junto às f[D]ontes de águas p[F#m7]uras
Repous[G]antes eu v[D]ou
Minhas f[F#m7]orças o Senh[G]or [Em7]
Vai anim[A4]ar  [A]

REFRÃO
[D]     Tu [G]és, Senh[A]or, o m[F#m7]eu past[Bm7]or
Por isso n[Em7]ada
Em minha v[A]ida faltar[Am7]á    [D]
[D]     Tu [G]és, Senh[A]or, o m[F#m7]eu past[Bm7]or
Por isso n[Em7]ada
Em minha v[A]ida faltar[G]á  [D]   [G]

Nos cam[D]inhos mais segur[F#m7]os
Junto D[G]ele eu v[D]ou
E pra s[F#m7]empre o Seu n[G]ome [Em7]
Eu honrar[A4]ei  [A]   [A]
Se eu enc[D]ontro mil ab[F#m7]ismos
Nos cam[G]inhos eu v[D]ou
Segur[F#m7]ança sempre t[G]enho
Em Suas m[A6]ãos [Am7]     [D4]

REFRÃO

Num banqu[D]ete em Sua c[F#m7]asa
Muito al[G]egre eu v[D]ou
Um lug[F#m7]ar em Sua m[G]esa [Em7]
Me prepa[A4]rou [A]
Ele [D]unge minha fr[F#m7]onte
E me f[G]az ser fel[D]iz
E transb[F#m7]orda a minha t[G]aça [Em7]
Em Seu am[Am7]or   [D4]

REFRÃO

Bem a fr[D]ente do inim[F#m7]igo
Confi[G]ante eu v[D]ou
Tenho s[F#m7]empre o Senh[G]or [Em7]
Junto de m[A4]im  [A]
Seu caj[D]ado me prot[F#m7]ege
E eu jam[G]ais temer[D]ei
Sempre j[F#m7]unto do Senh[G]or [Em7]
Eu estar[Am7]ei   [D4]

REFRÃO`
},
{
  dia: "sabado", ordem: 11, numero: 20, pagina: 19,
  titulo: "O Bom Cristão", tom: "D",
  corpo: `
Pa[D]rece que eu sabia
Que hoje era o dia de Cristo encon[A7]trar
Pois logo notei quando te encon[A7]trei
Pelo teu jeito de fa[D]lar

Eu nunca pensei nem mesmo esperei
Ver tanto amor no teu o[A7]lhar
E como o mundo é grande vou nem sei pra onde
E onde eu for eu vou fa[D]lar

Já nos encontramos
Só nos resta a[D7]gora é reve[G]lar [Gm]
Te amar ir[F#m]mão, sorrir e [B7]dar per[Em]dão
Faz um [A7]bom Cris[D]tão`
},
{
  dia: "sabado", ordem: 12, numero: 22, pagina: 21,
  titulo: "Imaculada Maria do Povo", tom: "G", tomObs: "sugerido",
  corpo: `
REFRÃO
[G]Imaculada Maria de [C]Deus
Coração p[D]obre, acolh[C]endo Jes[G]us
Imaculada Maria do p[C]ovo
Mãe dos afl[D]itos que est[D7]ão junto à cr[G]uz

Um coração que era sim para a v[C]ida
Um coraç[D]ão que era sim para o irm[G]ão
Um coraç[C]ão que era sim para D[G]eus
R[E7]eino de D[Am7]eus renova[D]ndo este chã[G]o

REFRÃO

Olhos abertos pra sede do p[C]ovo
Passo bem f[D]irme que o medo dest[G]erra
Mãos estend[C]idas que os tronos ren[G]egam
R[E7]eino de D[Am7]eus que reno[D7]va esta te[G]rra

REFRÃO

Faça-se, ó Pai, vossa plena vont[C]ade
Que os nossos p[D]assos se tornem mem[G]ória
Do amor fi[C]el que Maria ger[G]ou
R[E7]eino de D[Am7]eus atua[D7]ndo na Histó[G]ria

REFRÃO`
},
{
  dia: "sabado", ordem: 13, numero: 25, pagina: 24,
  titulo: "Porque Ele Vive", tom: "G", tomObs: "sugerido",
  corpo: `
Deus enviou
Seu filho am[C]ado [C9]    [C]
Para morr[G]er [Em]
No meu lug[F]ar [D]
Na cruz pag[G]ou [G7]
Por meus pec[C]ados [Cm]
Mas o sep[G]ulcro vaz[E7]io est[Am]á
Porque ele vive

REFRÃO
Porque Ele vive
Eu posso crer no [C]amanhã [C9]    [C]
Porque Ele v[G]ive
[Em]   Temor não h[F]á  [D/F#]
Mas eu bem s[G]ei [G7]
Que o meu fut[C]uro [Cm]
Está nas m[G]ãos do m[E7]eu Jes[Am]us
Que vivo está

Um dia eu vou
Cruzar os r[C]ios
E verei ent[G]ão
[Em]   Um Céu de L[F]uz [D]
E verei que l[G]á  [G7]
Em plena gl[C]ória [Cm]
Vitori[G]oso, v[E7]ive e r[Am]eina
O meu Jesus

REFRÃO

Porque Ele vive
Eu posso crer no amanhã
Porque Ele vive
Temor não h[F]á  [D/F#]
Mas eu bem s[G]ei [G7]
Que o meu fut[C]uro [Cm]
Está nas m[G]ãos do m[E7]eu Jes[Am]us
Que v[D]ivo est[G]á`
},
{
  dia: "sabado", ordem: 14, numero: 4, pagina: 5,
  titulo: "Lenta e Calma", tom: "C",
  corpo: `
[C]Lenta e calma sobre a [Dm]terra
[G]Desce a noite, foge a [C]luz
[Am]Quero agora despedir-[Em]me
[F]Boa noite, meu Je[C]sus (bis)
[C]Senhor, dai-nos a ben[Dm]ção
[G]E do mal que nos se[C]duz
[Am]Nossos filhos e a nós guardai-[Em]nos
[F]Boa noite, meu Je[C]sus [G](bis)`
},

/* ======================== DOMINGO ======================== */
{
  dia: "domingo", ordem: 1, numero: 5, pagina: 5,
  titulo: "Alô Bom Dia", tom: "E", tomObs: "violão",
  corpo: `
[E]Alô, bom dia, ó [A]como vai vo[E]cê
[A]Um olhar bem amigo
Um claro s[B]orriso um aperto de [E]mão
E a gente sem [A]saber com e por q[E]ue
Se sente fe[A]liz e sai a canta[B]r a alegre canç[E]ão
[E]Saber dar um bom dia cheio de bon[F#m]dade
[B7]Dizer bom dia com since[E]ridade
É dar sempre o melhor do [F#m]nosso coraç[A]ão
A[E]lô, bom dia, ir[B7]mão... [E]

REFRÃO
[E]Bom dia nada custa ao nosso cora[F#m]ção
[B7]É bom fazer feliz o nosso irmão [E]
Por Deus se deve amar, amar sem di[F#m]stinção [A]
A[E]lô, bom dia, ir[B7]mão... [E]`
},
{
  dia: "domingo", ordem: 2, numero: 28, pagina: 26,
  titulo: "Eu Quero Apenas", tom: "A",
  corpo: `
Eu quero ap[Bm]enas olh[E7]ar os c[A]ampos, e[F#m]u quero apen[Bm]as cantar[E7] meu can[A]to
Eu só não qu[Bm]ero cant[E7]ar soz[A]inho, eu q[F#m]uero um cor[Bm]o de pa[E7]ssari[A]nh[A7]os

REFRÃO
Quero lev[D]ar o meu ca[E7]nto ami[C#m]go a qua[F#m]lquer ami[Bm]go que p[E7]reci[A]sa[A7]r
Eu quero t[D]er um mi[E7]lhão de a[C#m]migos e b[F#m]em mais fo[Bm]rte pod[E7]er ca[A]nt[A7]ar
Eu quero t[D]er um mi[E7]lhão de a[C#m]migos e [F#m]bem mais f[Bm]orte pod[E7]er cant[A]ar

Eu quero ap[Bm]enas um v[E7]ento f[A]orte, l[F#m]evar meu bar[Bm]co no rum[E7]o nor[A]te
E no cam[Bm]inho o que [E7]eu pesc[A]ar quer[F#m]o dividir[Bm] quando [E7]lá ch[A]eg[A7]ar

REFRÃO

Eu quero cr[Bm]er na paz d[E7]o futur[A]o, [F#m]eu quero ter[Bm] um quintal[E7] sem mur[A]o
Quero meu f[Bm]ilho pis[E7]ando f[A]irme, ca[F#m]ntando a[Bm]lto, sorri[E7]ndo li[A]vr[A7]e

REFRÃO

Eu quero am[Bm]or decid[E7]indo a v[A]ida, [F#m]sentir a fo[Bm]rça da m[E7]ão am[A]iga
O meu irm[Bm]ão com sorr[E7]iso ab[A]erto, [F#m]se ele cho[Bm]rar quero es[E7]tar por [A]pe[A7]rto

REFRÃO

Venha com[Bm]igo olh[E7]ar os c[A]ampos, c[F#m]ante comig[Bm]o tamb[E7]ém meu c[A]anto
Eu só não qu[Bm]ero cant[E7]ar soz[A]inho, e[F#m]u quero um cor[Bm]o de pas[E7]sarin[A]ho[A7]s

REFRÃO`
},
{
  dia: "domingo", ordem: 3, numero: 30, pagina: 28,
  titulo: "Oração de São Francisco", tom: "Bm",
  corpo: `
Senh[Bm]or, faz[D]ei-me
Instrum[Em]ento de vossa p[Bm]az
Onde houver [Em]ódio
Que eu leve o am[Bm]or
Onde houver of[Em]ensa
Que eu leve o perd[Bm]ão
Onde houver disc[D]órdia
Que eu l[A/C#]eve a uni[Bm]ão
Onde houver d[D]úvidas
Que eu l[Em]eve a f[Bm]é
Onde houver [Em]erros
Que eu leve a verd[Bm]ade
Onde houver desesp[Em]ero
Que eu leve a esper[Bm]ança
Onde houver trist[D]eza
Que eu l[F#m]eve a alegr[Bm]ia
Onde houver tr[D]evas, que eu l[Em]eve a l[Bm]uz

REFRÃO
Ó M[Bm]estre, faz[D]ei
Que eu proc[Bm]ure m[Em]ais
Consol[D]ar que s[F#7/C#]er consol[Bm]ado
Compreend[Em]er que s[D]er compreend[A/C#]ido
Am[D]ar [F#7]   que ser am[Bm]ado
Pois é d[F#7]ando que se rec[Bm]ebe
É perdo[Em]ando que se[Em/D] é perdo[A/C#]ado
E é morr[D]endo qu[Em]e se v[Bm]ive
Para a v[Em]ida et[F#7]er_n[Bm]a

REFRÃO`
},
{
  dia: "domingo", ordem: 4, numero: 29, pagina: 27,
  titulo: "Salmo 145", tom: "G", tomObs: "sugerido",
  corpo: `
Por melh[G]or que seja algu[Dm7]ém   [G]
Chega o d[C]ia em que há de faltar [G]
[G]Só o Deus vivo a palavra man[Em7]tém
E jam[C]ais Ele há de fal[D7]har

REFRÃO
Q[G]uero cantar ao Senh[C]or
[Am7]Sempre, enquanto eu vi[D7]ver
[Bm7]Hei de provar Seu [Em7]amor, Seu v[Cm]alor
E S[G]eu [D7]pod[G]er [D7]

Nosso De[G]us põe-se do l[Dm7]ado  [G]
Dos fam[C]intos e injustiça[G]dos
[G]Dos pobres e opri[Em7]midos
Dos inj[A]ustamente venci[D7]dos

REFRÃO

Ele barr[G]a o caminho do[Dm7]s mau[G]s
Que ex[C]ploram sem compai[G]xão
[G]Mas dá força ao b[Em7]raço dos bons
Que sus[A]tentam o peso [D7]do irmão

Esse[G] é o nosso D[Dm7]eus  [G]
Seu pod[C]er permanece semp[G]re
[G]Sua força é a for[Em7]ça da gente
Vamos t[A]odos louvar no[D7]sso Deus`
},
{
  dia: "domingo", ordem: 5, numero: 20, pagina: 19,
  titulo: "O Bom Cristão", tom: "D",
  corpo: `
Pa[D]rece que eu sabia
Que hoje era o dia de Cristo encon[A7]trar
Pois logo notei quando te encon[A7]trei
Pelo teu jeito de fa[D]lar

Eu nunca pensei nem mesmo esperei
Ver tanto amor no teu o[A7]lhar
E como o mundo é grande vou nem sei pra onde
E onde eu for eu vou fa[D]lar

Já nos encontramos
Só nos resta a[D7]gora é reve[G]lar [Gm]
Te amar ir[F#m]mão, sorrir e [B7]dar per[Em]dão
Faz um [A7]bom Cris[D]tão`
},
{
  dia: "domingo", ordem: 7, numero: 11, pagina: 10,
  titulo: "Canto Para as Refeições", tom: "D", tomObs: "dedilhado / violão",
  corpo: `
ANTES
[D]Ao Senhor oferecemos. [G]Alelui[D]a.
[Bm]O alimento que aqui te[Em]mos. [A]Alelu[D]ia.

ANTES
[D]Esta mesa de teus [G]filhos
[Bm]Vem Senhor aben[Em]ço[A]ar [D](bis)
[D]Haverá mais ale[G]gria, haverá mais ale[D]gria
[Bm]Com a tua, com a [Em]tua com[A]panhia [D](bis)

DEPOIS
[D]Ao Senhor agradecemos. [G]Alelu[D]ia.
[Bm]O alimento que tivem[Em]os. [A]Alelu[D]ia.`
},
{
  dia: "domingo", ordem: 8, numero: 33, pagina: 31,
  titulo: "Para Ser Feliz", tom: "G", tomObs: "sugerido",
  corpo: `
P[G]ara ser feliz é prec[D7]iso ter
Esse céu azul na im[G]ensidão
É faz[G7]er da tristezas estr[C]elas a mais
E do pr[D7]anto uma canç[G]ão

REFRÃO
Há um mundo b[D7]em melhor
Todo feito pr[G]a você
[G7]É um mundo p[C]equenino
Que a ter[D7]nura f[G]ez

Para ser feliz é prec[D7]iso amar
E ver cada dia uma estr[G]ela a brilhar
É dei[G7]xar que a ternura inv[C]ada teu ser
Pra na p[D7]az de Deus viv[G]er

REFRÃO`
},
{
  dia: "domingo", ordem: 9, numero: 34, pagina: 32,
  titulo: "Oração da Família", tom: "D", tomObs: "sugerido",
  corpo: `
Que nenh[D]uma família comece
Em qualquer de rep[A7]ente
Que nenhuma família termine
Por falta de am[D]or
Que o casal seja um para o outro
De corpo e de m[A7]ente
E que nada no mundo separe
Um casal sonhad[D]or
Que nenhuma família
Se abrigue debaixo da p[A7]onte
Que ninguém interfira no lar
E na vida dos d[D]ois
Que ninguém os obrigue
A viver sem nenhum horiz[A7]onte
Que eles vivam do ontem
Do hoje e em função de um dep[D]ois
Que a família comece
E termine sabendo onde vai
E que o h[A7]omem carregue nos [A/C#]ombros
A graça de um pai
Que a mulher seja um céu de tern[D/F#]ura
Aconchego e calor
E que os f[D]ilhos conheçam
A força que brota do amor

REFRÃO
Abençoa, Senhor, as famílias! am[A7]ém!
Abenç[G]oa, Senh[A7]or, a minha tamb[D]ém
Abençoa, Senhor, as famílias! am[A7]ém!
Abenç[G]oa, Senh[A7]or, a minha tamb[D]ém

Que mar[D]ido e mulher tenham força
De amar sem med[A7]ida
Que ninguém vá dormir sem pedir
Ou sem dar seu perd[D]ão
Que as crianças aprendam no colo
O sentido da v[A7]ida
Que a família celebre a partilha
Do abraço e do p[D]ão
Que marido e mulher não se traiam
Nem traiam seus filh[A7]os
Que o ciúme não mate
A certeza do amor entre os d[D]ois
Que no seu firmamento
A estrela que tem maior br[A7]ilho
Seja a firme esperança de um céu
Aqui mesmo e dep[D]ois
Que a família comece
E termine sabendo onde vai
E que o h[A7]omem carregue nos [A/C#]ombros
A graça de um pai
Que a mulher seja um céu de tern[D/F#]ura
Aconchego e calor
E que os f[D]ilhos conheçam
A força que brota do amor

REFRÃO
Abençoa, Senh[A7]or, a minha também`
},

{
  dia: "domingo", ordem: 6, numero: 36, pagina: 34,
  titulo: "Chamados à Missão", tom: "G", tomObs: "tom original",
  corpo: `
[G]Eu sou cha[Am]mado / Você é cha[D7]mado
[G]Chamado somos todos [D7]nós [G]

[G]Ao discipu[Am]lado, à missionarie[D7]dade
[G]À solidarie[D7]dade, [G]

[G]Assim reavivará o [Em]dom de [D]Deus
[Am]Que está em [G]ti, que está em [D7]mim
Que está em [G]nós

[Em]Senhor e [D]Deus / Pai-Cria[G]dor
[Em]Graças e [D]bênçãos / abundantes sobre [G]nós [D]
[Em]Venham de [D]vós / Constante[G]mente
[Am]Somos o povo, a na[D7]ção / Promessa de Abra[G]ão

[Em]Em Jesus [D]Cristo / somos discí[G]pulos
[Am]Em perma[D7]nente mis[G]são

[Em]Senhor e [D]Deus / Pai-Cria[G]dor
[Am]Comprome[D7]tidos / com Jesus estamos [G]nós

[Em]Venha a [D]nós / O vosso [G]reino
[Am]E que o espírito es[D7]teja
[Em]Na caminhada e nos pro[D]teja
[D]Nossa se[D7]nhora / Medianeira nos [G]seja!`
}
];
