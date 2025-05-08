import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COOKIE_NAME = 'ada-authentication';
const COOKIE_VALUE = 'authenticated';

// Paths that don't require authentication
const PUBLIC_PATHS = [
  '/api/verify-password',
  '/favicon.ico',
  '/favicon.png',
  '/220og-image.png',
  '/Group 2.webp',
  '/website logo.png',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Log the URL being accessed for debugging
  console.log('Middleware accessed:', pathname);
  
  // Skip authentication check for public paths and static assets
  if (
    PUBLIC_PATHS.some(path => pathname === path) ||
    pathname.startsWith('/_next/')
  ) {
    return NextResponse.next();
  }
  
  // Check for authentication cookie
  const authCookie = request.cookies.get(COOKIE_NAME);
  const isAuthenticated = authCookie?.value === COOKIE_VALUE;
  
  // If not authenticated, inject auth required meta tag
  if (!isAuthenticated) {
    const url = request.nextUrl.clone();
    const response = NextResponse.next();
    
    // Add a header that will be used by the server component
    response.headers.set('x-auth-required', 'true');
    
    return response;
  }
  
  // Continue to the requested page for authenticated users
  return NextResponse.next();
}

// See: https://nextjs.org/docs/app/building-your-application/routing/middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};