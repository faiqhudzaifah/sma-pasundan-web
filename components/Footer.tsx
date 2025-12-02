import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Identitas Sekolah */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-slate-100 leading-none">
                  SMA PASUNDAN
                </span>
                <span className="text-xs text-slate-500 font-medium tracking-wider">
                  MAJALAYA
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Terwujudnya Profil Murid Yang Berkarakter Nyantri, Nyakola, Dan
              Nyunda Menuju Gapura Panca Waluya.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white hover:border-green-600 transition text-slate-400"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white hover:border-green-600 transition text-slate-400"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Tautan Cepat */}
          <div>
            <h3 className="text-slate-100 font-bold mb-6">Tautan Cepat</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/profil/sejarah"
                  className="hover:text-green-500 transition block py-1"
                >
                  Sejarah Sekolah
                </Link>
              </li>
              <li>
                <Link
                  href="/profil/guru"
                  className="hover:text-green-500 transition block py-1"
                >
                  Tenaga Pendidik
                </Link>
              </li>
              <li>
                <Link
                  href="/akademik/kurikulum"
                  className="hover:text-green-500 transition block py-1"
                >
                  Kurikulum
                </Link>
              </li>
              <li>
                <Link
                  href="/kesiswaan/prestasi"
                  className="hover:text-green-500 transition block py-1"
                >
                  Prestasi Siswa
                </Link>
              </li>
              <li>
                <Link
                  href="/ppdb"
                  className="hover:text-green-500 transition block py-1"
                >
                  Info PPDB
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak Kami */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-slate-100 font-bold mb-6">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-slate-900 p-2 rounded text-green-600">
                  <MapPin size={16} />
                </div>
                <span className="leading-relaxed">
                  Jalan Leuwidulang No. 22, Desa Sukamaju,
                  <br />
                  Kecamatan Majalaya, Kabupaten Bandung,
                  <br />
                  Jawa Barat, Kode Pos 40382
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-slate-900 p-2 rounded text-green-600">
                  <Phone size={16} />
                </div>
                <span>(022) 5950013</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-slate-900 p-2 rounded text-green-600">
                  <Mail size={16} />
                </div>
                <span>sma_pasma@yahoo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} SMA Pasundan Majalaya. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
