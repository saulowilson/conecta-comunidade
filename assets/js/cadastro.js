import { mascararCpf, mascararTelefone, mascararCep, cpfValido } from './mascaras.js';

export function iniciarCadastro(root = document) {
  const form = root.querySelector('#cadastro');
  if (!form) return;
  const campo = (nome) => form.elements.namedItem(nome);
  const mascaras = { cpf: mascararCpf, telefone: mascararTelefone, cep: mascararCep };
  const data = new Date();
  const hoje = `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, '0')}-${String(data.getDate()).padStart(2, '0')}`;
  campo('nascimento').max = hoje;
  const projeto = new URLSearchParams(location.search).get('projeto');
  if (['primeiros-passos', 'mentoria', 'reuso'].includes(projeto)) campo('projeto').value = projeto;
  form.querySelector('#enviar').disabled = false;
  form.addEventListener('invalid', (event) => {
    const input = event.target;
    const id = `${input.id}-erro`;
    let erro = form.querySelector(`#${id}`);
    if (!erro) {
      erro = document.createElement('small');
      erro.id = id;
      erro.className = 'field-error';
      erro.setAttribute('role', 'alert');
      input.after(erro);
    }
    erro.textContent = input.validationMessage;
    input.setAttribute('aria-invalid', 'true');
    const descricoes = new Set((input.getAttribute('aria-describedby') || '').split(' ').filter(Boolean));
    descricoes.add(id);
    input.setAttribute('aria-describedby', [...descricoes].join(' '));
  }, true);
  form.addEventListener('input', (event) => {
    const input = event.target;
    input.setCustomValidity?.('');
    input.removeAttribute('aria-invalid');
    const erro = input.id && form.querySelector(`#${input.id}-erro`);
    if (erro) erro.textContent = '';
    if (mascaras[input.name]) input.value = mascaras[input.name](input.value);
    form.querySelector('#resultado').textContent = '';
  });
  campo('cpf').addEventListener('change', () => {
    campo('cpf').setCustomValidity(cpfValido(campo('cpf').value) ? '' : 'Confira os dígitos do CPF de teste.');
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    campo('nome').setCustomValidity(campo('nome').value.trim().length >= 3 ? '' : 'Informe um nome com pelo menos três caracteres.');
    for (const nome of ['endereco', 'bairro', 'cidade']) campo(nome).setCustomValidity(campo(nome).value.trim() ? '' : 'Preencha este campo com texto, não apenas espaços.');
    campo('cpf').setCustomValidity(cpfValido(campo('cpf').value) ? '' : 'Confira os dígitos do CPF de teste.');
    if (!form.reportValidity()) return;
    form.querySelector('#resultado').textContent = 'Simulação concluída. Nenhuma inscrição real foi realizada e nenhum dado pessoal foi enviado ou armazenado.';
  });
}

iniciarCadastro();
