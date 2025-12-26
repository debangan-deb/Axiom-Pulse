"use client"

import clsx from "clsx"

const tabs = ["Pulse", "New Pairs", "Final Stretch", "Migrated"]

type Props = {
  active: string
  onChange: (tab: string) => void
}

export default function MarketTabs({ active, onChange }: Props) {
  return (
    <div className="flex gap-1 rounded-xl border border-[var(--border)] bg-[#0f1318] p-1">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={clsx(
            "px-4 py-1.5 text-xs rounded-lg transition",
            active === tab
              ? "bg-[#161b22] text-white"
              : "text-neutral-400 hover:text-white"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
