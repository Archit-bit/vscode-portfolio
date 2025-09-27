import TabsBar from "@/components/editor/TabsBar";
import FileContents from "@/components/editor/FileContents";
import Chatbot from "../components/Chatbot";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <div className="flex flex-col h-full font-mono text-sm">
        <TabsBar />

        <div className="flex flex-1">
          {/* Editor content */}
          <div className="flex-1 p-4 overflow-auto">
            <FileContents />
          </div>

          {/* Comment rail placeholder */}
          <div className="w-8 border-l border-[var(--border)] bg-[var(--panel)]"></div>
        </div>
      </div>
      <Chatbot />
    </main>
  );
}
