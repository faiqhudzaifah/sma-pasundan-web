import { Target, Heart, BookOpen, Users, Lightbulb, Globe } from 'lucide-react'
import PageHeader from '@/components/PageHeader' // Import Header

export default function VisiMisiPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      
      {/* Tambahkan PageHeader */}
      <PageHeader 
        title="Visi & Misi" 
        description="Landasan cita-cita dan strategi pendidikan SMA Pasundan Majalaya."
        image="/images/header-visi.jpg"
      />

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        
        {/* VISI CARD */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden mb-12 border border-slate-100 dark:border-slate-700 relative transition-colors duration-300">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-green-700"></div>
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-8">Visi Sekolah</h2>
            
            <div className="relative">
              <span className="text-6xl text-slate-200 dark:text-slate-700 absolute -top-8 -left-4 font-serif">“</span>
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 italic font-medium leading-relaxed relative z-10 px-8">
                Terwujudnya Profil Murid Yang Berkarakter Nyantri, Nyakola, Dan Nyunda Menuju Gapura Panca Waluya
              </p>
              <span className="text-6xl text-slate-200 dark:text-slate-700 absolute -bottom-12 -right-4 font-serif">”</span>
            </div>

            {/* Indikator Visi (Icon) */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-green-50 dark:bg-slate-700 p-6 rounded-2xl border border-green-100 dark:border-slate-600">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700 dark:text-green-300">
                  <Heart size={24} />
                </div>
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">Nyantri</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Nilai agama & akhlak mulia</p>
              </div>
              <div className="bg-blue-50 dark:bg-slate-700 p-6 rounded-2xl border border-blue-100 dark:border-slate-600">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-700 dark:text-blue-300">
                  <BookOpen size={24} />
                </div>
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Nyakola</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Prestasi akademik & mandiri</p>
              </div>
              <div className="bg-orange-50 dark:bg-slate-700 p-6 rounded-2xl border border-orange-100 dark:border-slate-600">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-700 dark:text-orange-300">
                  <Users size={24} />
                </div>
                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">Nyunda</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Silih asih, asah, asuh</p>
              </div>
            </div>
          </div>
        </div>

        {/* MISI CARD */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700 p-8 md:p-12 transition-colors duration-300">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl flex items-center justify-center shadow-lg transform -rotate-3">
              <Target size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">Misi Sekolah</h2>
          </div>

          <div className="space-y-4">
            {[
              { text: "Meningkatkan keimanan, ketakwaan, serta akhlak mulia.", icon: <Heart size={18} /> },
              { text: "Mengimplementasikan IMTAQ yang sinergis dengan IPTEK.", icon: <Lightbulb size={18} /> },
              { text: "Melaksanakan proses pendidikan sikap, pengetahuan, dan keterampilan.", icon: <Globe size={18} /> },
              { text: "Mewujudkan lulusan berprestasi akademik & non-akademik yang mandiri.", icon: <Target size={18} /> },
              { text: "Mengaktualisasikan budaya Sunda dan kepribadian Ki Sunda.", icon: <Users size={18} /> }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full flex items-center justify-center font-bold text-sm mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}