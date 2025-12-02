import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { deletePost } from './actions'
import { Plus, Pencil, Calendar, FileText, ImageIcon } from 'lucide-react'
import DeleteButton from '@/components/DeleteButton' 

// Pastikan data selalu fresh (tidak di-cache)
export const dynamic = 'force-dynamic'

export default async function ManageBeritaPage() {
  // 1. Fetch Data Berita dari Database
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' }
  })

  // Helper Format Tanggal Indonesia
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  return (
    <div className="space-y-6">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Kelola Berita</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Daftar semua berita dan artikel sekolah.</p>
        </div>
        <Link 
          href="/dashboard/berita/create" 
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 font-bold transition shadow-lg shadow-green-600/20"
        >
          <Plus size={20} /> Tambah Berita
        </Link>
      </div>

      {/* --- TABEL --- */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            
            {/* Header Tabel */}
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-6 py-4 w-[40%]">Judul & Konten</th>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4">Tanggal</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>

            {/* Isi Tabel */}
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {posts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-slate-500 dark:text-slate-400">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <FileText size={48} className="opacity-20" />
                      <p>Belum ada berita yang dipublikasikan.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                posts.map((post) => (
                  <tr key={post.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition duration-150">
                    
                    {/* Kolom 1: Info Utama & Gambar */}
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex-shrink-0 overflow-hidden flex items-center justify-center border border-slate-200 dark:border-slate-700">
                          {post.image ? (
                            <img src={post.image} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon size={16} className="text-slate-400" />
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-slate-800 dark:text-slate-200 line-clamp-1 mb-0.5">
                            {post.title}
                          </div>
                          <div className="text-slate-500 dark:text-slate-500 text-xs line-clamp-1">
                            {post.content}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Kolom 2: Kategori */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                        {post.category}
                      </span>
                    </td>

                    {/* Kolom 3: Tanggal */}
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {formatDate(post.createdAt)}
                      </div>
                    </td>

                    {/* Kolom 4: Aksi */}
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        
                        {/* Tombol Edit */}
                        <Link 
                          href={`/dashboard/berita/${post.id}/edit`} 
                          className="p-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/40 transition border border-yellow-200 dark:border-yellow-800/50"
                          title="Edit Data"
                        >
                          <Pencil size={16} />
                        </Link>

                        {/* Tombol Hapus Cerdas */}
                        <DeleteButton 
                          onDelete={deletePost.bind(null, post.id)} 
                          label="Berita"
                        />

                      </div>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}