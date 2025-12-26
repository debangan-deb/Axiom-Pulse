type Props = {
  onSort?: () => void
  asc?: boolean
}

export default function TokenHeader({ onSort, asc }: Props) {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_40px] px-4 py-2 text-[11px] uppercase tracking-wide text-neutral-500 border-b border-[var(--border)] bg-[#0f1318] min-w-[640px]">
      <span>Token</span>

      <button
        onClick={onSort}
        className="flex justify-end items-center gap-1"
      >
        Price
        {asc !== undefined && (
          <span className="text-neutral-400">
            {asc ? "↑" : "↓"}
          </span>
        )}
      </button>

      <span className="text-right">Change</span>
      <span className="text-right hidden sm:block">Volume</span>
      <span />
    </div>
  )
}
