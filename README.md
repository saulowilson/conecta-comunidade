# Conecta Comunidade

Projeto acadêmico de Desenvolvimento Front-End para Web, elaborado para Saulo Wilson de Araújo Silva. A ONG, iniciativas, contatos e cadastros são fictícios. Nenhuma inscrição ou doação real é processada.

## Executar

Requisito: Node.js moderno com suporte a módulos ES e ao executor nativo de testes (Node 22 ou superior).

```sh
npm run build
npm test
npm start
```

Abra `http://127.0.0.1:4173` para as páginas tradicionais e `http://127.0.0.1:4173/app.html` para a SPA. Execute a versão de `dist`, pois ela recebe os caminhos normalizados e os templates gerados. Não abra os arquivos com `file://`: módulos ES exigem um servidor HTTP.

## Estrutura

- `html/`: fontes das páginas inicial, projetos, cadastro e shell da SPA.
- `assets/css/`: sistema de cores, tipografia, layouts e estados.
- `assets/images/`: diagramas geométricos autorais, com fontes SVG e exportações PNG/WebP.
- `assets/js/`: módulos da interface, cadastro, máscaras, armazenamento, rotas e aplicação.
- `scripts/`: build e servidor local restrito a 127.0.0.1.
- `tests/`: testes automatizados de máscaras, CPF, rotas e persistência.
- `dist/`: saída gerada para publicação. O build remove somente esse diretório após verificar seu destino.

`templates.js` é gerado a partir das páginas em `html/`. Edite as fontes HTML e execute o build novamente; não edite os templates gerados.

## Experiências

1. HTML5 semântico, títulos hierárquicos, três páginas, formulário agrupado e validação/máscaras.
2. Variáveis CSS, escala tipográfica, Grid de 12 colunas na abertura, cinco breakpoints, Flexbox, navegação mobile, submenu, modal e estados de controles.
3. SPA por hash, templates, eventos, feedback de validação, módulos ES e localStorage com preferências opcionais.
4. Preparação de build e documentação. Versionamento remoto, colaboração, auditoria visual e publicação ainda pendentes. Não há histórico de commits, pull request ou URL de produção nesta entrega local.

## Dados e funcionamento

Use apenas dados fictícios nos formulários. A máscara não valida existência de CPF, CEP, telefone ou pessoa. O CPF passa por conferência matemática dos dígitos; isso não prova sua autenticidade. As regras do cliente não substituem validação de servidor em um produto real.

A SPA pode salvar somente `perfil` e `projeto`, mediante marcação da opção correspondente. Nome, CPF, e-mail, telefone, endereço e mensagem não são persistidos. O usuário pode apagar as preferências. Dados corrompidos, valores desconhecidos e indisponibilidade do armazenamento são tratados sem interromper a aplicação.

As rotas são `#/inicio`, `#/projetos` e `#/cadastro`. A rota de cadastro aceita `?projeto=mentoria`, `primeiros-passos` ou `reuso`. Há uma página de recuperação para rotas desconhecidas.

## Acessibilidade

Inclui idioma do documento, títulos hierárquicos, landmarks, link de pular ao conteúdo, rótulos associados, fieldset/legend, descrições de campos, foco visível, aria-current, mensagens de erro e região de status. Menus funcionam por teclado; o modal usa dialog nativo. O CSS respeita prefers-reduced-motion.

Validação de marcação HTML não comprova conformidade integral com WCAG. Testes visuais, navegação real por teclado, leitor de tela, zoom e capturas ainda devem ser realizados. Não foram declarados como executados.

## Validação

`npm test` verifica máscaras, dígitos do CPF, endereços de rota, parâmetros, persistência, exclusão, corrupção e falhas de armazenamento. Relatórios JSON do W3C documentam a validação de marcação realizada.

Na primeira validação, `autocomplete="street-address"` em um input de linha única foi substituído por `address-line1`; a nova validação não apresentou mensagens. Após mudanças posteriores, consulte `validacao-final.json` para o estado mais recente.

## Publicação e manutenção

Publique o conteúdo de `dist/` em uma hospedagem estática com HTTPS. Rotas por hash dispensam regra de fallback para as páginas internas da SPA. Não publique fontes de trabalho, testes ou dados locais de usuários como parte do site.

O build compacto preserva o HTML original em `html/`. As imagens SVG são pequenas e escaláveis; PNG e WebP são fornecidos como recursos alternativos. A minificação de JavaScript não foi incorporada: os módulos são entregues legíveis e devem ser medidos antes de escolher um empacotador.

Não há serviços externos, analytics, pagamentos, chaves ou credenciais no projeto.
