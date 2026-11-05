// components/KartuBuku.tsx
import { Buku } from "@/data/buku";
import Link from "next/link";

export default function KartuBuku({ buku }: { buku: Buku }) {
  const habis = buku.stok === 0;

  return (
    <Link href={`/buku/${buku.id}`} className="block border rounded-xl p-4 hover:shadow-lg transition bg-white">
      <h3 className="font-bold text-lg line-clamp-2">{buku.judul}</h3>
      <p className="text-sm text-gray-600 mt-1">{buku.penulis}</p>
      <p className="text-xs text-gray-500 mt-1">{buku.kategori}</p>
      <p className={`mt-3 text-sm font-semibold ${habis ? "text-red-600" : "text-green-600"}`}>
        {habis ? "Sedang dipinjam semua" : `Tersedia ${buku.stok}`}
      </p>
    </Link>
  );
}