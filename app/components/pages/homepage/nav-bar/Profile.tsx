import Image from "next/image";
import {useState} from "react";

import Dialog from "../../../shared/Dialog";

export default function Profile() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="flex cursor-pointer items-center gap-1" onClick={() => setOpen(!open)}>
        <Image
          alt="Profile Icon"
          className="h-[29px] w-[29px]"
          height={24}
          src="/icons/Profile.png"
          width={24}
        />
      </div>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <h1>Sign in</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ea animi, aut sunt
          molestiae sed. Possimus saepe maxime officiis ducimus minus porro reprehenderit! Saepe
          sapiente deserunt nemo explicabo quo eum.
        </p>
        <button className="mt-3 w-full cursor-pointer bg-red-500 p-3 font-bold text-white">
          LOGIN -&gt;
        </button>
        <button className="border- mt-3 w-full cursor-pointer border-2 border-red-300 bg-white p-3 font-bold text-red-500">
          CREATE ACCOUNT
        </button>
      </Dialog>
    </div>
  );
}
