export default function TokenSkeleton() {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_40px] px-4 py-3 animate-pulse min-w-[640px]">
      <div className="h-4 bg-neutral-800 rounded w-24" />
      <div className="h-4 bg-neutral-800 rounded w-20 ml-auto" />
      <div className="h-4 bg-neutral-800 rounded w-16 ml-auto" />
      <div className="h-4 bg-neutral-800 rounded w-20 ml-auto hidden sm:block" />
      <div />
    </div>
  )
}
