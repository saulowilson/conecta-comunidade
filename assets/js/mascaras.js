export function somenteDigitos(value, limite) {
  return String(value).replace(/\D/g, '').slice(0, limite);
}

export function mascararCpf(value) {
  return somenteDigitos(value, 11).replace(/^(\d{3})(\d)/, '$1.$2').replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3').replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
}

export function mascararCep(value) {
  return somenteDigitos(value, 8).replace(/^(\d{5})(\d)/, '$1-$2');
}

export function mascararTelefone(value) {
  const digitos = somenteDigitos(value, 11);
  if (!digitos) return '';
  if (digitos.length <= 2) return `(${digitos}`;
  const ddd = digitos.slice(0, 2);
  const numero = digitos.slice(2);
  const corte = numero.length > 8 ? 5 : 4;
  return `(${ddd}) ${numero.slice(0, corte)}${numero.length > corte ? `-${numero.slice(corte)}` : ''}`;
}

export function cpfValido(value) {
  const digitos = somenteDigitos(value, 11);
  if (digitos.length !== 11 || /^(\d)\1{10}$/.test(digitos)) return false;
  for (let tamanho = 9; tamanho <= 10; tamanho += 1) {
    let soma = 0;
    for (let i = 0; i < tamanho; i += 1) soma += Number(digitos[i]) * (tamanho + 1 - i);
    const resto = (soma * 10) % 11;
    if ((resto === 10 ? 0 : resto) !== Number(digitos[tamanho])) return false;
  }
  return true;
}
