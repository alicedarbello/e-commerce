import Image from "next/image";

import {lalezar} from "../fonts";

export default function WhyChooseUs() {
  return (
    <div className="my-30">
      <div className="mb-20">
        <div className="m-auto my-5 h-14 w-0 rounded-4xl border-8 border-r-8 border-red-600" />
        <p className="text-center text-sm">Why Choose US</p>
      </div>
      <div className="grid grid-cols-3 gap-24">
        <div className="my-5 flex flex-col items-center">
          <Image
            alt="Delivery Truck"
            className="my-5 h-auto w-14"
            height={100}
            src="/delivery-truck.png"
            width={100}
          />
          <h1 className={`${lalezar.className} my-5 text-4xl`}>Fast Delivery</h1>
          <p className="my-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="my-5 flex flex-col items-center">
          <Image
            alt="Cash Payment"
            className="my-5 h-auto w-14"
            height={100}
            src="/cash-payment.png"
            width={100}
          />
          <h1 className={`${lalezar.className} my-5 text-4xl`}>Cheap Price</h1>
          <p className="my-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            alt="Quality Icon"
            className="my-5 h-auto w-14"
            height={100}
            src="/quality.png"
            width={100}
          />
          <h1 className={`${lalezar.className} my-5 text-4xl`}>Premium Quality</h1>
          <p className="my-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
