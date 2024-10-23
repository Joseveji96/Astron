import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Excluir rutas internas de Next.js y archivos estáticos
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|json)).*)',
    // Aplicar el middleware a todas las rutas de API
    '/api/(.*)',
    // Incluir las rutas públicas como parte de la configuración del matcher
    '/site',
    '/api/uploadthing',
  ],
};
