import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { ArrowLeft, User } from 'lucide-react'
import Link from 'next/link'
// Import component client yang sudah dibuat
import EditPrestasiForm from './EditPrestasiForm'

export default async function EditPrestasiPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  const achievement = await prisma.achievement.findUnique({
    where: { id: parseInt(id) }
  })

  if (!achievement) return notFound()

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      
      <Link href="/dashboard/prestasi" className="flex items-center gap-2 text-slate-500 hover:text-green-600 transition mb-4">
        <ArrowLeft size={20} /> Batal & Kembali
      </Link>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600">
            <User size={24} />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Edit Data Prestasi</h1>
        </div>
        
        {/* Panggil Client Form di sini */}
        <EditPrestasiForm achievement={achievement} />
        
      </div>
    </div>
  )
}