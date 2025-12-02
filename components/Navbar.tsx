"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Struktur Menu Navigasi
  const navigation = [
    {
      title: "Profil",
      children: [
        { name: "Visi & Misi", href: "/profil/visi-misi" },
        { name: "Sejarah", href: "/profil/sejarah" },
        { name: "Tenaga Pendidik", href: "/profil/guru" },
        { name: "Fasilitas", href: "/profil/fasilitas" },
      ],
    },
    {
      title: "Akademik",
      children: [
        { name: "Kurikulum", href: "/akademik/kurikulum" },
        { name: "Program Unggulan", href: "/akademik/program-unggulan" },
      ],
    },
    {
      title: "Kesiswaan",
      children: [
        { name: "Ekstrakurikuler", href: "/kesiswaan/ekstrakurikuler" },
        { name: "Prestasi", href: "/kesiswaan/prestasi" },
        { name: "Data Alumni", href: "/kesiswaan/alumni" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-sm transition-colors duration-300">
      {/* Top Bar (Info Singkat) */}
      <div className="bg-green-700 dark:bg-green-900 text-white text-xs py-2 transition-colors duration-300">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <Phone size={12} /> (022) 5950013
            </span>
            <span className="hidden md:flex items-center gap-1">
              <MapPin size={12} /> Majalaya, Kab. Bandung
            </span>
          </div>
          <div className="font-medium">Terakreditasi A (Unggul)</div>
        </div>
      </div>

      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* LOGO SEKOLAH */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* <div className="w-10 h-10 bg-green-600 dark:bg-green-700 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-green-700 dark:group-hover:bg-green-600 transition shadow-md">
              P
            </div> */}
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/images/logo.png" // Pastikan nama file sesuai
                alt="Logo SMA Pasundan"
                fill
                className="object-contain" // Agar logo tidak gepeng
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-800 dark:text-white leading-none group-hover:text-green-700 dark:group-hover:text-green-400 transition">
                SMA PASUNDAN
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wider">
                MAJALAYA
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-6 items-center">
            <Link
              href="/"
              className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 font-medium text-sm transition"
            >
              Beranda
            </Link>

            {/* Mapping Dropdown */}
            {navigation.map((item) => (
              <div
                key={item.title}
                className="relative group py-6"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-slate-600 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400 font-medium text-sm transition">
                  {item.title}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === item.title ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Content */}
                <div
                  className={`absolute top-full left-0 w-56 bg-white dark:bg-slate-800 shadow-xl rounded-xl border border-slate-100 dark:border-slate-700 transition-all duration-200 transform origin-top ${
                    activeDropdown === item.title
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95"
                  }`}
                >
                  <div className="p-2 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 hover:bg-green-50 dark:hover:bg-slate-700 hover:text-green-700 dark:hover:text-green-400 rounded-lg transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/berita"
              className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 font-medium text-sm transition"
            >
              Berita
            </Link>
            <Link
              href="/kontak"
              className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 font-medium text-sm transition"
            >
              Kontak
            </Link>

            {/* Divider Vertikal */}
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>

            {/* ACTION BUTTONS (Toggle & PPDB) */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/ppdb"
                className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-bold text-sm transition shadow-lg shadow-green-100 dark:shadow-none hover:shadow-green-200"
              >
                Info PPDB
              </Link>
            </div>
          </div>

          {/* MOBILE MENU BUTTON (Hamburger) */}
          <button
            className="lg:hidden text-slate-600 dark:text-slate-300 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN (Responsive) */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 absolute w-full left-0 shadow-lg h-[calc(100vh-5rem)] overflow-y-auto pb-20 animate-in slide-in-from-top-5 duration-200">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
            {/* Navigation Links */}
            {navigation.map((item) => (
              <div key={item.title}>
                <div className="font-bold text-slate-800 dark:text-white mb-3 text-sm uppercase tracking-wider">
                  {item.title}
                </div>
                <div className="pl-4 flex flex-col gap-3 border-l-2 border-slate-100 dark:border-slate-800">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="text-slate-600 dark:text-slate-400 text-sm py-1 hover:text-green-600 dark:hover:text-green-400 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Menu Tambahan */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
              <Link
                href="/berita"
                className="block font-bold text-slate-800 dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                Berita Sekolah
              </Link>
              <Link
                href="/kontak"
                className="block font-bold text-slate-800 dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                Kontak Kami
              </Link>
            </div>

            {/* Action Buttons Mobile */}
            <div className="flex items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                <span>Tema:</span>
                <ThemeToggle />
              </div>
              <Link
                href="/ppdb"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-xl font-bold transition"
                onClick={() => setIsOpen(false)}
              >
                Info PPDB
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
