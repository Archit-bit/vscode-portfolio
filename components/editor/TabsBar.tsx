"use client";

import { useFile } from "../layout/FileContext";
import { X } from "lucide-react";

const files = ["About.md", "Projects.js", "Contact.json"] as const;

export default function TabsBar() {
  const { activeFile, setActiveFile } = useFile();

  return (
    <div className="flex border-b border-[var(--border)] bg-[var(--panel)] text-sm">
      {files.map((file) => {
        const isActive = activeFile === file;
        return (
          <button
            key={file}
            onClick={() => setActiveFile(file)}
            className={`flex items-center gap-2 px-4 py-1 border-r border-[var(--border)] transition-colors ${
              isActive
                ? "bg-[var(--background)] text-[var(--purple)]"
                : "hover:bg-[var(--panel-2)]"
            }`}
          >
            {file}
            <X size={14} className="opacity-50 hover:opacity-80" />
          </button>
        );
      })}
    </div>
  );
}
