import PageHeader from '@/components/PageHeader'
import { Calendar, Building2, UserCheck } from 'lucide-react'

export default function SejarahPage() {
  const principals = [
    { no: 1, name: "Drs. Dachlan Kartaraharja", period: "1982 s.d. 1984", status: "PNS" },
    { no: 2, name: "Abdul Hamid, B.A", period: "1984 s.d. 1985", status: "PNS" },
    { no: 3, name: "Drs. H. Odon Kardana", period: "1985 s.d. 1987", status: "PNS" },
    { no: 4, name: "H. E. Sucherman B.A.", period: "1987 s.d. 2000", status: "PNS" },
    { no: 5, name: "Drs. H. Usep Suparman Diya", period: "2000 s.d. 2006", status: "PNS" },
    { no: 6, name: "Drs. H. Moch. Idjudin, SP, M.M.Pd.", period: "2006 s.d. 2010", status: "Mantan KaDisDik" },
    { no: 7, name: "Drs. Jodi Kusmayadi", period: "2010 s.d. 2014", status: "PNS" },
    { no: 8, name: "Drs. Tri Harsono, M.M.", period: "2014 s.d. 2023", status: "PNS" },
    { no: 9, name: "Yanyan Sofyan Fadilah, S.Ag", period: "2023 s.d. Sekarang", status: "GTY" },
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      
      <PageHeader 
        title="Sejarah Sekolah" 
        description="Perjalanan panjang pengabdian SMA Pasundan Majalaya sejak tahun 1981."
        image="/images/header-sejarah.jpg"
      />

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* KOLOM KIRI */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4 text-green-700 dark:text-green-400">
                <Calendar className="w-6 h-6" />
                <h2 className="font-bold text-lg">Pendirian</h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                Didirikan tanggal <strong>20 Mei 1981</strong> berdasarkan SK Yayasan Pendidikan Pasundan Nomor <strong>012/SK-YPP/V/1981</strong>.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4 text-blue-700 dark:text-blue-400">
                <Building2 className="w-6 h-6" />
                <h2 className="font-bold text-lg">Pengalaman</h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                Lebih dari 40 tahun mengelola pendidikan tingkat menengah dan meluluskan banyak alumni sukses.
              </p>
            </div>
          </div>

          {/* KOLOM KANAN: Timeline */}
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-8 text-slate-800 dark:text-white">
                <UserCheck className="w-6 h-6" />
                <h2 className="font-bold text-xl">Masa Kepemimpinan</h2>
              </div>

              <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 space-y-8">
                {principals.map((kepsek, index) => (
                  <div key={index} className="relative pl-8">
                    {/* Dot */}
                    <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white dark:border-slate-800 ${index === principals.length - 1 ? 'bg-green-600 ring-4 ring-green-100 dark:ring-green-900' : 'bg-slate-300 dark:bg-slate-600'}`}></div>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start group">
                      <div>
                        <h3 className={`font-bold text-lg ${index === principals.length - 1 ? 'text-green-700 dark:text-green-400' : 'text-slate-800 dark:text-slate-200'}`}>
                          {kepsek.name}
                        </h3>
                        <span className="inline-block px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs rounded mt-1">
                          {kepsek.status}
                        </span>
                      </div>
                      <div className="mt-1 sm:mt-0 font-mono text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700/50 px-3 py-1 rounded-lg whitespace-nowrap">
                        {kepsek.period}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}