// Wrapper para Vercel serverless function
// Este arquivo será executado pelo Vercel e importa o handler do Angular SSR
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function handler(req, res) {
  try {
    // Usar caminho absoluto baseado no diretório de trabalho
    // No Vercel, process.cwd() aponta para /var/task
    const serverPath = join(process.cwd(), 'dist/obrigado/server/server.mjs');
    
    // Importar o handler do servidor Angular SSR
    const serverModule = await import(serverPath);
    
    // Tentar usar default export primeiro, depois reqHandler
    const handler = serverModule.default || serverModule.reqHandler;
    
    if (handler) {
      return handler(req, res);
    }
    
    res.status(500).json({
      error: 'Handler not found',
      message: 'Angular SSR handler not exported correctly'
    });
  } catch (error) {
    console.error('Error loading Angular SSR:', error);
    res.status(500).json({
      error: 'Failed to load Angular SSR handler',
      message: error.message,
      stack: error.stack
    });
  }
}
