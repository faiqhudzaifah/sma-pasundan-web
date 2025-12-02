import PageHeader from '@/components/PageHeader'
import { BookOpen, Cpu, Globe, Rocket, BrainCircuit, Sparkles } from 'lucide-react'

export default function KurikulumPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <PageHeader 
        title="Kurikulum & Pembelajaran" 
        description="Transformasi pendidikan menuju Kurikulum Merdeka dengan pendekatan Deep Learning dan penguatan karakter lokal."
        image="/images/header-kurikulum.jpg"
      />

      <div className="container mx-auto px-4 py-16 space-y-16">
        
        {/* SECTION 1: KURIKULUM SAAT INI */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-bold text-sm">
              <BookOpen size={18} />
              <span>Standar Pendidikan</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
              Kurikulum 2013 & Transisi Merdeka
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              Saat ini, SMA Pasundan Majalaya menerapkan <strong>Kurikulum 2013 (K-13)</strong> untuk kelas 10, 11, dan 12. Namun, kami telah mengadopsi pendekatan <strong>Deep Learning (Pembelajaran Mendalam)</strong> sesuai arahan Kementerian Pendidikan Dasar dan Menengah.
            </p>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border-l-4 border-green-600 shadow-sm">
              <p className="text-slate-700 dark:text-slate-300 italic">
                "Kami bersiap untuk implementasi penuh <strong>Kurikulum Merdeka</strong> pada tahun ajaran 2026/2027 sebagai langkah strategis memajukan kualitas lulusan."
              </p>
            </div>
          </div>
          <div className="relative">
             {/* Ilustrasi Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500">
              <BrainCircuit size={48} className="mb-6 text-green-400" />
              <h3 className="text-2xl font-bold mb-4">Deep Learning Focus</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-1 rounded-full mt-1"><Sparkles size={12} /></div>
                  <span><strong>Mindfull Learning:</strong> Belajar penuh kesadaran dan perhatian.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-1 rounded-full mt-1"><Sparkles size={12} /></div>
                  <span><strong>Meaningful:</strong> Materi pembelajaran yang relevan dengan kehidupan nyata.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-1 rounded-full mt-1"><Sparkles size={12} /></div>
                  <span><strong>Joyful Learning:</strong> Suasana belajar yang gembira dan antusias.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 2: MUATAN LOKAL (MULOK) */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Muatan Lokal & Keunggulan</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Memadukan kemajuan teknologi global dengan kearifan budaya lokal Sunda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Informatika */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-slate-100 dark:border-slate-700 group">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Cpu size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Informatika & AI</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Mata pelajaran tambahan wajib yang mencakup <strong>Koding (Coding)</strong> dan <strong>Kecerdasan Artifisial (AI)</strong> untuk mempersiapkan siswa di era digital.
              </p>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Mulok Wajib 2025</span>
            </div>

            {/* Card 2: Bahasa Sunda */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-slate-100 dark:border-slate-700 group">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Bahasa & Budaya Sunda</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Melestarikan nilai <em>"Silih Asih, Silih Asah, Silih Asuh"</em> serta pembiasaan berbahasa Sunda setiap hari tertentu.
              </p>
              <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wide">Identitas Pasundan</span>
            </div>

            {/* Card 3: Karakter */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-slate-100 dark:border-slate-700 group">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Rocket size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Gapura Panca Waluya</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Pembentukan karakter siswa yang Cageur (Sehat), Bageur (Baik), Bener (Benar), Pinter (Cerdas), dan Singer (Terampil).
              </p>
              <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wide">Visi Jawa Barat</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}