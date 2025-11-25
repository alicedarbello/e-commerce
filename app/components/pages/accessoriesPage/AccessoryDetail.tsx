import Image from "next/image";

import {interRegular} from "../../styles/fonts";
import {CardImage} from "../../shared/PhoneCard";

import {fetchAccessoryById} from "@/app/services/accessories";

export default async function AccessoryDetail({productId}: {productId: string}) {
  const accessory = await fetchAccessoryById(productId);

  return (
    <div className="mx-15 mr-30 grid grid-cols-2">
      <div className="w-fit">
        <CardImage>
          <Image
            alt={accessory.name || "Accessory Image"}
            className="m-10"
            height={400}
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${accessory.image_uri}`}
            width={400}
          />
        </CardImage>
      </div>
      <div>
        <h2 className={`${interRegular.className} mb-6 text-2xl font-semibold`}>
          {accessory.phone_model} - {accessory.name}
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
  );
}
