"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay, {type AutoplayType} from "embla-carousel-autoplay";
import {useRef} from "react";
import Image from "next/image";

import {CardImage, OnSaleChip, PhoneCard} from "./cards/OnSaleCard";

import {mobiles} from "@/app/lib/placeholder-data";

export default function OnSaleCards() {
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
          {mobiles
            .filter((m) => m.onSale)
            .map((mobile) => (
              <PhoneCard key={mobile.id} className="embla__slide">
                <div
                  className="relative rounded-xl bg-gray-200"
                  style={{height: "421px", width: "323px"}}
                >
                  <OnSaleChip />
                  <CardImage>
                    <Image
                      alt="Iphone 13 - Transparent"
                      height="309"
                      src={mobile.image}
                      style={{width: "auto", height: "auto"}}
                      width="306"
                    />
                  </CardImage>
                </div>
                <p>{mobile.name}</p>
                <p>LKR {mobile.price}</p>
              </PhoneCard>
            ))}
        </div>
      </div>
    </div>
  );
}
