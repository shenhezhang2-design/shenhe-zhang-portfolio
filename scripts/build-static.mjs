import { cpSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
mkdirSync(output, { recursive: true });
for (const item of ['index.html', 'assets', 'css', 'js', '.nojekyll']) {
  cpSync(path.join(root, item), path.join(output, item), { recursive: true });
}
console.log('Static site prepared in dist/');
