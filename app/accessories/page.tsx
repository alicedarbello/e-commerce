import Image from "next/image";
import {Suspense} from "react";
import Link from "next/link";

import {interBold} from "../components/styles/fonts";
import {CardImage, PhoneCard} from "../components/shared/PhoneCard";
import {fetchAllAccessories} from "../services/accessories";
import {SkeletonCards} from "../components/ui/skeletons";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{[key: string]: string | undefined}>;
}) {
  const q = (await searchParams).q;

  return (
    <div className="my-20">
      <h1 className={`${interBold.className} mb-20 text-4xl`}>Shop All Products</h1>
      <Suspense key={q} fallback={<SkeletonCards />}>
        <SuspensedPage q={q} />
      </Suspense>
    </div>
  );
}

async function SuspensedPage({q}: {q: string | undefined}) {
  const res = await fetchAllAccessories({q});

  return (
    <div className="flex flex-wrap justify-between gap-8">
      {res.data.map((mobile) => (
        <Link key={mobile.id} href={`/accessories/${mobile.id}`}>
          <PhoneCard key={mobile.id} className="selection_hover">
            <CardImage>
              <Image
                alt={mobile.name}
                className="m-10"
                height={220}
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${mobile.image_uri}`}
                width={220}
              />
            </CardImage>
            <p>
              {mobile.phone_model} - {mobile.name}
            </p>
            <p>LKR {mobile.price}</p>
          </PhoneCard>
        </Link>
      ))}
    </div>
  );
}
