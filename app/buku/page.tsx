// app/buku/page.tsx
import { buku } from "@/data/buku";
import KartuBuku from "@/components/KartuBuku";

export default function KatalogPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Katalog Buku</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {buku.map((b) => (
          <KartuBuku key={b.id} buku={b} />
        ))}
      </div>
    </div>
  );
}