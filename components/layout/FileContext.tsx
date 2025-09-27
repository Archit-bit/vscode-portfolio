"use client";

import { createContext, useContext, useState } from "react";

type FileName = "About.md" | "Projects.js" | "Contact.json";

type FileContextType = {
  activeFile: FileName;
  setActiveFile: (file: FileName) => void;
};

const FileContext = createContext<FileContextType | undefined>(undefined);

export function FileProvider({ children }: { children: React.ReactNode }) {
  const [activeFile, setActiveFile] = useState<FileName>("About.md");
  return (
    <FileContext.Provider value={{ activeFile, setActiveFile }}>
      {children}
    </FileContext.Provider>
  );
}

export function useFile() {
  const ctx = useContext(FileContext);
  if (!ctx) throw new Error("useFile must be inside FileProvider");
  return ctx;
}
