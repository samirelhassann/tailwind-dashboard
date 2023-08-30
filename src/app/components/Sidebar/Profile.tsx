/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */

import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="mt-6 grid grid-cols-profile items-center gap-3 border-t-2 pt-6">
      <img
        src="https://github.com/samirelhassann.png"
        className="w-10 rounded-full"
        alt="Profile image"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Samir El Hassan
        </span>
        <span className="truncate text-xs text-zinc-500">
          samirelhassann@gmail.com
        </span>
      </div>

      <button type="button" className="ml-auto">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
}
