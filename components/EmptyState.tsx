import { FolderOpen } from 'lucide-react'

export default function EmptyState({ message }: { message: string }) {
  return (
    // Container Luar: Mode Terang (Slate-50) / Mode Gelap (Slate-800 + Transparan)
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300">
      
      {/* Icon Wrapper: Mode Terang (Putih) / Mode Gelap (Slate-800) */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-full shadow-sm mb-4 transition-colors duration-300">
        <FolderOpen size={32} className="text-slate-400 dark:text-slate-500" />
      </div>
      
      {/* Teks Judul */}
      <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
        Belum Ada Data
      </h3>
      
      {/* Teks Deskripsi */}
      <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto text-sm mt-1">
        {message}
      </p>
    </div>
  )
}