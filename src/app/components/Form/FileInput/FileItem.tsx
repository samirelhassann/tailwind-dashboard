/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-undef */

"use client";

import { useEffect, useMemo, useState } from "react";

import { CheckCircle2, File, Loader, Trash2 } from "lucide-react";
import { tv } from "tailwind-variants";

import { formatSize } from "@/app/utils/FormatSize";

import { Button } from "../../Button";
import { ProgressBar } from "./ProgressBar";

type fileStatus = "complete" | "pending" | "loading";

const fileItem = tv({
  slots: {
    container:
      "group flex items-start gap-4 rounded-lg border border-zinc-200 p-4",
  },

  variants: {
    status: {
      loading: {
        container: "",
      },
      complete: {
        container: "border-violet-500",
      },

      error: {
        container: "border-red-500",
      },
    },
  },

  defaultVariants: {
    status: "loading",
  },
});

interface FileItemProps {
  name: string;
  size: number;
}

export function FileItem({ name, size }: FileItemProps) {
  const [percent, setPercent] = useState(0);
  const [checked, setChecked] = useState(false);

  const status: fileStatus = useMemo(() => {
    return percent >= 100 ? "complete" : "loading";
  }, [percent]);

  const { container } = fileItem({ status });

  useEffect(() => {
    const interval = setInterval(() => {
      if (percent < 100) {
        setPercent(percent + 15 < 100 ? percent + 15 : 100);
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [percent]);

  useEffect(() => {
    if (status === "complete") {
      setChecked(true);

      const timeoutId = setTimeout(() => {
        setChecked(false);
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [status]);

  const formatedPercent = `${percent}%`;

  return (
    <div key={name} className={container()}>
      <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
        <File className="h-4 w-4" />
      </div>

      <div className="flex w-full items-start justify-between gap-1">
        <div className="flex w-full flex-col">
          <span className="text-sm font-medium text-zinc-700">{name}</span>
          <span className="text-sm/5 text-zinc-500">{formatSize(size)}</span>

          <div className="mt-1 flex items-center gap-3">
            <ProgressBar percent={percent} />

            <span className="text-sm/5 font-medium text-zinc-700">
              {formatedPercent}
            </span>
          </div>
        </div>

        <div className="flex w-10 justify-center">
          {checked && (
            <CheckCircle2 className="h-6 w-6 fill-violet-600 text-white" />
          )}

          {status === "loading" && (
            <Loader className="h-5 w-5 animate-spin text-zinc-500" />
          )}

          {status === "complete" && !checked && (
            <Button type="button" variant="ghost">
              <Trash2 className="h-5 w-5 text-zinc-500" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
