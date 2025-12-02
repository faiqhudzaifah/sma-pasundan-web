import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react'
import Image from 'next/image' // Kita coba pakai Image Next.js atau img biasa

// Update cache tiap 60 detik
export const revalidate = 60

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BeritaDetail({ params }: PageProps) {
  // 1. Tangkap Slug dari URL
  const { slug } = await params

  // 2. Cari Berita di Database berdasarkan Slug
  const post = await prisma.post.findUnique({
    where: { slug: slug }
  })

  // 3. Kalau berita tidak ditemukan -> Tampilkan 404
  if (!post) {
    return notFound()
  }

  // Format Tanggal
  const formattedDate = new Date(post.createdAt).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 pb-20">
      
      {/* HEADER GAMBAR (Hero Image) */}
      <div className="relative h-[400px] md:h-[500px] w-full bg-slate-900">
        {post.image ? (
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover opacity-60"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500 bg-slate-800">
            No Image Available
          </div>
        )}
        
        {/* Overlay Judul di Tengah Gambar */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block px-4 py-1.5 bg-green-600 text-white text-sm font-bold rounded-full mb-4 shadow-lg">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto drop-shadow-lg">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 mt-6 text-slate-200 text-sm font-medium">
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-green-400" /> {formattedDate}
              </span>
              <span className="flex items-center gap-2">
                <User size={16} className="text-green-400" /> Admin Sekolah
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* KONTEN BERITA */}
      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100 dark:border-slate-700">
          
          {/* Tombol Kembali */}
          <Link href="/berita" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-green-600 mb-8 transition font-medium text-sm">
            <ArrowLeft size={18} /> Kembali ke Berita
          </Link>

          {/* Isi Artikel */}
          <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            {/* whitespace-pre-wrap agar enter/paragraf terbaca */}
            <div className="whitespace-pre-wrap text-slate-700 dark:text-slate-300 leading-relaxed">
              {post.content}
            </div>
          </article>

          {/* Footer Artikel (Share / Tags) */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 flex items-center gap-2">
            <Tag size={18} className="text-slate-400" />
            <span className="text-slate-500 dark:text-slate-400 text-sm">
              Kategori: <strong>{post.category}</strong>
            </span>
          </div>

        </div>
      </div>

    </div>
  )
}