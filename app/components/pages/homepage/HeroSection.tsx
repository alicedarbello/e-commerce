import Image from "next/image";

import {lalezar, interBold} from "../../styles/fonts";

export default function HeroSection() {
  return (
    <div className="mt-30 mb-30 grid min-h-auto grid-cols-2">
      <div className="mt-auto flex flex-col items-start justify-center gap-8">
        <div className={`${lalezar.className}`}>
          <h1 className="mb-3 text-8xl">Mobile</h1>
          <h2 className="text-8xl text-red-500">Backcover</h2>
          <h2 className="text-8xl text-red-500">Tempered Glass</h2>
        </div>
        <button className={`${interBold.className} rounded-2xl bg-red-500 px-10 py-4 text-white`}>
          Shop all !
        </button>
      </div>
      <div className="flex justify-center">
        <Image
          alt="Iphone Case"
          height={544}
          src="/firstSectionImage.png"
          style={{width: "auto", height: "auto"}}
          width={518}
        />
      </div>
    </div>
  );
}
