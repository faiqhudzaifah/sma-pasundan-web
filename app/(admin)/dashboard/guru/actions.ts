'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createTeacher(formData: FormData) {
  try {
    await prisma.teacher.create({
      data: {
        name: formData.get('name') as string,
        subject: formData.get('subject') as string,
        position: formData.get('position') as string,
        image: formData.get('image') as string || null,
      }
    })
    revalidatePath('/dashboard/guru')
    revalidatePath('/profil/guru')
  } catch (error) {
    throw new Error('Gagal menambahkan guru')
  }
  
  redirect('/dashboard/guru')
}

export async function updateTeacher(id: number, formData: FormData) {
  try {
    await prisma.teacher.update({
      where: { id },
      data: {
        name: formData.get('name') as string,
        subject: formData.get('subject') as string,
        position: formData.get('position') as string,
        image: formData.get('image') as string || null,
      }
    })
    revalidatePath('/dashboard/guru')
    revalidatePath('/profil/guru')
  } catch (error) {
    throw new Error('Gagal mengupdate guru')
  }
 
  redirect('/dashboard/guru')
}

export async function deleteTeacher(id: number) {
  try {
    await prisma.teacher.delete({ where: { id } })
    revalidatePath('/dashboard/guru')
    revalidatePath('/profil/guru')
  } catch (error) {
    throw new Error('Gagal menghapus guru')
  }
}