import Image from "next/image";

import {interRegular} from "../../styles/fonts";
import {CardImage} from "../../shared/PhoneCard";

import {fetchAccessoryById} from "@/app/services/accessories";
import NotFound from "@/app/not-found";

export default async function AccessoryDetail({productId}: {productId: number}) {
  const accessory = await fetchAccessoryById(productId);

  if (!accessory) {
    return <NotFound accessoryNotFound="Accessory" />;
  }

  return (
    <div className="grid grid-cols-3">
      <div className="w-fit">
        <CardImage>
          <Image
            alt={accessory.name || "Accessory Image"}
            className="p-10"
            height={400}
            src={`http://127.0.0.1:8000${accessory.image_uri}`}
            width={400}
          />
        </CardImage>
      </div>
      <div className="col-span-2 ml-10">
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
