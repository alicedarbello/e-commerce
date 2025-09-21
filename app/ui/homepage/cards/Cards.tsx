import Image from "next/image";

interface CardsProps {
  urlImage: string;
  name: string;
  price: number;
}

export default function Cards({urlImage, name, price}: CardsProps) {
  return (
    <>
      <div className="relative rounded-xl bg-gray-200" style={{height: "421px", width: "323px"}}>
        <div className="font- absolute top-3 left-3 rounded-full bg-gray-300 px-3 py-1 text-sm shadow-xl/30">
          sale !
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <Image
            alt="Iphone 13 - Transparent"
            height="309"
            src={urlImage}
            style={{width: "auto", height: "auto"}}
            width="306"
          />
        </div>
      </div>
      <p>{name}</p>
      <p>LKR {price}</p>
    </>
  );
}
