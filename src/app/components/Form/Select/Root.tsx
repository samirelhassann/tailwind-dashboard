"use client";

import { ReactNode } from "react";

import { ChevronDown } from "lucide-react";

import * as RadixSelect from "@radix-ui/react-select";

interface RootProps extends RadixSelect.SelectProps {
  children: ReactNode;
  placeholder: string;
}

export function Root({ children, placeholder, ...props }: RootProps) {
  return (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none data-[placeholder]:text-zinc-600 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20 dark:data-[placeholder]:text-zinc-400">
        <RadixSelect.Value className="text-black" placeholder={placeholder} />

        <RadixSelect.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-800"
        >
          <RadixSelect.Viewport className="first:rounded-t-md last:rounded-b-md">
            {children}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
