import { type NextRequest, NextResponse } from 'next/server';

export const proxy = (request: NextRequest) => {
  const path = request.nextUrl.pathname;

  const token = request.cookies.get('token')?.value;
  const isLoggedIn = !!token;

  const isAuthPage = path.startsWith('/authorization');
  const isPublicPath = path === '/' || isAuthPage;

  if (!isPublicPath && !isLoggedIn) {
    const loginUrl = new URL('/authorization', request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: '/((?!api|_next|icons|images|favicon.ico).*)',
};
