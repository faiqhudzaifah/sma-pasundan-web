'use client'

import { createAchievement } from '../actions'
import { Save, ArrowLeft, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'

export default function CreatePrestasiPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)

    try {
      await createAchievement(formData)
      toast.success('Data Prestasi berhasil disimpan!')
    } catch (error) {
      toast.error('Gagal menyimpan data.')
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Link href="/dashboard/prestasi" className="flex items-center gap-2 text-slate-500 hover:text-green-600 transition mb-4">
        <ArrowLeft size={20} /> Kembali
      </Link>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Catat Prestasi Baru</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Input Nama Kejuaraan */}
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-slate-300">Nama Kejuaraan / Lomba</label>
            <input name="title" type="text" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-slate-300">Kategori</label>
              <select name="category" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white">
                <option value="Akademik">Akademik</option>
                <option value="Non-Akademik">Non-Akademik</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-slate-300">Tingkat</label>
              <select name="level" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white">
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
              <input name="recipient" type="text" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-slate-300">Tahun</label>
              <input name="year" type="number" required defaultValue={new Date().getFullYear()} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 dark:text-slate-300">Deskripsi (Opsional)</label>
            <textarea name="description" rows={3} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-green-500 dark:text-white"></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50"
          >
            {isSubmitting ? (
              <> <Loader2 className="animate-spin" size={20} /> Memproses... </>
            ) : (
              <> <Save size={20} /> Simpan Prestasi </>
            )}
          </button>

        </form>
      </div>
    </div>
  )
}