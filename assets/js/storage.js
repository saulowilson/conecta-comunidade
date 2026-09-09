const CHAVE = 'conecta-comunidade:preferencias:v1';
const PROJETOS = ['primeiros-passos', 'mentoria', 'reuso'];
const PERFIS = ['voluntario', 'apoiador'];

export function lerPreferencias(storage) {
  try {
    const valor = JSON.parse(storage.getItem(CHAVE) || 'null');
    if (!valor || typeof valor !== 'object') return null;
    if (!PROJETOS.includes(valor.projeto) || !PERFIS.includes(valor.perfil)) return null;
    return { projeto: valor.projeto, perfil: valor.perfil };
  } catch {
    return null;
  }
}

export function salvarPreferencias(storage, valor) {
  if (!PROJETOS.includes(valor?.projeto) || !PERFIS.includes(valor?.perfil)) return false;
  try {
    storage.setItem(CHAVE, JSON.stringify({ projeto: valor.projeto, perfil: valor.perfil }));
    return true;
  } catch {
    return false;
  }
}

export function limparPreferencias(storage) {
  try { storage.removeItem(CHAVE); return true; } catch { return false; }
}
