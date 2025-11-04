import Image from "next/image";
import {useState} from "react";

import Dialog from "../../../shared/Dialog";

export default function ShoppingCart() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="flex cursor-pointer items-center gap-1" onClick={() => setOpen(!open)}>
        <Image
          alt="Cart Icon"
          className="h-[24px] w-[24px]"
          height={24}
          src="/icons/Bag.png"
          width={24}
        />
        <p className="text-2xl"> 2 </p>
      </div>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <h1>Shopping Cart</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ea animi, aut sunt
          molestiae sed. Possimus saepe maxime officiis ducimus minus porro reprehenderit! Saepe
          sapiente deserunt nemo explicabo quo eum.
        </p>
        <button className="mt-3 w-full cursor-pointer bg-red-500 p-3 font-bold text-white">
          CHECKOUT NOW -&gt;
        </button>
      </Dialog>
    </div>
  );
}
