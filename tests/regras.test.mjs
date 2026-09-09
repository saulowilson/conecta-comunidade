import test from 'node:test';
import assert from 'node:assert/strict';
import { mascararCpf, mascararCep, mascararTelefone, cpfValido } from '../assets/js/mascaras.js';
import { resolverRota, converterLink } from '../assets/js/rotas.js';
import { lerPreferencias, salvarPreferencias, limparPreferencias } from '../assets/js/storage.js';

test('máscaras tratam colagem, limites e telefones de tamanhos distintos', () => {
  assert.equal(mascararCpf('abc52998224725999'), '529.982.247-25');
  assert.equal(mascararCep('60.0001239'), '60000-123');
  assert.equal(mascararTelefone('85912345678'), '(85) 91234-5678');
  assert.equal(mascararTelefone('8531234567'), '(85) 3123-4567');
  assert.equal(mascararTelefone(''), '');
});
test('CPF exige dígitos verificadores e rejeita repetição', () => {
  assert.equal(cpfValido('529.982.247-25'), true);
  assert.equal(cpfValido('529.982.247-26'), false);
  assert.equal(cpfValido('000.000.000-00'), false);
  assert.equal(cpfValido('529'), false);
});
test('rotas preservam parâmetros e tratam endereços desconhecidos', () => {
  assert.equal(resolverRota('').rota, 'inicio');
  assert.equal(resolverRota('#/cadastro?projeto=mentoria').parametros.get('projeto'), 'mentoria');
  assert.equal(resolverRota('#/desconhecida').rota, 'nao-encontrada');
  assert.equal(converterLink('cadastro.html?projeto=reuso'), '#/cadastro?projeto=reuso');
  assert.equal(converterLink('mailto:contato@conecta.example'), 'mailto:contato@conecta.example');
});
test('armazenamento mantém só preferências permitidas', () => {
  const dados = new Map();
  const storage = { getItem: (k) => dados.get(k), setItem: (k, v) => dados.set(k, v), removeItem: (k) => dados.delete(k) };
  assert.equal(salvarPreferencias(storage, { projeto: 'mentoria', perfil: 'voluntario', cpf: '52998224725' }), true);
  assert.deepEqual(lerPreferencias(storage), { projeto: 'mentoria', perfil: 'voluntario' });
  assert.equal([...dados.values()][0].includes('cpf'), false);
  assert.equal(salvarPreferencias(storage, { projeto: 'invalido', perfil: 'voluntario' }), false);
  assert.equal(limparPreferencias(storage), true);
  assert.equal(lerPreferencias(storage), null);
});
test('dados corrompidos e indisponibilidade não derrubam a aplicação', () => {
  assert.equal(lerPreferencias({ getItem: () => '{quebrado' }), null);
  assert.equal(lerPreferencias({ getItem: () => '{"projeto":"x","perfil":"y"}' }), null);
  assert.equal(salvarPreferencias({ setItem: () => { throw new Error('Quota'); } }, { projeto: 'reuso', perfil: 'apoiador' }), false);
  assert.equal(limparPreferencias({ removeItem: () => { throw new Error('Bloqueado'); } }), false);
});
