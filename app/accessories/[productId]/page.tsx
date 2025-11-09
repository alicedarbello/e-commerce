import AccessoryDetail from "@/app/components/pages/accessoriesPage/AccessoryDetail";
import OnSaleCards from "@/app/components/pages/homepage/OnSaleCards";

export default async function AccessoryPage({params}: {params: Promise<{productId: string}>}) {
  const {productId} = await params;

  return (
    <div>
      <AccessoryDetail productId={productId} />
      <OnSaleCards />
    </div>
  );
}
