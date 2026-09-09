import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const tipos = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp' };
http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const arquivo = path.resolve(raiz, `.${pathname === '/' ? '/index.html' : pathname}`);
    if (!arquivo.startsWith(`${raiz}${path.sep}`)) { response.writeHead(403); response.end('Acesso negado'); return; }
    const conteudo = await readFile(arquivo);
    response.writeHead(200, { 'Content-Type': tipos[path.extname(arquivo)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff' });
    response.end(conteudo);
  } catch { response.writeHead(404); response.end('Arquivo não encontrado'); }
}).listen(4173, '127.0.0.1', () => console.log('Projeto disponível em http://127.0.0.1:4173'));
