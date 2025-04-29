import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // This will help debugging by logging the URL being accessed
  console.log('Middleware accessed:', request.nextUrl.pathname);
  
  // Continue to the requested page
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