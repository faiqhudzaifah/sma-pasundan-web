'use client'

import { createPost } from '../actions'
import { Save, ArrowLeft, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'
import FileUpload from '@/components/FileUpload'

export default function CreateBeritaPage() {
  const [imageUrl, setImageUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    
    // Masukkan URL gambar dari UploadThing
    if (imageUrl) {
        formData.set('image', imageUrl)
    }

    try {
      await createPost(formData)
      toast.success('Berita berhasil diterbitkan!')
    } catch (error) {
      toast.error('Gagal menerbitkan berita.')
      setIsSubmitting(false) // Stop loading kalau error
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Link href="/dashboard/berita" className="flex items-center gap-2 text-slate-500 hover:text-green-600 transition mb-4">
        <ArrowLeft size={20} /> Kembali
      </Link>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Tulis Berita Baru</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Judul Berita</label>
            <input name="title" type="text" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-green-500 outline-none text-slate-800 dark:text-white" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Kategori</label>
            <select name="category" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-green-500 outline-none text-slate-800 dark:text-white">
              <option value="Berita">Berita Sekolah</option>
              <option value="Prestasi">Prestasi</option>
              <option value="Kegiatan">Kegiatan</option>
              <option value="Pengumuman">Pengumuman</option>
            </select>
          </div>

          {/* UPLOAD GAMBAR */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Gambar Utama</label>
            <FileUpload 
              endpoint="imageUploader"
              value={imageUrl}
              onChange={(url) => setImageUrl(url || "")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Isi Berita</label>
            <textarea name="content" required rows={10} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-green-500 outline-none text-slate-800 dark:text-white"></textarea>
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50">
            {isSubmitting ? <><Loader2 className="animate-spin" size={20} /> Memproses...</> : <><Save size={20} /> Terbitkan Berita</>}
          </button>
        </form>
      </div>
    </div>
  )
}