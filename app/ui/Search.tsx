"use client";

import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {usePathname, useSearchParams, useRouter} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const {replace} = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative">
      <input
        className="rounded-lg bg-gray-200 px-4 py-2 focus:outline-1"
        defaultValue={searchParams.get("query")?.toString()}
        name="search"
        placeholder="Search Product"
        type="text"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <MagnifyingGlassIcon className="absolute top-2 right-2 ml-2 inline h-6 w-6 text-black" />
    </div>
  );
}
