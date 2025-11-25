import {HomeIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function NotFound({accessoryNotFound}: {accessoryNotFound?: string}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <Image alt="Not Found" height={300} src="/not-found.png" width={300} />
      <h2 className="text-3xl font-bold">Oh oh, {accessoryNotFound || "Page"} not found</h2>
      <p className="my-5 text-xs text-gray-700">
        Something went wrong. It’s look like the link is broken or the page has been removed.
      </p>
      <div className="flex gap-10 text-xs font-bold">
        <div>
          <div className="rounded-md border-2 border-red-500 bg-red-500 px-5 py-4 text-white">
            <Link href="/">&lt;- GO BACK</Link>
          </div>
        </div>
        <div>
          <div className="rounded-md border-2 border-red-500 px-5 py-4 text-red-500">
            <Link href="/">
              <div className="flex items-center gap-2">
                <HomeIcon className="size-4 stroke-2" /> GO TO HOME
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
