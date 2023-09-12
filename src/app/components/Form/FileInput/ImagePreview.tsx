/* eslint-disable @next/next/no-img-element */

"use client";

import { useMemo } from "react";

import { User } from "lucide-react";

import { useFileInput } from "./Root";

export function ImagePreview() {
  const { files } = useFileInput();

  const previewUrl = useMemo(() => {
    if (files.length === 0) {
      return null;
    }

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewUrl === null) {
    return (
      <div className="w-fit rounded-full bg-violet-50 p-4 dark:bg-violet-500/10">
        <User className="h-8 w-8 text-violet-600 dark:text-violet-300" />
      </div>
    );
  }

  return (
    <img
      src={previewUrl}
      className="h-16 w-16 rounded-full object-cover"
      alt="preview attachment"
    />
  );
}
