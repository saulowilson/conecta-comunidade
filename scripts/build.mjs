import { readFile, writeFile, mkdir, cp, rm, realpath, readdir } from 'node:fs/promises';
import { transform } from 'esbuild';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const paginas = {};
for (const [rota, arquivo] of Object.entries({ inicio: 'index.html', projetos: 'projetos.html', cadastro: 'cadastro.html' })) {
  const html = (await readFile(path.join(raiz, 'html', arquivo), 'utf8')).replaceAll('"../assets/', '"assets/');
  const conteudo = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
  if (!conteudo) throw new Error(`Conteúdo principal ausente: ${arquivo}`);
  paginas[rota] = conteudo;
}
await writeFile(path.join(raiz, 'assets/js/templates.js'), `export const paginas = ${JSON.stringify(paginas)};\n`);
const destino = path.join(raiz, 'dist');
if (path.dirname(destino) !== raiz || path.basename(destino) !== 'dist') throw new Error('Destino de build fora do projeto');
const destinoReal = await realpath(destino).catch(() => destino);
if (destinoReal !== destino) throw new Error('Destino de build redirecionado');
await rm(destino, { recursive: true, force: true });
await mkdir(destino, { recursive: true });
for (const arquivo of ['index.html', 'projetos.html', 'cadastro.html', 'app.html']) {
  const html = (await readFile(path.join(raiz, 'html', arquivo), 'utf8')).replaceAll('"../assets/', '"assets/');
  await writeFile(path.join(destino, arquivo), html.replace(/>\s+</g, '><').trim());
}
await cp(path.join(raiz, 'assets'), path.join(destino, 'assets'), { recursive: true });
const css = await readFile(path.join(raiz, 'assets/css/styles.css'), 'utf8');
await writeFile(path.join(destino, 'assets/css/styles.css'), (await transform(css, { loader: 'css', minify: true })).code);
for (const arquivo of await readdir(path.join(destino, 'assets/js'))) {
  if (!arquivo.endsWith('.js')) continue;
  const caminho = path.join(destino, 'assets/js', arquivo);
  const codigo = await readFile(caminho, 'utf8');
  const resultado = await transform(codigo, { loader: 'js', format: 'esm', target: 'es2022', minify: true, legalComments: 'none' });
  await writeFile(caminho, resultado.code);
}
await writeFile(path.join(destino, '.nojekyll'), '');
console.log('Build concluído em dist; templates gerados a partir das páginas HTML.');
