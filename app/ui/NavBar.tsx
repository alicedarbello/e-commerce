import Search from "./Search";

export default function NavBar() {
  return (
    <div className="mb-4 grid grid-cols-3 gap-10 p-4">
      <ul className="flex justify-center gap-10">
        <li>
          <a className="hover:underline" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="hover:underline" href="/products">
            All Products
          </a>
        </li>
        <li>
          <a className="hover:underline" href="/blog">
            Blog
          </a>
        </li>
      </ul>
      <ul className="flex justify-center">
        <li className="font-bold text-red-600">MOCOM - mobile shop</li>
      </ul>
      <ul className="flex justify-center gap-10">
        <li>
          <a className="hover:underline" href="/blog">
            About Us
          </a>
        </li>
        <Search />
      </ul>
    </div>
  );
}
