import { useEffect, useState } from "react"
import { subscribePrice } from "@/lib/socket"

export function usePrice(initial: number) {
  const [price, setPrice] = useState(initial)
  const [dir, setDir] = useState<"up" | "down" | null>(null)

  useEffect(() => {
    return subscribePrice(initial, p => {
      setDir(p > price ? "up" : "down")
      setPrice(p)
      setTimeout(() => setDir(null), 300)
    })
  }, [])

  return { price, dir }
}
