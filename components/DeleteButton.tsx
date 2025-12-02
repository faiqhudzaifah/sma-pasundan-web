'use client'

import { Trash2, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

interface DeleteButtonProps {
  onDelete: () => Promise<void> // Fungsi Server Action yang akan dipanggil
  label?: string // Nama item yang dihapus (misal: "Berita", "Guru")
}

export default function DeleteButton({ onDelete, label = "Data" }: DeleteButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    // 1. Konfirmasi Browser
    if (!confirm(`Apakah Anda yakin ingin menghapus ${label} ini? Tindakan ini tidak bisa dibatalkan.`)) {
      return
    }

    setIsDeleting(true)

    try {
      // 2. Panggil Server Action
      await onDelete()
      toast.success(`${label} berhasil dihapus!`)
    } catch (error) {
      toast.error(`Gagal menghapus ${label}.`)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="p-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40 transition border border-red-200 dark:border-red-800/50 disabled:opacity-50 disabled:cursor-not-allowed"
      title="Hapus Data"
    >
      {isDeleting ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
    </button>
  )
}