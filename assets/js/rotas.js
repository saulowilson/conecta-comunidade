export function resolverRota(hash) {
  const entrada = String(hash || '#/inicio').replace(/^#\/?/, '');
  const [rota, parametros = ''] = entrada.split('?');
  return { rota: ['inicio', 'projetos', 'cadastro'].includes(rota) ? rota : 'nao-encontrada', parametros: new URLSearchParams(parametros) };
}

export function converterLink(href) {
  const [arquivo, busca = ''] = href.split('?');
  const rotas = { 'index.html': 'inicio', 'projetos.html': 'projetos', 'cadastro.html': 'cadastro' };
  return rotas[arquivo] ? `#/${rotas[arquivo]}${busca ? `?${busca}` : ''}` : href;
}
