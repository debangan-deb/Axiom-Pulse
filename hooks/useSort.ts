import { useState } from "react"

export function useSort<T>(data: T[], key: keyof T) {
  const [asc, setAsc] = useState(true)

  const sorted = [...data].sort((a, b) => {
    const x = a[key] as number
    const y = b[key] as number
    return asc ? x - y : y - x
  })

  return { sorted, toggle: () => setAsc(v => !v), asc }
}
