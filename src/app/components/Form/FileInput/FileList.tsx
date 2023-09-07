"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { FileItem } from "./FileItem";
import { useFileInput } from "./Root";

export function FileList() {
  const { files } = useFileInput();

  const [parent] = useAutoAnimate();

  return (
    <div ref={parent} className="mt-4 space-y-4">
      {files.map((file) => (
        <FileItem key={file.name} name={file.name} size={file.size} />
      ))}
    </div>
  );
}
