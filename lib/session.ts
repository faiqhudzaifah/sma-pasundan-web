import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const secretKey = process.env.SESSION_SECRET || 'rahasia-negara-api-123'
const encodedKey = new TextEncoder().encode(secretKey)

type SessionPayload = {
  adminId: number
  username: string
  expiresAt: Date
}

// 1. Membuat Session (Login Berhasil)
export async function createSession(adminId: number, username: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 Hari
  const session = await new SignJWT({ adminId, username, expiresAt })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)

  const cookieStore = await cookies()
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

// 2. Mengecek Session (Middleware / Halaman Admin)
export async function getSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')?.value
  if (!session) return null

  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload as unknown as SessionPayload
  } catch (error) {
    console.log('Session Invalid')
    return null
  }
}

// 3. Menghapus Session (Logout)
export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
  redirect('/login')
}