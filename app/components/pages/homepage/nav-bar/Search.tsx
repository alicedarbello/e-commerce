"use client";

import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/navigation";
import {useState} from "react";

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleChange = (term: string) => {
    setSearch(term);
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/accessories?q=${search}`);
    }
  };

  return (
    <div className="relative">
      <input
        className="rounded-lg bg-gray-200 px-4 py-2 focus:outline-1"
        name="search"
        placeholder="Search Product"
        type="text"
        value={search}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        onKeyDown={handleSubmit}
      />
      <MagnifyingGlassIcon className="absolute top-2 right-2 ml-2 inline h-6 w-6 text-black" />
    </div>
  );
}
