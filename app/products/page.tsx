import Image from "next/image";

import {interBold} from "../ui/fonts";
import {mobiles} from "../lib/placeholder-data";
import {CardImage, PhoneCard} from "../ui/homepage/cards/PhoneCard";

export default function Page() {
  return (
    <div className="my-20">
      <h1 className={`${interBold.className} mb-20 text-4xl`}>Shop All Products</h1>
      <div className="flex flex-wrap justify-between gap-8">
        {mobiles.map((mobile) => (
          <PhoneCard key={mobile.id}>
            <CardImage>
              <Image
                alt="Iphone 13 - Transparent"
                className="m-10"
                height="220"
                src={mobile.image}
                width="220"
              />
            </CardImage>
            <p>{mobile.name}</p>
            <p>LKR {mobile.price}</p>
          </PhoneCard>
        ))}
      </div>
    </div>
  );
}
