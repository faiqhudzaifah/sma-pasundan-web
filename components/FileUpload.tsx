'use client'

import { UploadDropzone } from "@/lib/uploadthing"
import { X, ImageIcon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface FileUploadProps {
  endpoint: "imageUploader"
  value: string
  onChange: (url?: string) => void
}

export default function FileUpload({ endpoint, value, onChange }: FileUploadProps) {
  const [fileType, setFileType] = useState<string>("");

  // Jika sudah ada gambar (value tidak kosong), tampilkan Preview
  if (value) {
    return (
      <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 flex items-center justify-center">
        <Image
          fill
          src={value}
          alt="Upload"
          className="object-cover"
        />
        {/* Tombol Hapus Gambar */}
        <button
          onClick={() => onChange("")}
          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition"
          type="button"
        >
          <X size={16} />
        </button>
      </div>
    )
  }

  // Jika belum ada gambar, tampilkan Dropzone
  return (
    <div className="w-full">
      <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          // Upload Selesai: Ambil URL gambar pertama
          onChange(res?.[0].url)
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`)
        }}
        appearance={{
          container: "border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900 h-48 flex justify-center items-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50 transition",
          label: "text-slate-500 text-sm hover:text-green-600",
          button: "bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium mt-2 hover:bg-green-700 transition"
        }}
        content={{
            label: "Drag & Drop atau Klik untuk Upload",
            allowedContent: "Gambar (Max 4MB)"
        }}
      />
    </div>
  )
}