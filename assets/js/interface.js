export function iniciarInterface() {
  const nav = document.querySelector('.site-header nav');
  if (!nav || nav.dataset.pronto) return;
  nav.dataset.pronto = 'true';
  nav.id = 'navegacao';
  const toggle = document.createElement('button');
  toggle.className = 'menu-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-controls', nav.id);
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = 'Abrir menu';
  nav.before(toggle);
  const close = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Abrir menu';
  };
  toggle.addEventListener('click', () => {
    const aberto = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(aberto));
    toggle.textContent = aberto ? 'Fechar menu' : 'Abrir menu';
    nav.classList.toggle('is-open', aberto);
  });
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) close(); });
  const detalhes = document.createElement('details');
  detalhes.className = 'nav-dropdown';
  const sumario = document.createElement('summary');
  sumario.textContent = 'Sobre o projeto';
  const lista = document.createElement('div');
  lista.className = 'dropdown-content';
  const inicio = document.createElement('a');
  inicio.href = document.body.dataset.spa ? '#/inicio?secao=missao' : 'index.html#missao';
  inicio.textContent = 'Nossa proposta';
  const aviso = document.createElement('button');
  aviso.type = 'button';
  aviso.textContent = 'Como funciona a demonstração';
  lista.append(inicio, aviso);
  detalhes.append(sumario, lista);
  nav.append(detalhes);
  const dialog = document.createElement('dialog');
  dialog.setAttribute('aria-labelledby', 'titulo-demonstracao');
  const titulo = document.createElement('h2');
  titulo.id = 'titulo-demonstracao';
  titulo.textContent = 'Uma ONG fictícia, um projeto de aprendizagem';
  const texto = document.createElement('p');
  texto.textContent = 'Este site foi desenvolvido para uma atividade acadêmica. Não recebe doações, não confirma inscrições reais e não envia dados pessoais a servidores. Utilize somente dados fictícios nos formulários.';
  const fechar = document.createElement('button');
  fechar.type = 'button';
  fechar.className = 'button';
  fechar.textContent = 'Entendi, fechar';
  dialog.append(titulo, texto, fechar);
  document.body.append(dialog);
  aviso.addEventListener('click', () => dialog.showModal());
  fechar.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => aviso.focus());
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || dialog.open) return;
    detalhes.open = false;
    if (nav.classList.contains('is-open')) { close(); toggle.focus(); }
  });
  document.addEventListener('click', (event) => { if (!detalhes.contains(event.target)) detalhes.open = false; });
}

iniciarInterface();
