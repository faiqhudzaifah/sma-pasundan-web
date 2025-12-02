import { prisma } from '@/lib/prisma'
import PageHeader from '@/components/PageHeader'
import EmptyState from '@/components/EmptyState'
import Link from 'next/link'
import { Calendar, Tag, ArrowRight, Image as ImageIcon } from 'lucide-react'

// Update data setiap 60 detik (ISR)
export const revalidate = 60

export default async function BeritaPage() {
  // Ambil data Berita dari Database, urutkan dari yang terbaru
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' }
  })

  // Helper untuk format tanggal
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    // WRAPPER UTAMA: Dark Mode Ready (Slate-50 <-> Slate-900)
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      
      {/* HEADER PAGE */}
      <PageHeader 
        title="Berita & Kegiatan" 
        description="Informasi terbaru seputar akademik, kesiswaan, dan agenda penting civitas akademika SMA Pasundan Majalaya."
        image="/images/header-berita.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        
        {posts.length === 0 ? (
          // Tampilan jika Database Kosong
          <EmptyState message="Belum ada berita yang dipublikasikan oleh admin." />
        ) : (
          // Grid Berita
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group border border-slate-100 dark:border-slate-700 flex flex-col h-full"
              >
                {/* Gambar Berita */}
                <div className="h-52 overflow-hidden relative bg-slate-200 dark:bg-slate-700">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                  ) : (
                    // Placeholder jika tidak ada gambar
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                      <ImageIcon size={48} className="mb-2 opacity-50" />
                      <span className="text-xs">No Image</span>
                    </div>
                  )}
                  
                  {/* Badge Kategori */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-600/90 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
                      <Tag size={12} />
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Konten Berita */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Tanggal */}
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                    <Calendar size={14} className="text-green-500" />
                    {formatDate(post.createdAt)}
                  </div>
                  
                  {/* Judul */}
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 leading-snug group-hover:text-green-600 transition line-clamp-2">
                    <Link href={`/berita/${post.slug}`}> {/* Nanti bisa diubah ke /berita/${post.slug} */}
                      {post.title}
                    </Link>
                  </h3>
                  
                  {/* Cuplikan Isi (Excerpt) */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.content}
                  </p>

                  {/* Tombol Baca */}
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                    <Link 
                      href={`/berita/${post.slug}`}
                      className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-bold text-sm hover:underline"
                    >
                      Baca Selengkapnya <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}