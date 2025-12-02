'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createAchievement(formData: FormData) {
  try {
    await prisma.achievement.create({
      data: {
        title: formData.get('title') as string,
        category: formData.get('category') as string,
        level: formData.get('level') as string,
        recipient: formData.get('recipient') as string,
        year: parseInt(formData.get('year') as string),
        description: formData.get('description') as string || null,
      }
    })
    revalidatePath('/dashboard/prestasi')
    revalidatePath('/kesiswaan/prestasi')
  } catch (error) {
    throw new Error('Gagal tambah prestasi')
  }
  redirect('/dashboard/prestasi')
}

export async function updateAchievement(id: number, formData: FormData) {
  try {
    await prisma.achievement.update({
      where: { id },
      data: {
        title: formData.get('title') as string,
        category: formData.get('category') as string,
        level: formData.get('level') as string,
        recipient: formData.get('recipient') as string,
        year: parseInt(formData.get('year') as string),
        description: formData.get('description') as string || null,
      }
    })
    revalidatePath('/dashboard/prestasi')
    revalidatePath('/kesiswaan/prestasi')
  } catch (error) {
    throw new Error('Gagal update prestasi')
  }
  redirect('/dashboard/prestasi')
}

export async function deleteAchievement(id: number) {
  try {
    await prisma.achievement.delete({ where: { id } })
    revalidatePath('/dashboard/prestasi')
    revalidatePath('/kesiswaan/prestasi')
  } catch (error) {
    throw new Error('Gagal hapus prestasi')
  }
}