// Serverless function wrapper para Angular SSR no Vercel
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

export default async function handler(req, res) {
  try {
    // Usar caminho absoluto baseado no diretório de trabalho atual
    const serverPath = join(process.cwd(), 'dist/obrigado/server/server.mjs');
    
    // Importar dinamicamente o servidor Angular após o build
    const serverModule = await import(serverPath);
    
    // Usar o reqHandler exportado do server.ts
    if (serverModule.reqHandler) {
      return serverModule.reqHandler(req, res);
    }
    
    // Se reqHandler não estiver disponível, tentar usar o app diretamente
    res.status(500).json({ 
      error: 'Angular SSR handler not found',
      message: 'Make sure the build completed successfully'
    });
  } catch (error) {
    console.error('Error in Angular SSR handler:', error);
    res.status(500).json({ 
      error: 'Internal Server Error',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
