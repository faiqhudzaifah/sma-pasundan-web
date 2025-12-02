'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createPost(formData: FormData) {
  try {
    const title = formData.get('title') as string
    //slug sederhana
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') + '-' + Date.now()

    await prisma.post.create({
      data: {
        title,
        slug,
        category: formData.get('category') as string,
        content: formData.get('content') as string,
        image: formData.get('image') as string || null,
      }
    })
    revalidatePath('/dashboard/berita')
    revalidatePath('/berita')
  } catch (error) {
    throw new Error('Gagal membuat berita')
  }
  redirect('/dashboard/berita')
}

export async function updatePost(id: number, formData: FormData) {
  try {
    const title = formData.get('title') as string
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') + '-' + Date.now()

    await prisma.post.update({
      where: { id },
      data: {
        title,
        slug,
        category: formData.get('category') as string,
        content: formData.get('content') as string,
        image: formData.get('image') as string || null,
      }
    })
    revalidatePath('/dashboard/berita')
    revalidatePath('/berita')
  } catch (error) {
    throw new Error('Gagal update berita')
  }
  redirect('/dashboard/berita')
}

export async function deletePost(id: number) {
  try {
    await prisma.post.delete({ where: { id } })
    revalidatePath('/dashboard/berita')
    revalidatePath('/berita')
  } catch (error) {
    throw new Error('Gagal hapus berita')
  }
}