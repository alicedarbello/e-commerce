"use client";
import Image from "next/image";
import {useEffect, useState} from "react";

import {interBold} from "../ui/fonts";
import {CardImage, PhoneCard} from "../ui/homepage/cards/PhoneCard";
import {fetchAllAccessories} from "../services/accessories";
import {Accessories} from "../types";

export default function Page() {
  const [allProducts, setAllProducts] = useState<Accessories[]>([]);

  useEffect(() => {
    fetchAllAccessories().then((res) => {
      setAllProducts(res.data);
    });
  }, []);

  return (
    <div className="my-20">
      <h1 className={`${interBold.className} mb-20 text-4xl`}>Shop All Products</h1>
      <div className="flex flex-wrap justify-between gap-8">
        {allProducts.map((mobile) => (
          <PhoneCard key={mobile.id}>
            <CardImage>
              <Image
                alt="Iphone 13 - Transparent"
                className="m-10"
                height="220"
                src={`https://mocom-api.vercel.app${mobile.image_uri}`}
                width="220"
              />
            </CardImage>
            <p>
              {mobile.phone_model} - {mobile.name}
            </p>
            <p>LKR {mobile.price}</p>
          </PhoneCard>
        ))}
      </div>
    </div>
  );
}
