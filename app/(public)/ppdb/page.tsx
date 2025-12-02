import PageHeader from '@/components/PageHeader'
import { ArrowRight, FileText, Calendar, Phone } from 'lucide-react'

export default function PPDBPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <PageHeader 
        title="Penerimaan Peserta Didik Baru" 
        description="Bergabunglah menjadi bagian dari keluarga besar SMA Pasundan Majalaya."
        image="/images/header-ppdb.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Card Utama */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700">
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                Pendaftaran Tahun Ajaran 2025/2026
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8">
                Pendaftaran kini dapat dilakukan secara online. Silakan isi formulir pendaftaran melalui tautan di bawah ini.
              </p>

              <a 
                href="https://forms.google.com/your-form-link" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition transform hover:-translate-y-1 shadow-xl shadow-green-600/20"
              >
                Isi Formulir Pendaftaran <ArrowRight />
              </a>
            </div>

            {/* Info Tambahan */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 border-t border-slate-100 dark:border-slate-700">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="flex items-center gap-2 font-bold text-slate-800 dark:text-white mb-4">
                    <FileText className="text-green-600" /> Persyaratan Umum
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                    <li>• Mengisi Formulir Pendaftaran</li>
                    <li>• Fotocopy Ijazah SMP/Sederajat (Legalisir)</li>
                    <li>• Fotocopy Kartu Keluarga & Akta Kelahiran</li>
                    <li>• Pas Foto Terbaru 3x4 (Background Merah/Biru)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-bold text-slate-800 dark:text-white mb-4">
                    <Phone className="text-green-600" /> Kontak Panitia
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                    Jika mengalami kendala, hubungi panitia PPDB kami:
                  </p>
                  <p className="font-bold text-lg text-slate-800 dark:text-white">
                    (022) 5950013
                  </p>
                  <p className="text-slate-500 text-sm">Senin - Sabtu (08.00 - 14.00 WIB)</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}