import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import EditForm from './EditForm'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function EditBeritaPage({ params }: PageProps) {
  const { id } = await params

  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) }
  })

  if (!post) return notFound()

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Link href="/dashboard/berita" className="flex items-center gap-2 text-slate-500 hover:text-green-600 transition mb-4">
        <ArrowLeft size={20} /> Batal & Kembali
      </Link>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Edit Berita</h1>
        <EditForm post={post} />
      </div>
    </div>
  )
}