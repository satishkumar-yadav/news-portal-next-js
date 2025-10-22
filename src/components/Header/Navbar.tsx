"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const links = ["business", "technology", "sports", "health", "entertainment"];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      
      <div className="flex items-center gap-4">
        <Link href="/" className="font-bold text-lg">NewsPortal</Link>
        <Link href="/favorites" className="text-sm text-blue-400">Favorites</Link>
      </div>
     
      <div className="flex gap-6 text-sm">
        {links.map((cat) => (
          <Link  key={cat} href={`/category/${cat}`} className={`capitalize ${ pathname.includes(cat) ? "text-blue-400 underline" : "" }`}>
            {cat}
          </Link>
        ))}
      </div> 

      {/* <div className="flex gap-4">
        <Link href="/category/business">Business</Link>
        <Link href="/category/technology">Technology</Link>
        <Link href="/category/sports">Sports</Link>
        <Link href="/category/health">Health</Link>
      </div> */}

      <ThemeToggle />
    </nav>
  );
}
