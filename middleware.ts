import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedRoutes = ['/dashboard']

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route))
  const sessionCookie = req.cookies.get('session')?.value

  // 1. Coba akses Dashboard tanpa login -> Tendang ke Login
  if (isProtectedRoute && !sessionCookie) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  // 2. Sudah Login tapi buka halaman Login lagi -> Tendang ke Dashboard
  if (path === '/login' && sessionCookie) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}