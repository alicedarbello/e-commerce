"use client";
import Image from "next/image";
import {useState} from "react";

import Dialog from "../../../shared/Dialog";

export default function Favorites() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        className="flex cursor-pointer items-center gap-1 transition"
        onClick={() => setOpen(!open)}
      >
        <Image
          alt="Cart Icon"
          className="h-[24px] w-[24px]"
          height={24}
          src="/icons/Heart.png"
          width={24}
        />
        <p className="text-2xl"> 0 </p>
      </div>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <h1>Favorites</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ea animi, aut sunt
          molestiae sed. Possimus saepe maxime officiis ducimus minus porro reprehenderit! Saepe
          sapiente deserunt nemo explicabo quo eum.
        </p>
      </Dialog>
    </div>
  );
}
