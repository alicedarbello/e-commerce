import Image from "next/image";
// import {useEffect, useState} from "react";

import {CardImage, PhoneCard} from "../../shared/PhoneCard";

// import {fetchAllAccessories} from "@/app/services/accessories";
// import {Accessories} from "@/app/types";

export default function SimilarProducts() {
  return (
    <div>
      <h1>Similar Products</h1>
      <PhoneCard>
        <CardImage>
          <Image
            alt="Iphone 13 - Transparent"
            className="mx-10 my-15"
            height={309}
            src="http://127.0.0.1:8000"
            width={306}
          />
        </CardImage>
      </PhoneCard>
    </div>
  );
}
