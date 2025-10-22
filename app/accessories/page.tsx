"use client";
import Image from "next/image";
import {use, useEffect, useState} from "react";
import Link from "next/link";

import {interBold} from "../ui/fonts";
import {CardImage, PhoneCard} from "../ui/homepage/cards/PhoneCard";
import {fetchAllAccessories} from "../services/accessories";
import {Accessories} from "../types";

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{[key: string]: string | undefined}>;
}) {
  const q = use(searchParams).q;
  const [allProducts, setAllProducts] = useState<Accessories[]>([]);

  useEffect(() => {
    fetchAllAccessories({q}).then((res) => {
      setAllProducts(res.data);
    });
  }, [q]);

  return (
    <div className="my-20">
      <h1 className={`${interBold.className} mb-20 text-4xl`}>Shop All Products</h1>
      <div className="flex flex-wrap justify-between gap-8">
        {allProducts.map((mobile) => (
          <Link key={mobile.id} href={`/accessories/${mobile.id}`}>
            <PhoneCard key={mobile.id}>
              <CardImage>
                <Image
                  alt={mobile.name}
                  className="m-10"
                  height={220}
                  src={`http://127.0.0.1:8000${mobile.image_uri}`}
                  width={220}
                />
              </CardImage>
              <p>
                {mobile.phone_model} - {mobile.name}
              </p>
              <p>LKR {mobile.price}</p>
            </PhoneCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
