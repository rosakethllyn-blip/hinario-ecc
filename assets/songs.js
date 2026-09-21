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
Lado a lado vive[Bm]remos. [Em]Alelu[A]ia! [D]
[D]O Encontro é de alegria. [G]Alelu[D]ia!
Cantaremos neste [Bm]dia. [Em]Alelu[A]ia! [D]
[D]Todos numa só família. [G]Alelu[D]ia!
De mãos dadas como ir[Bm]mãos. [Em]Alelu[A]ia! [D]
[D]Corações entrelaçados. [G]Alelu[D]ia!
Pelo Cristo abenço[Bm]ado. [Em]Alelu[A]ia! [D]
[D]Procurando a mesma luz. [G]Alelu[D]ia!
Chegaremos a Je[Bm]sus. [Em]Alelu[A]ia! [D]`
},
{
  dia: "sexta", ordem: 2, numero: 2, pagina: 3,
  titulo: "Cristo Já Vem", tom: "G",
  corpo: `
[G]Cristo já vem ilumi[Em]nar
[C]Minha alma de a[Am]mor e [D]paz
[G]Meu sol, Jesus A[D]migo. [G]

[Em]Os anjos cantam
[C]Em seu lou[Am]vor, [D]
[G]Derramando bên[D]çãos de amor
[G]Meu sol, Jesus A[D]migo. [G]

[B7]Deixa que eu viva
[Em]Sempre, sempre a [Am]cantar o amor
[D]E o Esplendor que o céu criou em seu lou[G]vor.`
},
{
  dia: "sexta", ordem: 3, numero: 4, pagina: 5,
  titulo: "Lenta e Calma", tom: "C",
  corpo: `
[C]Lenta e calma sobre a [Dm]terra
[G]Desce a noite, foge a [C]luz
[Am]Quero agora despedir-[Em]me
[F]Boa noite, meu Je[C]sus (bis)
[Am]Senhor, dai-nos a ben[Em]ção
[F]E do mal que nos se[C]duz
[Am]Nossos filhos e a nós guardai-[Em]nos
[F]Boa noite, meu Je[G]sus [C](bis)`
},

/* ========================= SÁBADO ========================= */
{
  dia: "sabado", ordem: 1, numero: 5, pagina: 5,
  titulo: "Alô Bom Dia", tom: "E", tomObs: "violão",
  corpo: `
