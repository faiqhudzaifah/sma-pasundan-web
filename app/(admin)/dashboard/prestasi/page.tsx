import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { deleteAchievement } from './actions'
import { Plus, Pencil, Trophy, Medal } from 'lucide-react'
import DeleteButton from '@/components/DeleteButton'

export const dynamic = 'force-dynamic'

export default async function ManagePrestasiPage() {
  const achievements = await prisma.achievement.findMany({
    orderBy: { year: 'desc' }
  })

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Kelola Prestasi</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Daftar kejuaraan dan penghargaan sekolah.</p>
        </div>
        <Link 
          href="/dashboard/prestasi/create" 
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 font-bold transition shadow-lg shadow-green-600/20"
        >
          <Plus size={20} /> Tambah Prestasi
        </Link>
      </div>

      {/* Tabel */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-6 py-4">Nama Kejuaraan</th>
                <th className="px-6 py-4">Tingkat & Kategori</th>
                <th className="px-6 py-4">Pemenang</th>
                <th className="px-6 py-4">Tahun</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {achievements.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500 dark:text-slate-400">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Trophy size={48} className="opacity-20" />
                      <p>Belum ada data prestasi.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                achievements.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-6 py-4 font-bold text-slate-800 dark:text-white">
                      {item.title}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="inline-flex w-fit items-center gap-1 px-2 py-0.5 rounded text-xs font-bold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">
                          <Medal size={12} /> {item.level}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{item.category}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                      {item.recipient}
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300 font-mono">
                      {item.year}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <Link 
                          href={`/dashboard/prestasi/${item.id}/edit`}
                          className="p-2 text-yellow-600 hover:bg-yellow-50 dark:text-yellow-400 dark:hover:bg-yellow-900/20 rounded-lg transition"
                        >
                          <Pencil size={18} />
                        </Link>
                        
                        <DeleteButton 
                          onDelete={deleteAchievement.bind(null, item.id)}
                          label="Prestasi"
                        />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}