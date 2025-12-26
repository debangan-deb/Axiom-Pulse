"use client"

import * as T from "@radix-ui/react-tooltip"

export default function Tooltip({ label, children }: any) {
  return (
    <T.Provider>
      <T.Root>
        <T.Trigger asChild>{children}</T.Trigger>
        <T.Content className="bg-black text-xs px-2 py-1 rounded">
          {label}
        </T.Content>
      </T.Root>
    </T.Provider>
  )
}
