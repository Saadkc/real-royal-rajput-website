import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
import assert from 'node:assert/strict';
const pages=readdirSync('.').filter(file=>file.endsWith('.html'));
let checked=0;
for(const file of pages){
 const html=readFileSync(file,'utf8');
 assert.match(html,/<title>[^<]+Real Royal Rajput<\/title>/,`${file}: brand title`);
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${file}: single page heading`);
 assert.match(html,/<main id="main">/,`${file}: main landmark`);
 assert.doesNotMatch(html,/Al Noor|AL NOOR|href="#"/,`${file}: old brand or empty link`);
 for(const [,attribute,url] of html.matchAll(/\b(href|src)="([^"]+)"/g)){
  if(/^(https?:|mailto:|tel:|data:)/.test(url))continue;
  const [path,hash]=url.split('#');
  const target=resolve(dirname(file),path.split('?')[0]||file);
  assert.ok(existsSync(target),`${file}: broken ${attribute} ${url}`);
  if(hash){const content=readFileSync(target,'utf8');assert.ok(content.includes(`id="${hash}"`),`${file}: missing anchor ${url}`);}
  checked++;
 }
 for(const match of html.matchAll(/<img\b[^>]*>/g))assert.match(match[0],/alt="[^"]*"/,`${file}: image alternative text`);
}
assert.equal(pages.length,19,'Expected 19 complete pages');
console.log(`Passed: ${pages.length} pages, ${checked} local asset/link/anchor references, page headings, brand titles, image alternative text, and no empty links.`);
