"use client";

import { useFile } from "./FileContext";
import {
  FileText,
  FileCode2,
  FileJson2,
  Github,
  Linkedin,
  Settings,
  Files,
  Search,
  GitBranch,
} from "lucide-react";
import { useState } from "react";

const files = [
  { name: "About.md", icon: FileText },
  { name: "Projects.js", icon: FileCode2 },
  { name: "Contact.json", icon: FileJson2 },
] as const;

export default function Sidebar() {
  const { activeFile, setActiveFile } = useFile();
  const [activeExplorer, setActiveExplorer] = useState("files");

  return (
    <div className="flex h-full">
      {/* Explorer icons column */}
      <div className="w-12 border-r border-[var(--border)] bg-[var(--panel)] flex flex-col justify-between">
        <div className="flex flex-col items-center gap-4 py-4">
          <button
            onClick={() => setActiveExplorer("files")}
            className={`p-2 rounded-md ${
              activeExplorer === "files"
                ? "text-[var(--purple)] bg-[var(--panel-2)]"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Files size={18} />
          </button>
          <button
            onClick={() => setActiveExplorer("search")}
            className={`p-2 rounded-md ${
              activeExplorer === "search"
                ? "text-[var(--purple)] bg-[var(--panel-2)]"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Search size={18} />
          </button>
          <button
            onClick={() => setActiveExplorer("git")}
            className={`p-2 rounded-md ${
              activeExplorer === "git"
                ? "text-[var(--purple)] bg-[var(--panel-2)]"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <GitBranch size={18} />
          </button>
        </div>

        {/* Bottom icons */}
        <div className="flex flex-col items-center gap-4 py-4">
          <a
            href="https://github.com/Archit-bit"
            target="_blank"
            rel="noreferrer"
            className="opacity-70 hover:opacity-100"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/archit-kaushik"
            target="_blank"
            rel="noreferrer"
            className="opacity-70 hover:opacity-100"
          >
            <Linkedin size={18} />
          </a>
          <button className="opacity-70 hover:opacity-100">
            <Settings size={18} />
          </button>
        </div>
      </div>

      {/* File list (only if explorer=files) */}
      {activeExplorer === "files" && (
        <aside className="w-48 border-r border-[var(--border)] bg-[var(--panel)] p-2 text-sm">
          <nav className="flex flex-col gap-1">
            {files.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => setActiveFile(name)}
                className={`flex items-center gap-2 px-2 py-1 rounded-md transition-colors ${
                  activeFile === name
                    ? "bg-[var(--panel-2)] text-[var(--purple)]"
                    : "hover:bg-[var(--panel-2)]"
                }`}
              >
                <Icon size={14} />
                {name}
              </button>
            ))}
          </nav>
        </aside>
      )}
    </div>
  );
}
