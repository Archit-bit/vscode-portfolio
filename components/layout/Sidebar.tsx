"use client";

import { useState } from "react";

const files = [
  { name: "About.md", type: "markdown" },
  { name: "Projects.js", type: "javascript" },
  { name: "Contact.json", type: "json" },
];

export default function Sidebar() {
  const [active, setActive] = useState("About.md");

  return (
    <aside className="w-40 border-r border-[var(--border)] bg-[var(--panel)] p-2 text-sm">
      <nav className="flex flex-col gap-1">
        {files.map((file) => (
          <button
            key={file.name}
            onClick={() => setActive(file.name)}
            className={`w-full text-left px-2 py-1 rounded-md transition-colors ${
              active === file.name
                ? "bg-[var(--panel-2)] text-[var(--purple)]"
                : "hover:bg-[var(--panel-2)]"
            }`}
          >
            {file.name}
          </button>
        ))}
      </nav>
    </aside>
  );
}
