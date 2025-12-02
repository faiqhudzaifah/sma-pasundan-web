import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { ArrowRight, Trophy, BookOpen, Monitor, MapPin } from 'lucide-react'

export const revalidate = 60

export default async function Home() {
  const latestPosts = await prisma.post.findMany({
    where: { category: 'Berita' },
    orderBy: { createdAt: 'desc' },
    take: 3
  })

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-green-900 to-slate-900 text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-yellow-500 text-slate-900 font-bold text-sm mb-6 shadow-lg">
            Terakreditasi A (Unggul)
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            SMA PASUNDAN MAJALAYA
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-4xl mx-auto italic font-light">
            "Terwujudnya Profil Murid Yang Berkarakter Nyantri, Nyakola, Dan Nyunda Menuju Gapura Panca Waluya"
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/ppdb" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold transition flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Daftar PPDB Sekarang <ArrowRight size={20} />
            </Link>
            <Link href="/profil/sejarah" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-sm transition">
              Profil Sekolah
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATISTIK */}
      <section className="relative -mt-16 z-20 container mx-auto px-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border border-slate-100 dark:border-slate-700">
          <div>
            <div className="text-4xl font-extrabold text-green-600 dark:text-green-400 mb-1">1030+</div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">Siswa Aktif</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">63</div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">Guru & Staff</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-orange-600 dark:text-orange-400 mb-1">13</div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">Ekstrakurikuler</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-purple-600 dark:text-purple-400 mb-1">44</div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">Tahun Pengalaman</div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAM UNGGULAN */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Kenapa SMA Pasundan?</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Kami memadukan nilai luhur budaya Sunda dengan kompetensi teknologi masa depan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition group hover:shadow-md">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
              <Monitor size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">Informatika & Koding</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Mata pelajaran tambahan wajib Koding dan Kecerdasan Artifisial (AI) untuk membekali siswa di era digital.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-green-500 transition group hover:shadow-md">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">Nyantri & Nyunda</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Menerapkan budaya "Silih Asih, Silih Asah, Silih Asuh" serta pembiasaan tadarus Al-Qur'an.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-orange-500 transition group hover:shadow-md">
            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition">
              <Trophy size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">Prestasi Juara</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Melahirkan juara di bidang Akademik (OSN Kimia) maupun Non-Akademik tingkat Provinsi & Nasional.
            </p>
          </div>
        </div>
      </section>

      {/* 4. BERITA TERBARU */}
      <section className="py-20 bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Berita & Kegiatan</h2>
              <p className="text-slate-600 dark:text-slate-400">Update terbaru dari civitas akademika.</p>
            </div>
            <Link href="/berita" className="text-green-600 dark:text-green-400 font-bold hover:underline flex items-center gap-1">
              Lihat Semua <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestPosts.length > 0 ? (
              latestPosts.map((post) => (
                <div key={post.id} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-transparent dark:border-slate-800">
                  <div className="h-48 bg-slate-200 dark:bg-slate-800 w-full relative">
                    {post.image ? (
                       <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                       <div className="flex items-center justify-center h-full text-slate-400 dark:text-slate-600">
                         <span className="text-sm">No Image</span>
                       </div>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-md">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold mt-3 mb-3 leading-snug text-slate-800 dark:text-slate-100 hover:text-green-700 dark:hover:text-green-400 transition">
                      <Link href={`/berita`}>{post.title}</Link>
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3">
                      {post.content}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-16 bg-white dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
                <div className="mx-auto w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-400 dark:text-slate-500">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-200">Belum ada berita</h3>
              </div>
            )}
          </div>
        </div>
      </section>
      
    </main>
  )
}