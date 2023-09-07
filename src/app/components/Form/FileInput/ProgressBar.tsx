/* eslint-disable tailwindcss/no-custom-classname */

"use client";

import React from "react";

import * as Progress from "@radix-ui/react-progress";

interface ProgressBarProps {
  percent: number;
}

export function ProgressBar({ percent }: ProgressBarProps) {
  return (
    <Progress.Root
      className="relative h-2 w-full overflow-hidden rounded-full bg-zinc-100"
      style={{
        transform: "translateZ(0)",
      }}
      value={percent}
    >
      <Progress.Indicator
        className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-violet-600 transition-transform duration-[660ms]"
        style={{ transform: `translateX(-${100 - percent}%)` }}
      />
    </Progress.Root>
  );
}
