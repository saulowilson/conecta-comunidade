import { paginas } from './templates.js';
import { iniciarInterface } from './interface.js';
import { iniciarCadastro } from './cadastro.js';
import { resolverRota, converterLink } from './rotas.js';
import { lerPreferencias, salvarPreferencias, limparPreferencias } from './storage.js';

const main = document.querySelector('#conteudo');
const notificacao = document.querySelector('#notificacao');
let formularioAlterado = false;
let rotaAtual = location.hash || '#/inicio';

function obterStorage() {
  try { return window.localStorage; } catch { return null; }
}

function notificar(mensagem, erro = false) {
  notificacao.textContent = mensagem;
  notificacao.classList.toggle('feedback-error', erro);
}

function prepararFormulario(parametros) {
  const form = main.querySelector('#cadastro');
  if (!form) return;
  iniciarCadastro(main);
  const storage = obterStorage();
  const preferencias = storage ? lerPreferencias(storage) : null;
  if (preferencias) {
    form.elements.perfil.value = preferencias.perfil;
    form.elements.projeto.value = preferencias.projeto;
  }
  const projeto = parametros.get('projeto');
  if (['primeiros-passos', 'mentoria', 'reuso'].includes(projeto)) form.elements.projeto.value = projeto;
  const label = document.createElement('label');
  label.className = 'check';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'lembrar';
  label.append(checkbox, document.createTextNode('Lembrar somente meu perfil e projeto neste navegador. Nenhum dado de identificação será salvo.'));
  form.querySelector('#enviar').before(label);
  const limpar = document.createElement('button');
  limpar.type = 'button';
  limpar.className = 'button secondary';
  limpar.textContent = 'Apagar preferências salvas';
  limpar.addEventListener('click', () => {
    const removido = storage && limparPreferencias(storage);
    notificar(removido ? 'Preferências locais removidas.' : 'Não foi possível acessar o armazenamento deste navegador.', !removido);
  });
  form.append(limpar);
  form.addEventListener('input', () => { formularioAlterado = true; });
  form.addEventListener('submit', () => {
    if (!form.checkValidity()) return;
    formularioAlterado = false;
    if (!checkbox.checked) return;
    const salvo = storage && salvarPreferencias(storage, { perfil: form.elements.perfil.value, projeto: form.elements.projeto.value });
    form.querySelector('#resultado').textContent = salvo ? 'Simulação concluída. Apenas perfil e projeto foram salvos neste navegador; nenhum dado pessoal foi armazenado ou enviado.' : 'Simulação concluída, mas não foi possível salvar as preferências neste navegador. Nenhum dado pessoal foi armazenado ou enviado.';
    notificar(salvo ? 'Preferências salvas neste navegador.' : 'Armazenamento local indisponível. Você pode continuar sem salvar.', !salvo);
  });
}

function renderizar() {
  if (formularioAlterado && !window.confirm('Você tem dados de teste não concluídos. Deseja sair deste formulário?')) {
    history.replaceState(null, '', rotaAtual);
    return;
  }
  formularioAlterado = false;
  rotaAtual = location.hash || '#/inicio';
  const { rota, parametros } = resolverRota(rotaAtual);
  main.setAttribute('aria-busy', 'true');
  notificacao.textContent = '';
  main.innerHTML = paginas[rota] || '<h1>Página não encontrada</h1><p>Este endereço não corresponde a uma seção da aplicação.</p><a href="#/inicio">Voltar ao início</a>';
  for (const link of main.querySelectorAll('a[href]')) link.setAttribute('href', converterLink(link.getAttribute('href')));
  for (const link of document.querySelectorAll('.site-header nav > a')) {
    if (link.getAttribute('href') === `#/${rota}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  for (const project of main.querySelectorAll('.project')) {
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = 'Iniciativa demonstrativa';
    project.querySelector('h3').after(badge);
  }
  prepararFormulario(parametros);
  document.title = `${main.querySelector('h1')?.textContent || 'Página não encontrada'} | Conecta Comunidade`;
  main.setAttribute('aria-busy', 'false');
  main.focus({ preventScroll: true });
  const destino = parametros.get('secao') === 'missao' ? main.querySelector('#missao') : null;
  if (destino) destino.scrollIntoView();
  else window.scrollTo(0, 0);
}

window.addEventListener('hashchange', renderizar);
document.querySelector('.skip-link').addEventListener('click', (event) => { event.preventDefault(); main.focus(); });
window.addEventListener('beforeunload', (event) => { if (formularioAlterado) { event.preventDefault(); event.returnValue = ''; } });
iniciarInterface();
renderizar();
