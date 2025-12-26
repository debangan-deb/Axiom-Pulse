"use client"

import * as Dialog from "@radix-ui/react-dialog"

type Props = {
  trigger: React.ReactNode
  title: string
  children: React.ReactNode
}

export default function Modal({ trigger, title, children }: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-40" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[var(--panel)] border border-[var(--border)] p-4">
          <Dialog.Title className="mb-3 text-sm font-medium">
            {title}
          </Dialog.Title>

          {children}

          <Dialog.Close className="absolute right-3 top-3 text-neutral-400 hover:text-white">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
