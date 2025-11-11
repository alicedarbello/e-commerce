export function SkeletonCard() {
  return (
    <div className="animate-pulse space-y-3 rounded-2xl p-4">
      <div className="h-80 w-80 rounded-lg bg-gray-200" />
      <div className="h-4 w-3/4 rounded bg-gray-200" />
      <div className="h-4 w-1/2 rounded bg-gray-200" />
    </div>
  );
}

export function SkeletonCards() {
  return (
    <div className="flex flex-wrap justify-between gap-8">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}

export function SkeletonAcessoryDetail() {
  return (
    <div className="mx-15 mr-30 grid animate-pulse grid-cols-2">
      <div className="h-96 w-96 rounded-lg bg-gray-200" />
      <div>
        <div className="h-4 w-3/4 rounded bg-gray-200" />
        <div className="h-4 w-1/2 rounded bg-gray-200" />
      </div>
    </div>
  );
}
