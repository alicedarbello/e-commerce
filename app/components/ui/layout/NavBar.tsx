"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

import Search from "../../pages/homepage/nav-bar/Search";
import Favorites from "../../pages/homepage/nav-bar/Favorites";
import ShoppingCart from "../../pages/homepage/nav-bar/ShoppingCart";
import Profile from "../../pages/homepage/nav-bar/Profile";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-3 pt-10">
      <ul className="flex place-content-between items-center">
        <li>
          <Link className={`hover:underline ${pathname === "/" ? "text-red-500" : null}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`hover:underline ${pathname === "/accessories" ? "text-red-500" : null}`}
            href="/accessories"
          >
            Shop All
          </Link>
        </li>
        <li>
          <Link
            className={`hover:underline ${pathname === "/about" ? "text-red-500" : null}`}
            href="/about"
          >
            About Us
          </Link>
        </li>
      </ul>
      <ul className="flex items-center justify-center">
        <li>
          <Image alt="Logo" height={64} src="/mocom-icon.png" width={200} />
        </li>
      </ul>
      <ul className="flex place-content-between items-center">
        <li>
          <Search />
        </li>
        <li>
          <Favorites />
        </li>
        <li>
          <ShoppingCart />
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    </div>
  );
}
