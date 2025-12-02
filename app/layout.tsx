import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import { Toaster } from "sonner"; 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMA Pasundan Majalaya",
  description: "Nyantri, Nyakola, Nyunda Menuju Gapura Panca Waluya",
  
  // --- TAMBAHKAN BAGIAN INI UNTUK FAVICON ---
  icons: {
    icon: "/images/favicon.ico",      // Ikon standar di tab
    shortcut: "/images/logo.png",  // Ikon shortcut
    apple: "/images/logo.png",     // Ikon ketika website di-save di iPhone/iPad
  },
  // ------------------------------------------
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
        <Providers>
          {children}
          <Toaster position="top-center" richColors />
        </Providers>
      </body>
    </html>
  );
}