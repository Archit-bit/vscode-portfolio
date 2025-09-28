import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import { FileProvider } from "@/components/layout/FileContext";
import RootLayoutClient from "@/components/layout/RootLayoutClient";
import ThemeToggle from "@/components/theme/ThemeToggle";

export const metadata: Metadata = {
  title: "Archit Kaushik - Portfolio",
  description: "VS Code inspired portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <FileProvider>
            <RootLayoutClient>{children}</RootLayoutClient>
            {/* Theme Toggle button */}
            <div className="absolute top-2 right-2">
              <ThemeToggle />
            </div>
          </FileProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
