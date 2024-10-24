import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define los handlers como funciones separadas para mayor claridad
const beforeAuthHandler = async (req: Request) => {
  // Tu lógica beforeAuth aquí si es necesaria
};

const afterAuthHandler = async (auth: any, req: Request) => {
  const url = new URL(req.url);
  const searchParams = url.searchParams.toString();
  const hostname = new Headers(req.headers);

  const pathWithSearchParams = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ''
  }`;

  // Manejar subdominios
  const customSubDomain = hostname
    .get('host')
    ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
    .filter(Boolean)[0];

  if (customSubDomain) {
    return NextResponse.rewrite(
      new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url)
    );
  }

  // Manejar redirecciones de autenticación
  if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
    return NextResponse.redirect(new URL(`/agency/sign-in`, req.url));
  }

  // Manejar rutas raíz y site
  if (
    url.pathname === '/' ||
    (url.pathname === '/site' && url.host === process.env.NEXT_PUBLIC_DOMAIN)
  ) {
    return NextResponse.rewrite(new URL('/site', req.url));
  }

  // Manejar rutas de agency y subaccount
  if (
    url.pathname.startsWith('/agency') ||
    url.pathname.startsWith('/subaccount')
  ) {
    return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url));
  }
};

export default clerkMiddleware((auth, req) => {
  // Lista de rutas públicas
  const isPublicRoute = ['/site', '/api/uploadthing'].includes(
    new URL(req.url).pathname
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Si no es una ruta pública, ejecutar el handler afterAuth
  return afterAuthHandler(auth, req);
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};