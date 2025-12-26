"use client"

import { useEffect, useState } from "react"
import TokenHeader from "./TokenHeader"
import TokenRow from "./TokenRow"
import TokenSkeleton from "./TokenSkeleton"
import MarketTabs from "./MarketTabs"

const ALL = [
  { symbol: "BTC / USDT", price: 43192.38, change: "-0.42%", volume: "$34.8M" },
  { symbol: "ETH / USDT", price: 1824.36, change: "+1.24%", volume: "$21.4M" },
  { symbol: "SOL / USDT", price: 99.19, change: "+3.11%", volume: "$12.1M" }
]

function filterByTab(tab: string) {
  if (tab === "New Pairs") return ALL.filter(t => t.symbol.startsWith("SOL"))
  if (tab === "Final Stretch") return ALL.filter(t => !t.symbol.startsWith("BTC"))
  if (tab === "Migrated") return ALL.filter(t => t.symbol.startsWith("BTC"))
  return ALL
}

export default function TokenTable() {
  const [tab, setTab] = useState("Pulse")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(t)
  }, [tab])

  const data = filterByTab(tab)

  return (
    <div className="flex flex-col items-center gap-4">
      <MarketTabs active={tab} onChange={setTab} />

      <div className="max-w-5xl w-full rounded-2xl border border-[var(--border)] bg-gradient-to-b from-[#0f1318] to-[#0b0e11] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] overflow-hidden">
        <TokenHeader />

        {loading
          ? Array.from({ length: 3 }).map((_, i) => <TokenSkeleton key={i} />)
          : data.map(t => <TokenRow key={t.symbol} {...t} />)}
      </div>
    </div>
  )
}
