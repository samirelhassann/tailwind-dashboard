/* eslint-disable react/button-has-type */

import { ComponentProps } from "react";

import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: [
    "rounded-lg px-4 py-2 text-sm font-semibold shadow-sm outline-none",
    "focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2",
    "active:opacity-80",
  ],

  variants: {
    variant: {
      primary:
        "bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600",
      outline:
        "dark:border:bg-zinc-800 border border-zinc-300 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800",
      ghost:
        "rounded-md px-2 shadow-none hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-700",
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button>;

export function Button({ variant, ...props }: ButtonProps) {
  return <button className={button({ variant })} {...props} />;
}
