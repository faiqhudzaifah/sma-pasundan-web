import PageHeader from '@/components/PageHeader'
import { Wifi, Book, Monitor, LayoutGrid, Coffee, Home } from 'lucide-react'

export default function FasilitasPage() {
  // Data Fasilitas sesuai Tabel 1.13
  const facilities = [
    {
      name: "Ruang Kelas Representatif",
      desc: "28 Ruang kelas teori yang nyaman untuk kegiatan belajar mengajar.",
      icon: <LayoutGrid size={32} />,
      image: "/images/fasilitas-kelas.jpg" 
    },
    {
      name: "Masjid Jami At-Taawun",
      desc: "Sarana ibadah yang luas dan nyaman untuk kegiatan keagamaan siswa.",
      icon: <Home size={32} />,
      image: "/images/fasilitas-masjid.jpg"
    },
    {
      name: "Laboratorium Komputer & Multimedia",
      desc: "Dilengkapi perangkat komputer modern untuk praktikum Informatika & Koding.",
      icon: <Monitor size={32} />,
      image: "/images/fasilitas-labkom.jpg"
    },
    {
      name: "Perpustakaan",
      desc: "Pusat literasi dengan koleksi buku pelajaran dan bacaan umum.",
      icon: <Book size={32} />,
      image: "/images/fasilitas-perpustakaan.jpg"
    },
    {
      name: "Lapangan Olahraga",
      desc: "Area luas (896 m2) untuk upacara, olahraga, dan kegiatan ekstrakurikuler.",
      icon: <Wifi size={32} />, // Ikon representatif aktivitas luar
      image: "/images/fasilitas-lapangan.jpg"
    },
    {
      name: "Kantin & Koperasi",
      desc: "Kantin sehat dan koperasi siswa untuk memenuhi kebutuhan harian.",
      icon: <Coffee size={32} />,
      image: "/images/fasilitas-kantin.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <PageHeader 
        title="Sarana & Prasarana" 
        description="Fasilitas penunjang pembelajaran yang lengkap dan memadai di SMA Pasundan Majalaya."
        image="/images/header-fasilitas.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group border border-slate-100 dark:border-slate-700">
              {/* Gambar Fasilitas */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-slate-900 p-3 rounded-full text-green-600 shadow-md">
                  {item.icon}
                </div>
              </div>
              
              {/* Deskripsi */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-green-600 transition">
                  {item.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}