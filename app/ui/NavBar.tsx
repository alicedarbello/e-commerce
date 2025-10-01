"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

import Search from "./Search";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-3 gap-10 pt-10">
      <ul className="flex place-content-between items-center">
        <li>
          <Link className={`hover:underline ${pathname === "/" ? "text-red-500" : null}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`hover:underline ${pathname === "/products" ? "text-red-500" : null}`}
            href="/products"
          >
            Shop All
          </Link>
        </li>
        <li>
          <Link
            className={`hover:underline ${pathname === "/blog" ? "text-red-500" : null}`}
            href="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>
      <ul className="flex items-center justify-center">
        <li>
          <Image alt="Logo" height={64} src="/mocom-icon.png" width={200} />
        </li>
      </ul>
      <ul className="flex items-center justify-center gap-15">
        <li>
          <Link
            className={`hover:underline ${pathname === "/about" ? "text-red-500" : null}`}
            href="/about"
          >
            About Us
          </Link>
        </li>
        <Search />
      </ul>
    </div>
  );
}
