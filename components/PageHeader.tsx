// components/PageHeader.tsx
interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string; // Opsional: Path gambar background header
}

export default function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <div className="relative bg-slate-900 text-white py-16 md:py-20 overflow-hidden">
      {/* Background Image jika ada */}
      {image && (
        <div className="absolute inset-0 opacity-20">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h1>
        {description && (
          <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            {description}
          </p>
        )}
        <div className="w-24 h-1.5 bg-green-600 mx-auto mt-8 rounded-full"></div>
      </div>
    </div>
  )
}