import PageHeader from '@/components/PageHeader'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <PageHeader 
        title="Hubungi Kami" 
        description="Kami siap melayani informasi yang Anda butuhkan seputar SMA Pasundan Majalaya."
        image="/images/header-kontak.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Info Kontak */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="font-bold text-xl text-slate-800 dark:text-white mb-6">Informasi Sekolah</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-sm">Alamat</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-1">
                      Jalan Leuwidulang No. 22, Desa Sukamaju, Kec. Majalaya, Kab. Bandung, 40382
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-sm">Telepon</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                      (022) 5950013
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-sm">Email</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                      sma_pasma@yahoo.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Peta Lokasi */}
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.957662586618!2d107.7535!3d-7.0543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDMnMTUuNSJTIDEwN8KwNDUnMTIuNiJF!5e0!3m2!1sen!2sid!4v1625000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}