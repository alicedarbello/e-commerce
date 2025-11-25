import {Suspense} from "react";

import AccessoryDetail from "@/app/components/pages/accessoriesPage/AccessoryDetail";
import OnSaleCards from "@/app/components/pages/homepage/OnSaleCards";
import {interBold} from "@/app/components/styles/fonts";
import {SkeletonAcessoryDetail} from "@/app/components/ui/skeletons";
import NotFound from "@/app/not-found";

export default async function AccessoryPage({params}: {params: Promise<{productId: string}>}) {
  const {productId} = await params;
  const id = Number(productId);

  if (isNaN(id)) {
    return <NotFound accessoryNotFound="Accessory" />;
  }

  return (
    <div>
      <div className="mx-10 my-20">
        <h1 className={`${interBold.className} mb-15 text-4xl`}>Shop Item</h1>{" "}
        <Suspense fallback={<SkeletonAcessoryDetail />}>
          <AccessoryDetail productId={id} />
        </Suspense>
        <OnSaleCards />
      </div>
    </div>
  );
}
