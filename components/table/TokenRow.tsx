"use client"

import { memo } from "react"
import clsx from "clsx"
import { usePrice } from "@/hooks/usePrice"
import Tooltip from "@/components/ui/Tooltip"
import ActionPopover from "@/components/ui/Popover"
import Modal from "@/components/ui/Modal"

type Props = {
  symbol: string
  price: number
  change: string
  volume: string
}

function TokenRow({ symbol, price, change, volume }: Props) {
  const { price: live, dir } = usePrice(price)

  return (
    <div className="group grid grid-cols-[2fr_1fr_1fr_1fr_40px] px-4 py-3 text-sm transition-all duration-200 hover:bg-[#12171d] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] min-w-[640px]">
      <span>{symbol}</span>

      <Tooltip label="Live price">
        <span
          className={clsx(
            "text-right transition-all duration-300 will-change-[color,filter]",
            dir === "up" && "text-[var(--green)] drop-shadow-[0_0_6px_rgba(34,197,94,0.35)]",
            dir === "down" && "text-[var(--red)] drop-shadow-[0_0_6px_rgba(239,68,68,0.35)]"
          )}
        >

          ${live.toFixed(2)}
        </span>
      </Tooltip>

      <span className="text-right">{change}</span>

      <span className="text-right hidden sm:block">{volume}</span>

      <ActionPopover
        content={
          <Modal
            title={symbol}
            trigger={
              <button className="text-left w-full hover:text-white">
                View details
              </button>
            }
          >
            <div className="text-sm space-y-2">
              <div>Price: ${live.toFixed(2)}</div>
              <div>Change: {change}</div>
              <div>Volume: {volume}</div>
            </div>
          </Modal>
        }
      >
        <button className="text-neutral-400 hover:text-white">
          ⋮
        </button>
      </ActionPopover>
    </div>
  )
}

export default memo(TokenRow)
