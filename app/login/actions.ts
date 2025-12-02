'use server'

import { prisma } from '@/lib/prisma'
import { createSession, deleteSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'

// --- ACTION LOGIN ---
export async function loginAction(prevState: any, formData: FormData) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  if (!username || !password) {
    return { error: 'Username dan password wajib diisi.' }
  }

  try {
    // 1. Cari Admin
    const admin = await prisma.admin.findUnique({
      where: { username: username }
    })

    if (!admin) {
      return { error: 'Username tidak ditemukan.' }
    }

    // 2. Cek Password (Bcrypt)
    const isMatch = await bcrypt.compare(password, admin.password)

    if (!isMatch) {
      return { error: 'Password salah.' }
    }

    // 3. Buat Session
    await createSession(admin.id, admin.username)
    
  } catch (err) {
    console.error('Login Error:', err)
    return { error: 'Terjadi kesalahan sistem.' }
  }

  // 4. Redirect ke Dashboard
  redirect('/dashboard')
}

// --- ACTION LOGOUT ---
export async function logoutAction() {
  await deleteSession()
  redirect('/login')
}