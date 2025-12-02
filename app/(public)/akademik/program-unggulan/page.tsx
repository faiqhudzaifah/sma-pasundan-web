import PageHeader from '@/components/PageHeader'
import { Code2, Globe, Heart, CheckCircle2 } from 'lucide-react'

export default function ProgramUnggulanPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <PageHeader 
        title="Program Unggulan" 
        description="Inovasi kurikulum yang memadukan teknologi masa depan dan kearifan lokal."
        image="/images/header-unggulan.jpg"
      />

      <div className="container mx-auto px-4 py-16 space-y-24">
        
        {/* PROGRAM 1: KODING & AI */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-bold text-sm mb-6">
              <Code2 size={18} />
              <span>Teknologi Masa Depan</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Informatika, Koding & Artificial Intelligence
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
              SMA Pasundan Majalaya menetapkan Koding dan Kecerdasan Buatan (AI) sebagai 
              <strong> Muatan Lokal Wajib</strong>. Siswa dibekali kemampuan teknis untuk bersaing di era digital.
            </p>
            <ul className="space-y-3">
              {['Pemrograman Dasar (Web & Apps)', 'Pengenalan Artificial Intelligence', 'Literasi Digital'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-400">
                  <CheckCircle2 className="text-green-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 h-[400px] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition duration-500">
            <img src="/images/program-koding.jpg" alt="Kelas Koding" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* PROGRAM 2: BUDAYA SUNDA */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] rounded-3xl overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition duration-500">
            <img src="/images/program-sunda.jpg" alt="Kegiatan Nyunda" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-bold text-sm mb-6">
              <Globe size={18} />
              <span>Kearifan Lokal</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Nyantri, Nyakola, Nyunda
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
              Program pembiasaan karakter yang mengakar pada budaya Sunda ("Silih Asih, Silih Asah, Silih Asuh") 
              dan nilai-nilai religius.
            </p>
            <ul className="space-y-3">
              {['Kamis Nyunda (Wajib Berbahasa Sunda)', 'Pembiasaan Tadarus Al-Quran', 'Seni Karawitan & Upacara Adat'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-400">
                  <CheckCircle2 className="text-green-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PROGRAM 3: PANCA WALUYA */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-batik.png')]"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full font-bold text-sm mb-6">
              <Heart size={18} />
              <span>Karakter Utama</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Menuju Gapura Panca Waluya</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
              Membangun manusia yang Cageur (Sehat), Bageur (Baik), Bener (Benar), Pinter (Cerdas), dan Singer (Terampil).
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Cageur', 'Bageur', 'Bener', 'Pinter', 'Singer'].map((val) => (
                <span key={val} className="px-6 py-3 bg-green-600 rounded-xl font-bold shadow-lg">
                  {val}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}