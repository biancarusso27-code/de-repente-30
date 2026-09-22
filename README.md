# ORKUT DA BIBICA — DE REPENTE, 30

Protótipo do convite interativo (HTML + CSS + JavaScript puro, sem instalação).

## Como testar
1. Extraia a pasta.
2. Abra `index.html` no navegador.
3. Navegue pelos menus. Cada página tem seu próprio link (ex.: `index.html#/rsvp`), e os botões ← → ↻ da barra funcionam.

## Onde editar
Tudo o que muda fica no topo do `script.js`:
- `CONFIG.event`: data, horário, local e tema (aparecem em todas as páginas de uma vez).
- `CONFIG.videoUrl`: link do vídeo do convite (vazio = botão "em breve").
- `CONFIG.formEndpoint` ou `CONFIG.whatsapp`: para onde vão as confirmações de presença.
- Listas `scraps`, `outfits`, `friends`, `communities`: recados, looks, amigos e comunidades.

As cores e fontes ficam nas variáveis do início do `style.css`.

## Atenção: confirmações de presença
Enquanto `formEndpoint` e `whatsapp` estiverem vazios, o formulário **não envia a resposta para ninguém**
(a página avisa isso). Antes de divulgar o link, preencha um dos dois.

## Próximas etapas
- Substituir textos provisórios pelos textos finais.
- Inserir fotos reais.
- Ajustar a interface para ficar ainda mais fiel ao Orkut antigo (ex.: coluna direita com amigos e comunidades).
- Publicar o site em um domínio.
- Criar RSVP com banco de dados real (ou usar um serviço de formulários pelo `formEndpoint`).

IMPORTANTE:
Este é um protótipo autoral inspirado na estética de redes sociais dos anos 2000; não usa o sistema original do Orkut.
