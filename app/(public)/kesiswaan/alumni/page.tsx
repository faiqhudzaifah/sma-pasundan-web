import PageHeader from '@/components/PageHeader'
import { GraduationCap, Briefcase, Award, TrendingUp, CheckCircle2 } from 'lucide-react'

export default function AlumniPage() {
  // Data Statistik dari Dokumen BAB 1 (Tracer Study) 
  const stats = [
    { label: "Bekerja", value: "49%", icon: <Briefcase size={24} />, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30" },
    { label: "Kuliah (PTN/PTS)", value: "12%", icon: <GraduationCap size={24} />, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30" },
    { label: "TNI / POLRI", value: "4%", icon: <Award size={24} />, color: "text-orange-600", bg: "bg-orange-100 dark:bg-orange-900/30" },
    { label: "Wirausaha/Lainnya", value: "35%", icon: <TrendingUp size={24} />, color: "text-purple-600", bg: "bg-purple-100 dark:bg-purple-900/30" },
  ]

  // Data Lolos PTN dari Tabel 1.11 [cite: 228]
  const alumniPTN = [
    { nama: "Hisyam Maulana", kampus: "Universitas Padjajaran", jurusan: "Peternakan" },
    { nama: "Nazwa Zahrani", kampus: "Universitas Padjajaran", jurusan: "Agroteknologi" },
    { nama: "Restu Ahmad F", kampus: "UPI", jurusan: "Pendidikan Seni Musik" },
    { nama: "Meyra Auralia S", kampus: "Poltekkes Tasikmalaya", jurusan: "Keperawatan" },
    { nama: "Fiyana Az Zahra", kampus: "Poltekkes Bandung", jurusan: "Ilmu Gizi" },
    { nama: "Fathan Fawaz A", kampus: "UPI", jurusan: "Logistik Kelautan" },
    { nama: "Oktalis", kampus: "UPI", jurusan: "Teknologi Pendidikan" },
    { nama: "Hasbi Ash Siddiq", kampus: "UNSIKA", jurusan: "PJKR" },
    { nama: "Davina Siti Pelisa", kampus: "UPI", jurusan: "Pendidikan Geografi" },
    { nama: "Hilma Hanifah", kampus: "Universitas Siliwangi", jurusan: "Agribisnis" },
  ]

  // Data Lolos TNI/POLRI dari Tabel 1.12 [cite: 231]
  const alumniAbdiNegara = [
    { nama: "Septian Nuryana", instansi: "POLRI" },
    { nama: "Moch. Ricky Riandi", instansi: "POLRI" },
    { nama: "Sugih Hermawan", instansi: "POLRI" },
    { nama: "Lutfi Syahrial", instansi: "POLRI" },
    { nama: "Maheza Rifa P", instansi: "POLRI" },
    { nama: "Aditya Firmansyah", instansi: "TNI AD" },
    { nama: "Iden Setiawan", instansi: "TNI AU" },
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <PageHeader 
        title="Data Alumni & Sebaran Lulusan" 
        description="Jejak langkah lulusan SMA Pasundan Majalaya dalam menempuh pendidikan tinggi dan karir profesional."
        image="/images/header-alumni.jpg"
      />

      <div className="container mx-auto px-4 py-16 space-y-16">
        
        {/* SECTION 1: STATISTIK TRACER STUDY */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">
              Statistik Daya Serap Lulusan
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Berdasarkan hasil tracer study tahun ajaran 2023/2024, lulusan SMA Pasundan Majalaya tersebar di berbagai sektor[cite: 234].
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-center hover:shadow-lg transition">
                <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-extrabold text-slate-800 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: DAFTAR ALUMNI PTN */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* LOLOS PTN */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
            <div className="bg-green-600 p-6 text-white flex items-center gap-3">
              <GraduationCap size={28} />
              <h3 className="text-xl font-bold">Diterima di Perguruan Tinggi Negeri</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {alumniPTN.map((mhs, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-green-50 dark:hover:bg-green-900/20 transition group">
                    <div className="mt-1 text-green-600 dark:text-green-400">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400">
                        {mhs.nama}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {mhs.jurusan}
                      </p>
                      <span className="inline-block mt-2 text-xs font-bold px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-slate-500">
                        {mhs.kampus}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                 <p className="text-xs text-slate-400 italic">Data sampel dari Tracer Study 2023/2024 [cite: 228]</p>
              </div>
            </div>
          </div>

          {/* LOLOS TNI / POLRI */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden h-fit">
            <div className="bg-slate-800 p-6 text-white flex items-center gap-3">
              <Award size={28} />
              <h3 className="text-xl font-bold">Diterima di TNI & POLRI</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {alumniAbdiNegara.map((abdi, idx) => (
                  <li key={idx} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500">
                        <span className="font-bold text-xs">{idx + 1}</span>
                      </div>
                      <span className="font-bold text-slate-800 dark:text-white">{abdi.nama}</span>
                    </div>
                    <span className="font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-xs">
                      {abdi.instansi}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                 <p className="text-xs text-slate-400 italic">Data sampel dari Tracer Study 2023/2024 [cite: 231]</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}