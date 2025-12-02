import { prisma } from '@/lib/prisma'
import EmptyState from '@/components/EmptyState'
import PageHeader from '@/components/PageHeader'
import { Trophy, Medal, Calendar, User, Tag } from 'lucide-react'

export const revalidate = 60

export default async function PrestasiPage() {
  // Ambil data dari Database
  const achievements = await prisma.achievement.findMany({
    orderBy: { year: 'desc' }
  })

  return (
    // WRAPPER UTAMA: Style konsisten dengan Halaman Guru (Dark Mode Ready)
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      
      {/* HEADER PAGE */}
      <PageHeader 
        title="Prestasi Sekolah" 
        description="Jejak langkah juara siswa-siswi SMA Pasundan Majalaya dalam berbagai kompetisi akademik dan non-akademik."
        image="/images/header-prestasi.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        
        {achievements.length === 0 ? (
          // Tampilan jika Database Kosong
          <EmptyState message="Belum ada data prestasi yang diinput oleh admin." />
        ) : (
          // Grid Card Prestasi
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item) => (
              <div 
                key={item.id} 
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition border border-slate-100 dark:border-slate-700 relative overflow-hidden group flex flex-col"
              >
                {/* Dekorasi Background Icon (Transparan) */}
                <div className="absolute -right-6 -top-6 text-slate-50 dark:text-slate-700 transform rotate-12 group-hover:scale-110 transition duration-500 opacity-50">
                  <Trophy size={120} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Badge Level */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-xs font-bold uppercase tracking-wide">
                      <Medal size={14} />
                      {item.level}
                    </span>
                  </div>
                  
                  {/* Judul Prestasi */}
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 leading-snug group-hover:text-green-600 transition">
                    {item.title}
                  </h3>
                  
                  {/* Detail Info */}
                  <div className="space-y-2 mb-6 flex-grow">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                      <User size={16} className="text-green-500" />
                      <span className="font-medium">{item.recipient}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                      <Tag size={16} className="text-blue-500" />
                      <span>{item.category}</span>
                    </div>
                  </div>

                  {/* Footer Card */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center mt-auto">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500">
                      <Calendar size={14} />
                      Tahun {item.year}
                    </div>
                    {/* Jika ada deskripsi, bisa ditambahkan tooltip atau link detail nanti */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}