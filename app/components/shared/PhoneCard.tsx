export function PhoneCard({children, className}: {children: React.ReactNode; className?: string}) {
  return <div className={className}>{children}</div>;
}

export function OnSaleChip() {
  return (
    <div className="absolute top-3 left-3 rounded-full bg-gray-300 px-3 py-1 text-sm shadow-xl/30">
      sale !
    </div>
  );
}

export function CardImage({children}: {children: React.ReactNode}) {
  return (
    <div className="flex items-center justify-center rounded-2xl bg-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100">
      {children}
    </div>
  );
}
