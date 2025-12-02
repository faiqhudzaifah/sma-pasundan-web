"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Newspaper,
  Award,
  LogOut,
  School,
} from "lucide-react";
import { logoutAction } from "@/app/login/actions";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    { name: "Kelola Guru", href: "/dashboard/guru", icon: <Users size={20} /> },
    {
      name: "Kelola Berita",
      href: "/dashboard/berita",
      icon: <Newspaper size={20} />,
    },
    {
      name: "Kelola Prestasi",
      href: "/dashboard/prestasi",
      icon: <Award size={20} />,
    },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 hidden md:flex flex-col">
      <div className="h-20 flex items-center gap-3 px-6 border-b border-slate-200 dark:border-slate-800">
        <div className="relative w-8 h-8">
          <Image
            src="/images/logo.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
        <span className="font-bold text-lg text-slate-800 dark:text-white">
          Admin Panel
        </span>
      </div>

      <nav className="flex-1 py-6 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname.startsWith(item.href); // Ubah logic agar submenu tetap aktif
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-sm ${
                isActive
                  ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
        {/* 2. Tambahkan Toggle di sini */}
        <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <span className="text-xs font-medium text-slate-500">Tema</span>
          <ThemeToggle />
        </div>

        <button
          onClick={() => logoutAction()}
          className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition font-medium text-sm"
        >
          <LogOut size={20} />
          Keluar
        </button>
      </div>
    </aside>
  );
}
