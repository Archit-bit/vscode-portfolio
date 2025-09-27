"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDracula = theme === "dracula";
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDracula ? "light" : "dracula")}
      className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-sm hover:bg-[var(--panel-2)] transition-colors"
    >
      {isDracula ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">
        {isDracula ? "Light" : "Dracula"}
      </span>
    </button>
  );
}
