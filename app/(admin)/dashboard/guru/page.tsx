import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { deleteTeacher } from './actions'
import { Plus, User, Pencil, GraduationCap } from 'lucide-react'
import DeleteButton from '@/components/DeleteButton'

export const dynamic = 'force-dynamic'

export default async function ManageGuruPage() {
  const teachers = await prisma.teacher.findMany({ orderBy: { name: 'asc' } })

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Kelola Guru</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Data tenaga pendidik dan staff.</p>
        </div>
        <Link 
          href="/dashboard/guru/create" 
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 font-bold transition shadow-lg shadow-green-600/20"
        >
          <Plus size={20} /> Tambah Guru
        </Link>
      </div>

      {/* Grid Card Guru */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((guru) => (
          <div key={guru.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center gap-4 transition hover:shadow-md">
            
            {/* Foto / Avatar */}
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 border border-slate-200 dark:border-slate-700">
              {guru.image ? (
                <img src={guru.image} alt={guru.name} className="w-full h-full object-cover" />
              ) : (
                <User size={24} className="text-slate-400" />
              )}
            </div>

            {/* Info Guru */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-slate-800 dark:text-white truncate">{guru.name}</h3>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium truncate">{guru.position || 'Guru'}</p>
              <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-1">
                <GraduationCap size={12} />
                <span className="truncate">{guru.subject}</span>
              </div>
            </div>

            {/* Aksi */}
            <div className="flex flex-col gap-2">
              <Link 
                href={`/dashboard/guru/${guru.id}/edit`}
                className="p-2 text-yellow-600 hover:bg-yellow-50 dark:text-yellow-400 dark:hover:bg-yellow-900/20 rounded-lg transition"
                title="Edit"
              >
                <Pencil size={18} />
              </Link>
              
              <DeleteButton 
                onDelete={deleteTeacher.bind(null, guru.id)}
                label="Guru"
              />
            </div>

          </div>
        ))}

        {/* Empty State */}
        {teachers.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-500 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
            <p>Belum ada data guru.</p>
          </div>
        )}
      </div>
    </div>
  )
}