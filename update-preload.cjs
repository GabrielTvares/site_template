#!/usr/bin/env node

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🔄 ATUALIZAÇÃO AUTOMÁTICA DE PRELOAD APÓS BUILD
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * Este script atualiza automaticamente as tags <link rel="preload">
 * no index.html com os hashes corretos dos arquivos gerados pelo Vite.
 * 
 * USO:
 * 1. Adicionar no package.json:
 *    "scripts": {
 *      "build": "vite build && node update-preload.js"
 *    }
 * 
 * 2. Executar:
 *    npm run build
 * 
 * O script irá:
 * ✓ Ler os arquivos gerados em dist/assets/
 * ✓ Identificar o CSS principal (index-*.css)
 * ✓ Identificar o JS principal (index-*.js)
 * ✓ Atualizar o dist/index.html com os hashes corretos
 * 
 * ═══════════════════════════════════════════════════════════════════════
 */

const fs = require('fs');
const path = require('path');

// Caminhos
const DIST_DIR = path.join(__dirname, 'dist');
const ASSETS_DIR = path.join(DIST_DIR, 'assets');
const INDEX_HTML = path.join(DIST_DIR, 'index.html');

/**
 * Encontra o arquivo CSS principal no diretório de assets
 */
function findMainCSS() {
  const files = fs.readdirSync(ASSETS_DIR);
  const cssFile = files.find(f => f.startsWith('index-') && f.endsWith('.css'));
  
  if (!cssFile) {
    console.warn('⚠️ Arquivo CSS principal não encontrado!');
    return null;
  }
  
  return `/assets/${cssFile}`;
}

/**
 * Encontra o arquivo JS principal no diretório de assets
 */
function findMainJS() {
  const files = fs.readdirSync(ASSETS_DIR);
  const jsFile = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
  
  if (!jsFile) {
    console.warn('⚠️ Arquivo JS principal não encontrado!');
    return null;
  }
  
  return `/assets/${jsFile}`;
}

/**
 * Atualiza o index.html com os caminhos corretos
 */
function updateIndexHTML(cssPath, jsPath) {
  if (!fs.existsSync(INDEX_HTML)) {
    console.error('❌ dist/index.html não encontrado! Execute o build primeiro.');
    process.exit(1);
  }
  
  let html = fs.readFileSync(INDEX_HTML, 'utf8');
  
  // Atualiza preload do CSS
  if (cssPath) {
    // Regex para encontrar a tag de preload do CSS
    const cssRegex = /<link\s+rel="preload"\s+href="\/assets\/index-[^"]+\.css"\s+as="style"[^>]*>/g;
    const newCSSTag = `<link rel="preload" href="${cssPath}" as="style" fetchpriority="high" />`;
    
    if (cssRegex.test(html)) {
      html = html.replace(cssRegex, newCSSTag);
      console.log(`✅ CSS preload atualizado: ${cssPath}`);
    } else {
      console.warn('⚠️ Tag de preload CSS não encontrada no HTML');
    }
  }
  
  // Opcional: Atualizar modulepreload do JS (Vite já faz isso automaticamente)
  // Mas podemos adicionar um preload explícito se quisermos
  
  // Salva o arquivo atualizado
  fs.writeFileSync(INDEX_HTML, html, 'utf8');
  console.log('✅ index.html atualizado com sucesso!\n');
}

/**
 * Exibe informações sobre os arquivos gerados
 */
function displayBuildInfo(cssPath, jsPath) {
  console.log('\n📦 Informações do Build:\n');
  
  if (cssPath) {
    const cssSize = fs.statSync(path.join(DIST_DIR, cssPath.substring(1))).size;
    console.log(`  CSS: ${cssPath}`);
    console.log(`       Tamanho: ${(cssSize / 1024).toFixed(2)} KB\n`);
  }
  
  if (jsPath) {
    const jsSize = fs.statSync(path.join(DIST_DIR, jsPath.substring(1))).size;
    console.log(`  JS:  ${jsPath}`);
    console.log(`       Tamanho: ${(jsSize / 1024).toFixed(2)} KB\n`);
  }
  
  // Lista todos os chunks gerados
  const allFiles = fs.readdirSync(ASSETS_DIR);
  const chunks = allFiles.filter(f => f.endsWith('.js') && !f.startsWith('index-'));
  
  if (chunks.length > 0) {
    console.log('  📂 Chunks gerados:');
    chunks.forEach(chunk => {
      const size = fs.statSync(path.join(ASSETS_DIR, chunk)).size;
      console.log(`     • ${chunk} (${(size / 1024).toFixed(2)} KB)`);
    });
    console.log('');
  }
}

/**
 * Função principal
 */
function main() {
  console.log('\n🔄 Atualizando preload de assets...\n');
  
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ Diretório dist/ não encontrado! Execute "npm run build" primeiro.');
    process.exit(1);
  }
  
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error('❌ Diretório dist/assets/ não encontrado!');
    process.exit(1);
  }
  
  const cssPath = findMainCSS();
  const jsPath = findMainJS();
  
  updateIndexHTML(cssPath, jsPath);
  displayBuildInfo(cssPath, jsPath);
  
  console.log('✨ Pronto! Seu site está otimizado para performance.\n');
}

// Executar
main();
