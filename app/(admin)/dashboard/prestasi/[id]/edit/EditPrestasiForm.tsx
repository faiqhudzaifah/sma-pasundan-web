'use client'

import { updateAchievement } from '../../actions'
import { Save, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Achievement } from '@prisma/client' // Import type dari Prisma

interface EditFormProps {
  // Menerima data prestasi dari Server Component
  achievement: Achievement
}

export default function EditPrestasiForm({ achievement }: EditFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    
    try {
      // Panggil Server Action dengan ID
      await updateAchievement(achievement.id, formData)
      toast.success('Prestasi berhasil diperbarui!')
    } catch (error: any) {
      // Server Action akan me-redirect jika sukses, jadi catch ini hanya untuk error fatal DB.
      toast.error('Gagal memperbarui data. Cek koneksi atau log server.')
    } finally {
      // Karena updateAchievement me-redirect, loading state akan reset.
      // setIsSubmitting(false) 
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      <div>
        <label className="block text-sm font-medium mb-2 dark:text-slate-300">Nama Kejuaraan</label>
        <input name="title" type="text" required defaultValue={achievement.title} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-slate-300">Kategori</label>
          <select name="category" defaultValue={achievement.category} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white">
            <option value="Akademik">Akademik</option>
            <option value="Non-Akademik">Non-Akademik</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-slate-300">Tingkat</label>
          <select name="level" defaultValue={achievement.level} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white">
            <option value="Kabupaten">Kabupaten</option>
            <option value="Provinsi">Provinsi</option>
            <option value="Nasional">Nasional</option>
            <option value="Internasional">Internasional</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-slate-300">Nama Pemenang</label>
          <input name="recipient" type="text" required defaultValue={achievement.recipient} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-slate-300">Tahun</label>
          <input name="year" type="number" required defaultValue={achievement.year} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 dark:text-slate-300">Deskripsi</label>
        <textarea name="description" rows={3} defaultValue={achievement.description || ''} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white"></textarea>
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50">
        {isSubmitting ? <><Loader2 className="animate-spin" size={20} /> Menyimpan...</> : <><Save size={20} /> Simpan Perubahan</>}
      </button>

    </form>
  )
}