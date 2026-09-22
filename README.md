# Hinário Digital ECC

Aplicativo web (feito para celular) com as letras e cifras das músicas do
**Encontro de Casais com Cristo (ECC)**, organizadas por dia.

## Funciona assim

- **Divisão por dia:** Sexta-feira, Sábado e Domingo.
- **Cifra estilo Cifra Club:** o acorde aparece em cima da sílaba certa.
- **Aumentar / diminuir o tom:** botões **−** e **+** (meio tom por vez);
  o botão de voltar (↻) retorna ao tom original.
- **Encaixar na tela:** reduz a letra automaticamente para a música inteira
  caber em uma tela só do celular. Também dá para ajustar o tamanho da letra
  na mão com **A−** e **A+**.
- **Página do hinário impresso** aparece em cada música (ex.: "pág. 12").
- **Tema claro/escuro** (botão no canto superior direito).
- **Editor de cifra** (ícone de lápis ✎ na tela da música): toque numa **nota**
  para **mover** (◀ ▶), **trocar** (✎) ou **apagar** (🗑); toque na **letra** para
  **adicionar** uma nota naquele ponto. **Salvar** guarda a correção **no seu
  aparelho** (a transposição passa a usar a nota corrigida). "↻ Original" desfaz
  as edições daquela música. As músicas com correção mostram o selo *"editada"*.
  *Obs.: por enquanto as edições ficam só no seu celular — quando você terminar de
  ajustar, dá pra publicar tudo de uma vez para todos que acessam o site.*

## Como colocar no ar (GitHub Pages) — grátis

1. Crie um repositório novo no GitHub (ex.: `hinario-ecc`).
2. Envie estes arquivos para o repositório:
   - `index.html`
   - a pasta `assets/` (com `styles.css`, `app.js`, `songs.js`)
   - `README.md`
   - (as fotos `.jpeg` **não** são necessárias para o app funcionar)
3. No repositório, vá em **Settings → Pages**.
4. Em **Branch**, escolha `main` e a pasta `/ (root)` e clique **Save**.
5. Aguarde ~1 minuto. O link do app vai aparecer nessa mesma página,
   algo como: `https://SEU-USUARIO.github.io/hinario-ecc/`
6. Pronto! É só abrir esse link no celular (dá para "adicionar à tela inicial").

## Como editar / corrigir uma música

Tudo fica no arquivo **`assets/songs.js`**. Cada música tem:

```js
{
  dia: "sabado",          // "sexta" | "sabado" | "domingo"
  ordem: 2,               // posição na lista do dia
  numero: 6,              // número no hinário impresso
  pagina: 6,              // página no hinário impresso
  titulo: "Saber Amar",
  tom: "D",               // tom em que a cifra foi escrita
  corpo: `
[D]Saber amar é [A]colher a [D]flor.
...`
}
```

O acorde vai **entre colchetes**, colado na sílaba onde ele toca:
`[D]Saber amar é [A]colher a [D]flor.` O aplicativo posiciona o acorde
acima da sílaba e transpõe sozinho quando você muda o tom.

Para trocar uma música de dia, é só mudar o campo `dia` e o `ordem`.

---

*Obs.: as músicas sem tom anotado à mão (Salmo 145, Para Ser Feliz,
Oração da Família, etc.) entraram em um tom sugerido, fácil de cantar —
qualquer uma pode ser corrigida no `songs.js`.*
