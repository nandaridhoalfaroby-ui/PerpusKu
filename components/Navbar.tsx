// components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { href: "/", label: "Beranda" },
  { href: "/buku", label: "Buku" },
  { href: "/pinjaman", label: "Pinjaman" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 p-4 border-b bg-white sticky top-0">
      <span className="font-bold">PerpusKu</span>
      <div className="flex gap-4">
        {menu.map((m) => {
          const aktif = pathname === m.href || (m.href !== "/" && pathname.startsWith(m.href));
          return (
            <Link
              key={m.href}
              href={m.href}
              className={aktif ? "font-bold underline text-blue-600" : "text-gray-600"}
            >
              {m.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}