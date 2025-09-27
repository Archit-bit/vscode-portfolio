import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Sidebar from "@/components/layout/Sidebar";
import StatusBar from "@/components/layout/StatusBar";

export const metadata: Metadata = {
  title: "Archit Kaushik — Portfolio",
  description: "VS Code–inspired developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-[var(--background)] text-[var(--foreground)] antialiased transition-colors">
        <ThemeProvider>
          {/* Top bar */}
          <header className="flex items-center justify-between px-4 h-12 border-b border-[var(--border)] bg-[var(--panel)]/60 backdrop-blur">
            <div className="text-sm opacity-80">archit-portfolio</div>
            <ThemeToggle />
          </header>

          {/* Main VS Code-like shell */}
          <div className="flex h-[calc(100vh-3rem)]">
            <Sidebar />
            <main className="flex-1 flex flex-col">
              <div className="flex-1 overflow-auto">{children}</div>
              <StatusBar />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
