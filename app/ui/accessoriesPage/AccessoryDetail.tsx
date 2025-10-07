"use client";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import Image from "next/image";

import {interBold, interRegular} from "../fonts";
import {CardImage} from "../homepage/cards/PhoneCard";

import {Accessories} from "@/app/types";
import {fetchAccessoryById} from "@/app/services/accessories";

export default function AccessoryDetail() {
  const {productId} = useParams<{productId: string}>();

  const [accessory, setAccessory] = useState<Accessories>();

  useEffect(() => {
    fetchAccessoryById(productId).then((res) => {
      setAccessory(res);
    });
  }, [productId]);

  return (
    <div className="mx-10 my-20">
      <h1 className={`${interBold.className} mb-15 text-4xl`}>Shop Item</h1>
      <div className="mx-15 mr-30 grid grid-cols-2">
        <div className="w-fit">
          <CardImage>
            <Image
              alt={accessory?.name || "Accessory Image"}
              className="m-10"
              height={400}
              src={`https://mocom-api.vercel.app${accessory?.image_uri}`}
              width={400}
            />
          </CardImage>
        </div>
        <div>
          <h2 className={`${interRegular.className} mb-6 text-2xl font-semibold`}>
            {accessory?.phone_model} - {accessory?.name}
          </h2>
          <p className="mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, esse. Esse fugit
            veritatis, enim harum ullam odit consequatur placeat exercitationem fugiat doloremque
            dolor accusamus suscipit debitis nihil blanditiis? Iste, fugiat.Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Iure, esse.
          </p>
          <p className="mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, esse. Esse fugit
            veritatis, enim harum ullam odit consequatur placeat exercitationem fugiat doloremque
            dolor accusamus suscipit debitis nihil blanditiis? Iste, fugiat.Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Iure, esse.
          </p>
          <p>Contact us : 072 706 6455 | 071 789 9466</p>
        </div>
      </div>
    </div>
  );
}
