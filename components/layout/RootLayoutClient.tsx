"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Terminal from "@/components/layout/Terminal";
import Chatbot from "@/components/Chatbot";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState("files");

  const handleToggle = (id: string) => {
    setActive((prev) => (prev === id ? "none" : id));
  };

  return (
    <div className="flex h-screen font-mono text-sm">
      {/* Sidebar (always left) */}
      <Sidebar active={active} setActive={handleToggle} />

      {/* Main Column */}
      <div className="flex flex-col flex-1 bg-background text-foreground">
        {/* Top Area (main editor + optional chatbot) */}
        <div className="flex flex-1">
          {/* Main editor content */}
          <div className="flex-1">{children}</div>

          {/* Chatbot only if active */}
          {active === "chat" && (
            <div className="w-80 border-l border-[var(--border)] bg-[#1e1e1e] animate-slide-in">
              <Chatbot />
            </div>
          )}
        </div>

        {/* Bottom Terminal */}
        <Terminal />
      </div>
    </div>
  );
}
