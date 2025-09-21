import Image from "next/image";
import Link from "next/link";

import Search from "./Search";

export default function NavBar() {
  return (
    <div className="my-6 grid grid-cols-3 gap-10 p-4">
      <ul className="flex justify-center gap-10">
        <li>
          <Link className="hover:underline" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href="/products">
            All Products
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href="/blog">
            Blog
          </Link>
        </li>
      </ul>
      <ul className="flex justify-center">
        <li>
          <Image alt="Logo" height={64} src="/mocom-icon.png" width={200} />
        </li>
      </ul>
      <ul className="flex justify-center gap-10">
        <li>
          <Link className="hover:underline" href="/about">
            About Us
          </Link>
        </li>
        <Search />
      </ul>
    </div>
  );
}
