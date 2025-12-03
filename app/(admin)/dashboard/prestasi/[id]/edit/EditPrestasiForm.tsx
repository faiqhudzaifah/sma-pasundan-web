'use client'

import { updateAchievement } from '../../actions'
import { Save, Loader2 } from 'lucide-react' // 👈 [1] IMPORT Loader2 DI SINI
import { useState } from 'react' // 👈 [1] IMPORT useState DI SINI
import { toast } from 'sonner' // 👈 [1] IMPORT toast DI SINI
import { Achievement } from '@prisma/client'

interface EditFormProps {
  achievement: Achievement
}

export default function EditPrestasiForm({ achievement }: EditFormProps) {
  // 👈 [2] PENGGUNAAN 1: useState untuk melacak status loading
  const [isSubmitting, setIsSubmitting] = useState(false) 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    
    try {
      await updateAchievement(achievement.id, formData)
      
      // 👈 [3] PENGGUNAAN 2: toast untuk notifikasi sukses
      toast.success('Prestasi berhasil diperbarui!') 
      
    } catch (error: any) {
      // 👈 [4] PENGGUNAAN 3: toast untuk notifikasi error
      toast.error('Gagal memperbarui data. Cek koneksi atau log server.')
    } finally {
      // setIsSubmitting(false) 
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* ... (Input Form Lainnya) ... */}

      <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50">
        
        {/* 👈 [5] PENGGUNAAN 4: Loader2 (Ikon Loading) */}
        {isSubmitting ? <><Loader2 className="animate-spin" size={20} /> Menyimpan...</> : <><Save size={20} /> Simpan Perubahan</>}
        
      </button>

    </form>
  )
}