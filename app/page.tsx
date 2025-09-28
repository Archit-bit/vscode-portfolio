"use client";

import { AnimatePresence } from "framer-motion";
import TabsBar from "../components/editor/TabsBar";
import FileContents from "../components/editor/FileContents";
import Chatbot from "../components/Chatbot";

export default function Home() {
  return (
    <div className="flex-1 flex relative">
      {/* Center area: Editor */}
      <div className="flex-1 flex flex-col">
        <TabsBar />
        <div className="flex flex-1 relative">
          <div className="flex-1 p-4 overflow-auto">
            <FileContents />
          </div>
          <div className="w-12 border-l border-[var(--border)] bg-[var(--panel)] p-2 text-xs">
            {/* comment rail */}
          </div>
        </div>
        {/* ⚠️ Terminal is now global in layout.tsx, so don’t add it here */}
      </div>
    </div>
  );
}