[E]Alô, bom dia, ó [A]como vai vo[E]cê
[A]Um olhar bem a[B]migo [E]
[E]Um claro sorriso um a[A]perto de [E]mão
[A]E a gente sem saber com e por [B]que [E]
[E]Se sente feliz e sai a can[F#m]tar a alegre can[B]ção [E]
[E]Saber dar um bom dia cheio de bon[A]dade
[E]Dizer bom dia com since[F#m]ridade
[A]É dar sempre o melhor do nosso cora[E]ção
Alô, bom dia, ir[B7]mão... [E]

REFRÃO
[E]Bom dia nada custa ao [A]nosso cora[E]ção
[A]É bom fazer feliz o nosso ir[B]mão [E]
[E]Por Deus se deve a[F#m]mar, amar sem distin[B]ção [E]
Alô, bom dia, ir[B7]mão... [E]`
},
{
  dia: "sabado", ordem: 2, numero: 6, pagina: 6,
  titulo: "Saber Amar", tom: "D",
  corpo: `
[D]Saber amar é [A]colher a [D]flor.
[Bm]É cultivar o que Deus plan[A]tou.
[G]É ouvir a [A]voz da ra[F#m]zão,
[Bm]é só se[A]guir, sua dire[Em]ção. [A7] [D]

[D]Saber amar é [A]dizer a[D]mém.
[Bm]É superar o mal pelo [A]bem.
[G]É abrir, [A]sempre o cora[F#m]ção,
[Bm]Para pe[A]dir e dar o per[Em]dão. [A7] [D]

[D]Saber amar é [A]compreen[D]der.
[Bm]É encontrar sempre o outro [A]ser.
[G]É sorrir, [A]um sorriso a [F#m]mais,
[Bm]é constru[A]ir, um mundo de [Em]paz. [A7] [D]

[D]Saber amar é [A]plantar o a[D]mor.
[Bm]É confiar em nosso Se[A]nhor.
[G]Abraçar, [A]sempre o nosso ir[F#m]mão,
[Bm]é cami[A]nhar estendendo a [Em]mão [A7] [D]`
},
{
  dia: "sabado", ordem: 3, numero: 8, pagina: 8,
  titulo: "Um Coração Para Amar", tom: "G",
  corpo: `
[G]Um coração para amar
[Am]Pra perdoar e sen[D]tir
[D7]Para chorar e sor[Am]rir
Ao me criar Tu me [G]destes.

[G]Um coração pra sonhar
[Am]inquieto e sempre a ba[D]ter
[D7]Ansioso por enten[Am]der
As coisas que Tu dis[G]sestes.

REFRÃO
[G7]Eis o que venho Te [C]dar
[D]eis o que eu ponho no al[G]tar
[Em]toma Senhor, que ele é [Am]Teu
[D]Meu coração não é [G]meu

[G]Quero que o meu coração
[Am]Seja tão cheio de [D]paz
[D7]Que não se sinta ca[Am]paz
De sentir ódio ou ran[G]cor.
[G7]Quero que a minha o[C]ração
[D]Possa me amadure[G]cer
[Em]Leve-me a compreen[Am]der
[D]As conseqüências do a[G]mor`
},
{
  dia: "sabado", ordem: 4, numero: 10, pagina: 10,
  titulo: "Sempre Encontrando", tom: "G", tomObs: "violão",
  corpo: `
[G]Sempre encontrando, sempre encon[D7]trando
Sempre encon[Em]trando nosso ir[G]mão

Sempre encon[Am]trando [D7]
Sempre encontrando nosso ir[G]mão

[G7]Viva a nossa bela u[C]nião
[D7]Viva a nossa bela u[G]nião
[Em]Viva a nossa bela u[Am]nião
[D7]Sempre encontrando nosso ir[G]mão`
},
{
  dia: "sabado", ordem: 5, numero: 11, pagina: 10,
  titulo: "Canto Para as Refeições", tom: "D", tomObs: "dedilhado / violão",
  corpo: `
ANTES
[D]Ao Senhor ofere[G]cemos. Ale[D]luia.
[Bm]O alimento que a[Em]qui [A]temos. Ale[D]luia.

ANTES
[D]Esta mesa de teus [G]filhos
[Bm]Vem Senhor aben[Em]ço[A]ar [D](bis)
[D]Haverá mais ale[G]gria, haverá mais ale[D]gria
[Bm]Com a tua, com a [Em]tua com[A]panhia [D](bis)

DEPOIS
[D]Ao Senhor agrade[G]cemos. Ale[D]luia.
[Bm]O alimento que ti[Em]ve[A]mos. Ale[D]luia.`
},
{
  dia: "sabado", ordem: 6, numero: 13, pagina: 12,
  titulo: "És Água Viva", tom: "A", tomObs: "violão",
  corpo: `
Eu te peço desta [A]água que tu tens
És água [Bm]viva meu Se[E7]nhor
Tenho sede, tenho [A]fome de amor
E acredito nesta [Bm]fonte de onde [A]vens

Vens de Deus, estás em [E]Deus, também és [A]Deus,
E Deus contigo [Bm]faz um [E]só
Eu, porém, que vim da [A]terra e volto ao pó
Quero viver eterna[Bm]mente ao lado [A]Teu

REFRÃO
[D]És água [E]viva, és [A]vida no[Bm]va
[D]E todo dia me ba[E]tizas outra [A]vez
[Bm]Me fazes renas[E]cer, me fazes revi[A]ver
E eu quero água desta [Bm]fonte de onde [A]vens.`
},
{
  dia: "sabado", ordem: 7, numero: 15, pagina: 14,
  titulo: "Eu Quero um Rio", tom: "Em",
  corpo: `
[Em]Existe um poço, no meio do de[A7]serto [D] [Bm]
[Em]O povo passa [A7]perto, da sede a recla[D]mar [D7]

REFRÃO
[G]Eu quero um [A7]rio de água viva
[F#m]Eu quero um [Bm]sopro de esperança
[Em]Minha 'alma [A7]segue
E não [D]cansa, de cami[D7]nhar (bis)

[Em]Se tu soubesse quem pode dar-te a [A7]vida [D] [Bm]
[Em]Seria dissol[A7]vida a mágoa mais cru[D]el [D7]

REFRÃO
[G]Jesus é a [A7]vida, vencendo toda a morte
[F#m]Mudando a [Bm]nossa sorte, livrando-[Em]nos do [A7]mal [D]`
},
{
  dia: "sabado", ordem: 8, numero: 16, pagina: 15,
  titulo: "Utopia", tom: "G", tomObs: "sugerido",
  corpo: `
[G]Das muitas coisas, do meu [C]tempo de criança
[G]Guardo vivo na lem[D]brança, o aconchego do meu [G]lar
No fim da tarde, quando [C]tudo se aquietava
[G]A família se a[D]juntava, lá no alpendre a conver[G]sar
Meus pais não tinham, nem es[C]cola e nem dinheiro
[G]Todo o dia o ano in[D]teiro, trabalhavam sem pa[G]rar
Faltava tudo mas a [C]gente nem ligava
[G]O importante não fal[D]tava seu sorriso e seu o[G]lhar

[G]Eu, tantas vezes, vi meu [C]pai chegar cansado
[G]Mas aquilo era sa[D]grado, um por um ele afa[G]gava
E perguntava quem fi[C]zera estrepolia
[G]E a mamãe nos defen[D]dia e tudo aos poucos se aje[G]itava
O sol se punha e a vi[C]ola alguém trazia
[G]Todo mundo então pe[D]dia, pro papai cantar pra [G]gente
Desafinado, meio [C]rouco e voz cansada
[G]Ele cantava mil to[D]adas, seu olhar no sol po[G]ente

[G]Correu o tempo e hoje eu [C]vejo a maravilha
[G]De se ter uma fa[D]mília, quando tantos não a [G]têm
Agora falam do des[C]quite e do divórcio
[G]O amor virou con[D]sórcio, compromisso de nin[G]guém
Há tantos filhos que bem [C]mais do que um palácio
[G]Gostariam de um a[D]braço e do carinho entre seus [G]pais
Se os pais se amassem, o di[C]vórcio não viria
[G]Chamem a isso de u[D]topia, eu a isso chamo [G]PAZ`
},
{
  dia: "sabado", ordem: 9, numero: 17, pagina: 16,
  titulo: "Eu Tenho Tanto", tom: "G",
  corpo: `
[Am]Eu tenho tanto para lhe fa[D7]lar
[G]Mas com palavras não sei di[Em]zer
[Am]Como é grande o meu amor por vo[D7]cê [G]
[Am]E não há nada para se compa[D7]rar
[G]Para poder lhe expli[Em]car
[Am]Como é grande meu amor por vo[D7]cê [G]

[Am]Nem mesmo o céu, nem as es[D7]trelas
[G]Nem mesmo o mar e o infi[Em]nito
[Am]Não é maior que o meu a[D7]mor
[G]Nem mais bo[Bm]nito
[Am]Me desespero a procu[D7]rar
[G]Alguma coisa pra lhe fa[Em]lar
[Am]Como é grande o meu amor por vo[D7]cê [G]

[Am]Nunca se esqueça, nem um se[D7]gundo
[G]Que eu tenho o amor maior do [Em]mundo
[Am]Como é grande o meu amor por vo[D7]cê
[G]Mas como é grande o meu amor por vo[Bm]cê`
},
{
  dia: "sabado", ordem: 10, numero: 18, pagina: 17,
  titulo: "Salmo 22", tom: "D", tomObs: "teclado",
  corpo: `
[D]Pelos prados e cam[Bm]pinas
[G]Verde[A]jantes eu [D]vou
[F#]É o Senhor que me [G]leva a descan[Em7]sar [A]
[D]Junto às fontes de águas [Bm]puras
[G]Repou[A]santes eu [D]vou
[F#]Minhas forças o Se[G]nhor vai ani[Em7]mar [A]

REFRÃO
[G]Tu és, Se[A]nhor / o meu Pas[F#m]tor [Bm7]
[Em7]Por isso nada em minha [A]vida falta[D]rá (bis)

[D]Nos caminhos mais se[Bm]guros, junto dele eu [G]vou [A] [D]
[F#]E pra sempre o seu [G]nome eu honra[Em7]rei [A]
[D]Se eu encontro mil a[Bm]bismos, nos caminhos, eu [G]vou [A] [D]
[F#]Segurança sempre [G]tenho em Suas [Em7]mãos [A]

[D]Ao banquete em Sua [Bm]casa, muito alegre eu [G]vou [A] [D]
[F#]Um lugar em Sua [G]mesa me prepa[Em7]rou [A]
[D]Ele unge minha [Bm]fronte e me faz ser fe[G]liz [A] [D]
[F#]E transborda a minha [G]taça em Seu a[Em7]mor [A]

[D]Com alegria e espe[Bm]rança
[G]Cami[A]nhando eu [D]vou
[F#]Minha vida está [G]sempre em suas [Em7]mãos [A]
[D]E na casa do Se[Bm]nhor eu irei habi[G]tar [A] [D]
[F#]E este canto para [G]sempre irei can[Em7]tar [A]`
},
{
  dia: "sabado", ordem: 11, numero: 20, pagina: 19,
  titulo: "O Bom Cristão", tom: "D",
  corpo: `
[D]Parece que eu sabia
[Em]Que hoje era o dia [A7]/ de Cristo encon[D]trar
Pois logo no[A7]tei / quando te encon[D]trei
Pelo teu [Em]jeito de fa[A7]lar [D]

[D]Eu nunca pensei [D7]/ nem mesmo espe[G]rei [Gm]
[F#m]Ver tanto a[B7]mor no [Em]teu o[A7]lhar [D]
[G]E como o [F#m]mundo é [B7]grande / vou [Em]nem sei pra [A7]onde [D]
E onde eu for eu vou falar

[D]Já nos encontramos
[Em]Só nos resta a[A7]gora é reve[D]lar
Te amar ir[A7]mão / sorrir e dar per[D]dão
Faz um [Em]bom Cris[A7]tão [D]`
},
{
  dia: "sabado", ordem: 12, numero: 22, pagina: 21,
  titulo: "Imaculada Maria do Povo", tom: "G", tomObs: "sugerido",
  corpo: `
REFRÃO
[G]Imacu[Em]lada / Maria de [C]Deus [D]
[G]Coração pobre aco[Em]lhendo Je[Am]sus [D]
[G]Imacu[Em]lada / Maria do [C]Povo [D]
[G]Mãe dos aflitos que es[Am]tão junto à [D]cruz [G]

[G]Um coração que era [C]SIM para a [G]vida
[G]Um coração que era [C]SIM para o ir[D]mão
[G]Um coração que era [C]SIM para [G]Deus
[Em]Reino de Deus reno[Am]vando este [D]chão [G]

[G]Olhos abertos [C]pra sede do [G]povo
[G]Passo bem firme que o [C]medo des[D]terra
[G]Mãos estendidas que os [C]tronos rene[G]gam
[Em]Reino de Deus que re[Am]nova esta [D]terra [G]

[G]Faça-se, ó Pai [C]Vossa plena von[G]tade
[G]Que os nossos passos se [C]tornem me[D]mória
[G]Do amor fiel que [C]Maria ge[G]rou
[Em]Reino de Deus atu[Am]ando na his[D]tória [G]`
},
{
  dia: "sabado", ordem: 13, numero: 25, pagina: 24,
  titulo: "Porque Ele Vive", tom: "G", tomObs: "sugerido",
  corpo: `
[G]Deus enviou / seu [C]Filho a[G]mado
Para morrer / no meu lu[D]gar
[G]Na cruz pagou / por [C]meus pe[G]cados
Mas o se[C]pulcro, va[G]zio es[D]tá, porque Ele [G]vive!

REFRÃO
[G]Porque Ele [C]vive, eu posso [G]crer no amanhã
[G]Porque Ele [C]vive, temor não [D]há
[G]Mas eu bem [C]sei, que o meu fu[G]turo
Está nas [C]mãos do meu Je[G]sus, [D]que vivo es[G]tá

[G]Um dia vou / cru[C]zar os [G]rios,
E verei então / um céu de [D]luz
[G]E verei lá / em [C]plena gló[G]ria
Vitori[C]oso, vive e [G]reina o [D]meu Je[G]sus!`
},
{
  dia: "sabado", ordem: 14, numero: 4, pagina: 5,
  titulo: "Lenta e Calma", tom: "C",
  corpo: `
[C]Lenta e calma sobre a [Dm]terra
[G]Desce a noite, foge a [C]luz
[Am]Quero agora despedir-[Em]me
[F]Boa noite, meu Je[C]sus (bis)
[Am]Senhor, dai-nos a ben[Em]ção
[F]E do mal que nos se[C]duz
[Am]Nossos filhos e a nós guardai-[Em]nos
[F]Boa noite, meu Je[G]sus [C](bis)`
},

/* ======================== DOMINGO ======================== */
{
  dia: "domingo", ordem: 1, numero: 5, pagina: 5,
  titulo: "Alô Bom Dia", tom: "E", tomObs: "violão",
  corpo: `
[E]Alô, bom dia, ó [A]como vai vo[E]cê
[A]Um olhar bem a[B]migo [E]
[E]Um claro sorriso um a[A]perto de [E]mão
[A]E a gente sem saber com e por [B]que [E]
[E]Se sente feliz e sai a can[F#m]tar a alegre can[B]ção [E]
[E]Saber dar um bom dia cheio de bon[A]dade
[E]Dizer bom dia com since[F#m]ridade
[A]É dar sempre o melhor do nosso cora[E]ção
Alô, bom dia, ir[B7]mão... [E]

REFRÃO
[E]Bom dia nada custa ao [A]nosso cora[E]ção
[A]É bom fazer feliz o nosso ir[B]mão [E]
[E]Por Deus se deve a[F#m]mar, amar sem distin[B]ção [E]
Alô, bom dia, ir[B7]mão... [E]`
},
{
  dia: "domingo", ordem: 2, numero: 28, pagina: 26,
  titulo: "Eu Quero Apenas", tom: "A",
  corpo: `
[D]Eu quero a[E]penas olhar os [A]campos
[D]Eu quero a[E]penas cantar meu [A]canto
[F]Eu só não [Bm]quero é cantar so[E]zinho [A]
[F]Eu quero um [Bm]coro de passa[E]rinhos [A]

REFRÃO
[D]Quero le[E]var o meu canto a[A]migo
[F]A qualquer a[Bm]migo que preci[E]sar [A]
[D]Eu quero [E]ter um milhão de a[A]migos
[F]E bem mais [Bm]forte poder can[E]tar [A]

[D]Eu quero a[E]penas um vento [A]forte
[D]Levar meu [E]barco no rumo [A]norte
[F]E no ca[Bm]minho o que eu pes[E]car [A]
[F]Quero divi[Bm]dir quando lá che[E]gar [A]

[D]Eu quero [E]crer na paz do fu[A]turo
[D]Eu quero [E]ter um quintal sem [A]muro
[F]Quero meu [Bm]filho pisando [E]firme [A]
[F]Cantando [Bm]alto, sorrindo [E]livre [A]

[D]Eu quero o a[E]mor decidindo a [A]vida
[D]Sentir a [E]força da mão a[A]miga
[F]O meu ir[Bm]mão com sorriso a[E]berto [A]
[F]Se ele [Bm]chora quero estar por [E]perto [A]

[D]Venha co[E]migo olhar os [A]campos
[D]Cante co[E]migo também meu [A]canto
[F]Eu só não [Bm]quero cantar so[E]zinho [A]
[F]Eu quero um [Bm]coro de passa[E]rinho [A]`
},
{
  dia: "domingo", ordem: 3, numero: 30, pagina: 28,
  titulo: "Oração de São Francisco", tom: "Bm",
  corpo: `
[Bm]Senhor, fazei-me um instru[F#m]mento de vossa [Bm]paz
[Bm]Onde houver ódio, que eu [Em]leve o a[F#m]mor
[Bm]Onde houver ofensa, que eu [Em]leve o per[F#m]dão
[Bm]Onde houver discórdia, que eu [Em]leve a uni[F#m]ão
[Bm]Onde houver dúvida, que eu [F#m]leve a [Bm]fé

[Bm]Onde houver erro, que eu [Em]leve a ver[F#m]dade
[Bm]Onde houver desespero, que eu [Em]leve a espe[F#m]rança
[Bm]Onde houver tristeza, que eu [Em]leve a ale[F#m]gria
[Bm]Onde houver trevas, que eu [F#m]leve a [Bm]luz

[D]Ó Mestre, fazei que eu pro[A]cure mais
[Bm]Consolar que ser conso[F#m]lado
[D]Compreender que ser compreen[A]dido
[Bm]Amar, que ser a[F#m]mado
[D]Pois, é dando que se re[A]cebe
[Bm]É perdoando que se é per[F#m]doado
[G]E é morrendo que se [D]vive
[Em]Para a [F#m]vida e[Bm]terna`
},
{
  dia: "domingo", ordem: 4, numero: 29, pagina: 27,
  titulo: "Salmo 145", tom: "G", tomObs: "sugerido",
  corpo: `
[G]Por melhor que seja al[C]guém
[G]Chega o dia em que há de fal[D]tar
[G]Só o Deus vivo a pa[C]lavra mantém
[G]E jamais Ele [D]há de fal[G]tar

REFRÃO
[C]Quero cantar ao Se[G]nhor
[C]Sempre enquanto eu vi[D]ver
[G]Hei de provar Seu a[C]mor
[G]Seu valor e [D]Seu po[G]der

[G]Nosso Deus põe-se do [C]lado
[G]Dos famintos e injusti[D]çados
[G]Dos pobres e o[C]primidos
[G]Dos injusta[D]mente ven[G]cidos

[G]Ele barra o caminho dos [C]maus
[G]Que exploram sem compai[D]xão
[G]Mas dá força ao [C]braço dos bons
[G]Que sustenta o [D]peso do ir[G]mão

[G]Este é o nosso [C]Deus
[G]Seu poder permanece [D]sempre
[G]Sua força é a [C]força da gente
[G]Vamos todos lou[D]var nosso [G]Deus`
},
{
  dia: "domingo", ordem: 5, numero: 20, pagina: 19,
  titulo: "O Bom Cristão", tom: "D",
  corpo: `
[D]Parece que eu sabia
[Em]Que hoje era o dia [A7]/ de Cristo encon[D]trar
Pois logo no[A7]tei / quando te encon[D]trei
Pelo teu [Em]jeito de fa[A7]lar [D]

[D]Eu nunca pensei [D7]/ nem mesmo espe[G]rei [Gm]
[F#m]Ver tanto a[B7]mor no [Em]teu o[A7]lhar [D]
[G]E como o [F#m]mundo é [B7]grande / vou [Em]nem sei pra [A7]onde [D]
E onde eu for eu vou falar

[D]Já nos encontramos
[Em]Só nos resta a[A7]gora é reve[D]lar
Te amar ir[A7]mão / sorrir e dar per[D]dão
Faz um [Em]bom Cris[A7]tão [D]`
},
{
  dia: "domingo", ordem: 6, numero: 11, pagina: 10,
  titulo: "Canto Para as Refeições", tom: "D", tomObs: "dedilhado / violão",
  corpo: `
ANTES
[D]Ao Senhor ofere[G]cemos. Ale[D]luia.
[Bm]O alimento que a[Em]qui [A]temos. Ale[D]luia.

ANTES
[D]Esta mesa de teus [G]filhos
[Bm]Vem Senhor aben[Em]ço[A]ar [D](bis)
[D]Haverá mais ale[G]gria, haverá mais ale[D]gria
[Bm]Com a tua, com a [Em]tua com[A]panhia [D](bis)

DEPOIS
[D]Ao Senhor agrade[G]cemos. Ale[D]luia.
[Bm]O alimento que ti[Em]ve[A]mos. Ale[D]luia.`
},
{
  dia: "domingo", ordem: 7, numero: 33, pagina: 31,
  titulo: "Para Ser Feliz", tom: "G", tomObs: "sugerido",
  corpo: `
[G]Para ser fe[Em]liz / é preciso [C]ver [D]
[G]Este céu a[Em]zul / e esta imensi[C]dão [D]
[G]É fazer das tris[Em]tezas / rique[C]zas a [D]mais
[G]E do [C]pranto uma can[D]ção [G]

REFRÃO
[C]Há um mundo bem me[G]lhor
[C]Todo feito pra vo[D]cês
[C]É um mundo de a[G]mor [Em]
[Am]Que o [D]Cristo [G]fez

[G]Cristo quer de [Em]mim / difundir seu a[C]mor [D]
[G]Para constru[Em]ir / um mundo me[C]lhor [D]
[G]E andar sem des[Em]canso / à procu[C]ra do [D]bem
[G]E fazer meu ir[C]mão cres[D]cer [G]`
},
{
  dia: "domingo", ordem: 8, numero: 34, pagina: 32,
  titulo: "Oração da Família", tom: "D", tomObs: "sugerido",
  corpo: `
[D]Que nenhuma família co[G]mece em qualquer de re[A]pente
[D]Que nenhuma família ter[G]mine por falta de a[A]mor
[D]Que o casal seja um para o [G]outro de corpo e de [A]mente
[D]E que nada no mundo se[G]pare um casal sonha[D]dor

REFRÃO
[D]Que a família comece e ter[G]mine sabendo onde [A]vai
[D]E que o homem carregue nos [G]ombros a graça de um [A]pai
[D]Que a mulher seja um céu de ter[G]nura, aconchego e ca[A]lor
[D]E que os filhos conheçam a [G]força que brota do a[D]mor
[G]Abençoa, Se[A]nhor, as fa[D]mílias, a[Bm]mém
[G]Abençoa, Se[A]nhor, a minha tam[D]bém (bis)

[D]Que marido e mulher tenham [G]força de amar sem me[A]dida
[D]Que ninguém vá dormir sem pe[G]dir ou sem dar seu per[A]dão
[D]Que as crianças aprendam no [G]colo o sentido da [A]vida
[D]Que a família celebre a par[G]tilha do abraço e do [D]pão

[D]Que marido e mulher não se [G]traiam e nem traiam seus [A]filhos
[D]Que o ciúme não mate a cer[G]teza do amor entre os [A]dois
[D]Que no seu firmamento a es[G]trela que tem maior [A]brilho
[D]Seja a firme esperança de um [G]céu aqui mesmo e de[D]pois`
},

/* ========================= EXTRAS ========================= */
{
  dia: "extras", ordem: 1, numero: 36, pagina: 34,
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
