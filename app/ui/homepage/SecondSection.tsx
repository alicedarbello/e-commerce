"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay, {type AutoplayType} from "embla-carousel-autoplay";
import {useRef} from "react";

import Cards from "./cards/Cards";

import {mobiles} from "@/app/lib/placeholder-data";

export default function Carousel() {
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
              <div key={mobile.id} className="embla__slide">
                <Cards name={mobile.name} price={mobile.price} urlImage={mobile.image} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
