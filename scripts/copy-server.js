// Script para copiar server.mjs para api/ após o build
const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '../dist/obrigado/server/server.mjs');
const dest = path.join(__dirname, '../api/server.mjs');

try {
  // Criar diretório api se não existir
  const apiDir = path.dirname(dest);
  if (!fs.existsSync(apiDir)) {
    fs.mkdirSync(apiDir, { recursive: true });
  }

  // Copiar arquivo
  fs.copyFileSync(source, dest);
  console.log('✅ server.mjs copiado para api/server.mjs');
} catch (error) {
  console.error('❌ Erro ao copiar server.mjs:', error.message);
  process.exit(1);
}
