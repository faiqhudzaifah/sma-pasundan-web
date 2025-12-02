'use client'

import { createTeacher } from '../actions'
import { Save, ArrowLeft, Loader2 } from 'lucide-react'
import Link from 'next/link'
import FileUpload from '@/components/FileUpload'
import { useState } from 'react'
import { toast } from 'sonner' // Import Toast Library

export default function CreateGuruPage() {
  const [imageUrl, setImageUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false) // State untuk loading tombol

  // Handle saat form disubmit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Mencegah reload halaman standar
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    
    // Masukkan URL gambar dari state FileUpload ke FormData
    if (imageUrl) {
        formData.set('image', imageUrl)
    }

    // Mulai proses simpan dengan Toast Promise
    // Toast ini akan otomatis berubah icon loading -> ceklis/silang
    toast.promise(
      // Panggil Server Action
      createTeacher(formData)
        .then(() => {
           // Jika sukses (Server Action biasanya me-redirect, jadi ini mungkin tidak sempat muncul lama)
           return "Data guru berhasil disimpan!"
        }),
      {
        loading: 'Menyimpan data...',
        success: 'Berhasil disimpan!',
        error: (err) => `Gagal menyimpan: ${err.message}`,
      }
    )
    
    // Note: Karena createTeacher melakukan redirect(), 
    // halaman akan pindah dan loading akan berhenti otomatis di halaman baru.
  }

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <Link href="/dashboard/guru" className="flex items-center gap-2 text-slate-500 hover:text-green-600 transition mb-4">
        <ArrowLeft size={20} /> Kembali
      </Link>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Tambah Guru</h1>
        
        {/* Gunakan onSubmit, bukan action */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Input Nama */}
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Nama Lengkap</label>
            <input 
              name="name" 
              type="text" 
              required 
              className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-green-500 text-slate-800 dark:text-white" 
              placeholder="Drs. Budi Santoso" 
            />
          </div>

          {/* Input Jabatan */}
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Jabatan</label>
            <input 
              name="position" 
              type="text" 
              className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-green-500 text-slate-800 dark:text-white" 
              placeholder="Kepala Sekolah / Wali Kelas" 
            />
          </div>

          {/* Input Mapel */}
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Mata Pelajaran</label>
            <input 
              name="subject" 
              type="text" 
              required 
              className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-green-500 text-slate-800 dark:text-white" 
              placeholder="Matematika" 
            />
          </div>

          {/* Komponen Upload Gambar */}
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Foto Profil</label>
            <FileUpload 
              endpoint="imageUploader"
              value={imageUrl}
              onChange={(url) => setImageUrl(url || "")}
            />
          </div>

          {/* Tombol Simpan dengan Loading State */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 mt-4 transition shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
                <>
                    <Loader2 className="animate-spin" size={20} /> Menyimpan...
                </>
            ) : (
                <>
                    <Save size={20} /> Simpan
                </>
            )}
          </button>

        </form>
      </div>
    </div>
  )
}