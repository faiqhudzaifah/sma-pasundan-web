import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { ArrowLeft, User } from 'lucide-react'
import Link from 'next/link'
import EditForm from './EditForm' // Import component form yang kita buat di atas

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function EditGuruPage({ params }: PageProps) {
  // 1. Ambil ID dari URL
  const { id } = await params

  // 2. Ambil data guru lama dari Database (Server Side)
  const teacher = await prisma.teacher.findUnique({
    where: { id: parseInt(id) }
  })

  // 3. Jika data tidak ditemukan, return 404
  if (!teacher) return notFound()

  return (
    <div className="max-w-xl mx-auto space-y-6">
      
      {/* Tombol Kembali */}
      <Link href="/dashboard/guru" className="flex items-center gap-2 text-slate-500 hover:text-green-600 transition mb-4">
        <ArrowLeft size={20} /> Batal & Kembali
      </Link>

      {/* Card Utama */}
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
        
        {/* Header Form */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600">
            <User size={24} />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Edit Data Guru</h1>
        </div>
        
        {/* Panggil Form Client di sini */}
        <EditForm teacher={teacher} />
        
      </div>
    </div>
  )
}