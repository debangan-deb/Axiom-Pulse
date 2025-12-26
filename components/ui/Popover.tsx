"use client"

import * as Popover from "@radix-ui/react-popover"

type Props = {
  children: React.ReactNode
  content: React.ReactNode
}

export default function ActionPopover({ children, content }: Props) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>{children}</Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          side="left"
          sideOffset={8}
          className="z-50 rounded-md bg-[var(--panel)] border border-[var(--border)] px-3 py-2 text-sm shadow-lg animate-in fade-in zoom-in-95"
        >
          {content}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
