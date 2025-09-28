"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type FileContextType = {
  activeFile: string;
  setActiveFile: Dispatch<SetStateAction<string>>;
};

const FileContext = createContext<FileContextType | undefined>(undefined);

export function FileProvider({ children }: { children: ReactNode }) {
  const [activeFile, setActiveFile] = useState("About.md");

  return (
    <FileContext.Provider value={{ activeFile, setActiveFile }}>
      {children}
    </FileContext.Provider>
  );
}

export function useFile() {
  const context = useContext(FileContext);
  if (context === undefined) {
    throw new Error("useFile must be used within a FileProvider");
  }
  return context;
}
