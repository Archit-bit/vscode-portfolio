"use client";

import { useFile } from "../layout/FileContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useState, useEffect } from "react";

export default function FileContents() {
  const { activeFile } = useFile();
  const [caretVisible, setCaretVisible] = useState(true);

  // blink caret
  useEffect(() => {
    const interval = setInterval(() => {
      setCaretVisible((prev) => !prev);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  let code = "";
  let language: "markdown" | "javascript" | "json" = "markdown";

  if (activeFile === "About.md") {
    code = `# About Me

Hi, I’m Archit 👋
- Software Developer at Accenture
- Exploring MERN, AI, and creative coding
- Love cycling 🚴‍♂️ and side projects`;
    language = "markdown";
  }

  if (activeFile === "Projects.js") {
    code = `// Projects
const projects = [
  { name: "Voice Diary", tech: ["Next.js", "Supabase", "AI"] },
  { name: "Finance Tracker", tech: ["Python", "Gmail API", "Excel"] },
  { name: "Maid Finder", tech: ["MERN", "Tailwind"] },
];`;
    language = "javascript";
  }

  if (activeFile === "Contact.json") {
    code = `{
  "email": "archit@example.com",
  "github": "github.com/Archit-bit",
  "linkedin": "linkedin.com/in/archit-kaushik"
}`;
    language = "json";
  }

  // add caret to the end of last line
  const codeWithCaret = code + (caretVisible ? " ▍" : " "); // ▍ looks like VS Code caret

  return (
    <SyntaxHighlighter
      language={language}
      style={dracula}
      customStyle={{
        background: "transparent",
        padding: "0",
        margin: "0",
        fontSize: "0.875rem",
      }}
      showLineNumbers
      wrapLines
      lineProps={(lineNumber: number) => {
        const lastLine = code.split("\n").length;
        if (lineNumber === lastLine) {
          return { style: { backgroundColor: "rgba(189,147,249,0.1)" } }; // purple translucent bg
        }
        return {};
      }}
      lineNumberStyle={{ color: "var(--muted)" }}
    >
      {codeWithCaret}
    </SyntaxHighlighter>
  );
}
