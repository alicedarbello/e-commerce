import Image from "next/image";

import {lalezar, interBold} from "../fonts";

export default function TemperedGlassCard() {
  return (
    <div className="relative my-50">
      <div className="absolute -top-12 right-0 -z-50 h-[120%] w-2/5 bg-[#003049]" />
      <div className="my-20 w-11/12 rounded-2xl bg-gray-200">
        <div className="grid grid-cols-3 items-center gap-10 p-10">
          <div className="col-span-2">
            <h1 className={`${lalezar.className} text-4xl text-red-500`}>Shop Premium</h1>
            <h1 className={`${lalezar.className} text-4xl text-red-500`}>
              Tempered Glass in wholesale
            </h1>
            <h1 className={`${lalezar.className} text-4xl text-red-500`}>Price !</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>LKR : 299</p>
            <button
              className={`${interBold.className} mt-5 rounded-2xl bg-red-500 px-10 py-4 text-white`}
            >
              Shop Tempered Glass
            </button>
          </div>
          <Image alt="Tempered Glass" height={320} src="/vidrio-templado.png" width={320} />
        </div>
      </div>
    </div>
  );
}
