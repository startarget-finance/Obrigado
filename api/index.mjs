// Wrapper para Vercel serverless function
// Este arquivo será executado pelo Vercel e importa o handler do Angular SSR

export default async function handler(req, res) {
  try {
    // Importar o handler do servidor Angular SSR
    // Usar caminho relativo baseado na localização do arquivo
    const serverPath = new URL('../dist/obrigado/server/server.mjs', import.meta.url).pathname;
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
