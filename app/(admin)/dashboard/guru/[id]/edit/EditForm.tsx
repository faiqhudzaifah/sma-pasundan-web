'use client'

import { updateTeacher } from '../../actions' // Import Server Action
import { Save, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import FileUpload from '@/components/FileUpload'
import { Teacher } from '@prisma/client' // Type safe dari Prisma

interface EditFormProps {
  teacher: Teacher
}

export default function EditForm({ teacher }: EditFormProps) {
  const [imageUrl, setImageUrl] = useState(teacher.image || "")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    // Masukkan URL gambar baru (atau lama) ke FormData
    if (imageUrl) {
        formData.set('image', imageUrl)
    }

    try {
      // Panggil Server Action dengan ID guru
      await updateTeacher(teacher.id, formData)
      toast.success('Data Guru berhasil diperbarui!')
    } catch (error) {
      toast.error('Gagal memperbarui data.')
    } finally {
      // Kita tidak set false karena biasanya halaman akan redirect
      // setIsSubmitting(false) 
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      
      {/* Nama Lengkap */}
      <div>
        <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Nama Lengkap</label>
        <input 
          name="name" 
          type="text" 
          required 
          defaultValue={teacher.name}
          className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-green-500 text-slate-800 dark:text-white" 
        />
      </div>

      {/* Jabatan */}
      <div>
        <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Jabatan</label>
        <input 
          name="position" 
          type="text" 
          defaultValue={teacher.position || ''}
          className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-green-500 text-slate-800 dark:text-white" 
        />
      </div>

      {/* Mapel */}
      <div>
        <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Mata Pelajaran</label>
        <input 
          name="subject" 
          type="text" 
          required 
          defaultValue={teacher.subject}
          className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-green-500 text-slate-800 dark:text-white" 
        />
      </div>

      {/* Upload Foto */}
      <div>
        <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Foto Profil</label>
        <FileUpload 
          endpoint="imageUploader" 
          value={imageUrl} 
          onChange={(url) => setImageUrl(url || "")} 
        />
      </div>

      {/* Tombol Simpan */}
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 mt-4 transition shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
            <>
                <Loader2 className="animate-spin" size={20} /> Menyimpan...
            </>
        ) : (
            <>
                <Save size={20} /> Simpan Perubahan
            </>
        )}
      </button>

    </form>
  )
}