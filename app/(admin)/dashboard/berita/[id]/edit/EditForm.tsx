'use client'

import { updatePost } from '../../actions'
import { Save, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import FileUpload from '@/components/FileUpload'
import { Post } from '@prisma/client'

interface EditFormProps {
  post: Post
}

export default function EditForm({ post }: EditFormProps) {
  const [imageUrl, setImageUrl] = useState(post.image || "")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    if (imageUrl) formData.set('image', imageUrl)

    try {
      await updatePost(post.id, formData)
      toast.success('Berita berhasil diperbarui!')
    } catch (error) {
      toast.error('Gagal memperbarui berita.')
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Judul Berita</label>
        <input name="title" type="text" required defaultValue={post.title} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-green-500 outline-none text-slate-800 dark:text-white" />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Kategori</label>
        <select name="category" defaultValue={post.category} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-green-500 outline-none text-slate-800 dark:text-white">
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
        <textarea name="content" required rows={10} defaultValue={post.content} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-green-500 outline-none text-slate-800 dark:text-white"></textarea>
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50">
        {isSubmitting ? <><Loader2 className="animate-spin" size={20} /> Menyimpan...</> : <><Save size={20} /> Simpan Perubahan</>}
      </button>
    </form>
  )
}