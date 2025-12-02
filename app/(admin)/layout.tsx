import { Sidebar } from "@/components/Sidebar";

export const metadata = {
  title: "Admin Panel | SMA Pasundan Majalaya",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // HAPUS html, body, dan Providers. Cukup div wrapper saja.
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-900">
      
      {/* Sidebar Admin */}
      <Sidebar />
      
      {/* Konten Utama (Dashboard) */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 dark:bg-slate-950 p-6">
          {children}
        </main>
      </div>
      
    </div>
  );
}