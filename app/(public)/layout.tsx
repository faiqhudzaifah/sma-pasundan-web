// app/(public)/layout.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar hanya muncul di halaman Public */}
      <Navbar />
      
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer hanya muncul di halaman Public */}
      <Footer />
    </div>
  )
}