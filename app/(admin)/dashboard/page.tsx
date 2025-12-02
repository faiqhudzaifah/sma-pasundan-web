import { prisma } from '@/lib/prisma'
import { Users, Newspaper, Award, TrendingUp } from 'lucide-react'

export default async function DashboardPage() {
  // Hitung data real dari database untuk statistik dashboard
  const totalGuru = await prisma.teacher.count()
  const totalBerita = await prisma.post.count()
  const totalPrestasi = await prisma.achievement.count()

  const stats = [
    { label: 'Total Guru', value: totalGuru, icon: <Users />, color: 'bg-blue-500' },
    { label: 'Berita Terbit', value: totalBerita, icon: <Newspaper />, color: 'bg-green-500' },
    { label: 'Prestasi', value: totalPrestasi, icon: <Award />, color: 'bg-orange-500' },
    { label: 'Pengunjung', value: '1.2k', icon: <TrendingUp />, color: 'bg-purple-500' }, // Dummy
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
        Selamat Datang, Admin! 👋
      </h1>

      {/* Grid Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-4">
            <div className={`w-12 h-12 ${stat.color} text-white rounded-xl flex items-center justify-center shadow-lg shadow-gray-200 dark:shadow-none`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Area Kosong untuk Widget Lain */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 h-64 flex flex-col items-center justify-center text-slate-400">
        <p>Area Grafik / Aktivitas Terbaru (Segera Hadir)</p>
      </div>
    </div>
  )
}