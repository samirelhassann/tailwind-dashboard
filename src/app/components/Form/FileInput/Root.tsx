"use client";

import {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useState,
} from "react";

export type RootProps = ComponentProps<"div">;

type FileInputContextType = {
  id: string;
  files: File[];
  onFilesSelected: (selectedFiles: File[]) => void;
};

const FileInputContext = createContext({} as FileInputContextType);

export function Root(props: RootProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  const onFilesSelected = useCallback((selectedFiles: File[]) => {
    setFiles(selectedFiles);
  }, []);

  const contextValue = useMemo(
    () => ({ id, files, onFilesSelected }),
    [files, id, onFilesSelected],
  );

  return (
    <FileInputContext.Provider value={contextValue}>
      <div {...props} />
    </FileInputContext.Provider>
  );
}

export const useFileInput = () => useContext(FileInputContext);
