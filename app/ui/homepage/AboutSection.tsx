import Image from "next/image";

import {lalezar} from "../fonts";

export default function AboutSection() {
  return (
    <div className="my-30">
      <div className="m-auto my-5 h-14 w-0 rounded-4xl border-8 border-r-8 border-red-600" />
      <p className="text-center text-sm">about us</p>
      <div className="m-auto my-10 w-4xl">
        <h1 className={`${lalezar.className} text-center text-4xl text-red-600`}>
          If you’re looking for a Premium Quality Tempered Glass or Back-cover for your Device
        </h1>
      </div>
      <div className="m-auto">
        <p className="my-20 text-center text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </p>
        <Image
          alt="Mobile Phone Accessories"
          className="mt-20 w-full"
          height={343}
          src="/mobile-phone-accessories.png"
          width={1236}
        />
      </div>
    </div>
  );
}
