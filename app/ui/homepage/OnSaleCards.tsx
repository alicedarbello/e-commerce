"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay, {type AutoplayType} from "embla-carousel-autoplay";
import {useEffect, useRef, useState} from "react";
import Image from "next/image";

import {CardImage, OnSaleChip, PhoneCard} from "./cards/PhoneCard";

import {fetchAllAccessories} from "@/app/services/accessories";
import {Accessories} from "@/app/types";

export default function OnSaleCards() {
  const [onSale, setOnSale] = useState<Accessories[]>([]);

  useEffect(() => {
    fetchAllAccessories({onSale: true}).then((res) => {
      setOnSale(res.data);
    });
  }, []);

  const autoplay = useRef<AutoplayType>(Autoplay({delay: 2000, stopOnInteraction: false}));
  const [emblaRef] = useEmblaCarousel(
    {
      align: "start", // Alinhamento dos slides
      loop: true, // Loop infinito
      dragFree: true, // Drag com momentum
      containScroll: "trimSnaps", // Controle de scroll
      slidesToScroll: 1, // Número de slides para rolar
    },
    [autoplay.current],
  );

  return (
    <div
      className="embla relative my-30"
      onMouseEnter={() => autoplay.current.stop()}
      onMouseLeave={() => autoplay.current.play()}
    >
      <div ref={emblaRef} className="embla__viewport">
        <div className="embla__container">
          {onSale.map((mobile) => (
            <PhoneCard key={mobile.id} className="embla__slide">
              <div className="relative">
                <OnSaleChip />
                <CardImage>
                  <Image
                    alt="Iphone 13 - Transparent"
                    className="mx-10 my-15"
                    height="309"
                    src={`https://mocom-api.vercel.app${mobile.image_uri}`}
                    width="306"
                  />
                </CardImage>
              </div>
              <p>
                {mobile.phone_model} - {mobile.name}
              </p>
              <p>LKR {mobile.price}</p>
            </PhoneCard>
          ))}
        </div>
      </div>
    </div>
  );
}
