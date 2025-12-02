import { prisma } from '@/lib/prisma'
import { updateAchievement } from '../../actions'
import { notFound } from 'next/navigation'
import { Save, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function EditPrestasiPage({ params }: PageProps) {
  const { id } = await params
  const achievement = await prisma.achievement.findUnique({
    where: { id: parseInt(id) }
  })

  if (!achievement) return notFound()

  const updateActionWithId = updateAchievement.bind(null, achievement.id)

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Link href="/dashboard/prestasi" className="flex items-center gap-2 text-slate-500 hover:text-green-600 transition mb-4">
        <ArrowLeft size={20} /> Batal & Kembali
      </Link>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Edit Data Prestasi</h1>
        
        <form action={updateActionWithId} className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-slate-300">Nama Kejuaraan</label>
            <input name="title" type="text" required defaultValue={achievement.title} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-slate-300">Kategori</label>
              <select name="category" defaultValue={achievement.category} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white">
                <option value="Akademik">Akademik</option>
                <option value="Non-Akademik">Non-Akademik</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-slate-300">Tingkat</label>
              <select name="level" defaultValue={achievement.level} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white">
                <option value="Kabupaten">Kabupaten</option>
                <option value="Provinsi">Provinsi</option>
                <option value="Nasional">Nasional</option>
                <option value="Internasional">Internasional</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-slate-300">Nama Pemenang</label>
              <input name="recipient" type="text" required defaultValue={achievement.recipient} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-slate-300">Tahun</label>
              <input name="year" type="number" required defaultValue={achievement.year} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 dark:text-slate-300">Deskripsi</label>
            <textarea name="description" rows={3} defaultValue={achievement.description || ''} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white"></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition">
            <Save size={20} /> Simpan Perubahan
          </button>

        </form>
      </div>
    </div>
  )
}