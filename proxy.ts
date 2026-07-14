import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["ms", "en"];
const defaultLocale = "ms";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to default locale /ms
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Match all paths except:
    // - api routes
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico, images, icons, robots.txt, sitemap.xml
    "/((?!api|_next/static|_next/image|favicon.ico|images|icons|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
