"use client";

import { Files, Search, GitBranch, Bot } from "lucide-react";

type SidebarProps = {
  active: string;
  setActive: (val: string) => void;
};

export default function Sidebar({ active, setActive }: SidebarProps) {
  const items = [
    { id: "files", icon: Files, label: "Explorer" },
    { id: "search", icon: Search, label: "Search" },
    { id: "git", icon: GitBranch, label: "Source Control" },
    { id: "chat", icon: Bot, label: "Ramu Kaka" },
  ];

  return (
    <div className="w-12 bg-[#1e1e1e] border-r border-[var(--border)] flex flex-col items-center py-2 text-gray-400">
      <div className="flex flex-col gap-4 mt-4">
        {items.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActive(id)} // ✅ now toggles
            title={label}
            className={`p-2 rounded-md transition-colors ${
              active === id
                ? "text-purple-400 bg-[#2a2a40]"
                : "hover:text-gray-200"
            }`}
          >
            <Icon size={20} />
          </button>
        ))}
      </div>
    </div>
  );
}
