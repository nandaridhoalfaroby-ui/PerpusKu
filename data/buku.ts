export type Buku = {
  id: number;
  judul: string;
  penulis: string;
  kategori: string;
  stok: number;
};

export const buku: Buku[] = [
  { id: 1, judul: "Laskar Pelangi", penulis: "Andrea Hirata", kategori: "Novel", stok: 3 },
  { id: 2, judul: "Bumi Manusia", penulis: "Pramoedya Ananta Toer", kategori: "Novel", stok: 0 },
  { id: 3, judul: "Dasar-Dasar JavaScript", penulis: "Tim RPL", kategori: "Teknologi", stok: 5 },
  { id: 4, judul: "Belajar React", penulis: "Tim RPL", kategori: "Teknologi", stok: 2 },
  { id: 5, judul: "Sejarah Indonesia Modern", penulis: "M. C. Ricklefs", kategori: "Sejarah", stok: 1 },
  { id: 6, judul: "Atlas Dunia", penulis: "Tim Redaksi", kategori: "Referensi", stok: 4 },
];