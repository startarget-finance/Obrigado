// Serverless function wrapper para Angular SSR no Vercel
export default async function handler(req, res) {
  try {
    // Importar dinamicamente o servidor Angular após o build
    const serverModule = await import('../dist/obrigado/server/server.mjs');
    
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
