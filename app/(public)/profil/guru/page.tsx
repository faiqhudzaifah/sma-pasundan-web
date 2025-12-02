import { prisma } from '@/lib/prisma'
import EmptyState from '@/components/EmptyState'
import { User } from 'lucide-react'

export const revalidate = 60 

export default async function GuruPage() {
  const teachers = await prisma.teacher.findMany({
    orderBy: { name: 'asc' }
  })

  return (
    // WRAPPER UTAMA: Mengatur Background Halaman Penuh
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* HEADER: Teks menyesuaikan Dark Mode */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Tenaga Pendidik</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Guru-guru profesional SMA Pasundan Majalaya</p>
        </div>

        {teachers.length === 0 ? (
          // Component EmptyState akan otomatis menyesuaikan diri sekarang
          <EmptyState message="Data guru belum diinput oleh admin. Silakan hubungi operator sekolah." />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teachers.map((guru) => (
              <div key={guru.id} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition text-center group">
                <div className="w-24 h-24 mx-auto bg-slate-200 dark:bg-slate-700 rounded-full mb-4 overflow-hidden relative">
                  {guru.image ? (
                    <img src={guru.image} alt={guru.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-400 dark:text-slate-500">
                      <User size={32} />
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-green-600 transition">{guru.name}</h3>
                <p className="text-green-600 dark:text-green-400 text-sm font-medium">{guru.position || 'Guru Mapel'}</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">{guru.subject}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}