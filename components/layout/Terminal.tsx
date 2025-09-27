"use client";

import { useState, useEffect } from "react";
import { useFile } from "./FileContext";
import { useTheme } from "next-themes";

type Command = {
  input: string;
  output: string[];
};

function typewriterEffect(
  text: string,
  cb: (chunk: string) => void,
  done: () => void
) {
  let i = 0;
  const interval = setInterval(() => {
    cb(text.slice(0, i + 1));
    i++;
    if (i === text.length) {
      clearInterval(interval);
      done();
    }
  }, 15);
}

function renderColoredLine(line: string, key: number) {
  // Error-like messages
  if (/error|not found|failed|500/i.test(line)) {
    return (
      <div key={key} className="pl-4 whitespace-pre text-red-400">
        {line}
      </div>
    );
  }

  // Success-like messages
  if (/success|done|compiled|200|✔|✓/i.test(line)) {
    return (
      <div key={key} className="pl-4 whitespace-pre text-green-400">
        {line}
      </div>
    );
  }

  // Warning-like messages
  if (/warn|deprecated|⚠/i.test(line)) {
    return (
      <div key={key} className="pl-4 whitespace-pre text-yellow-400">
        {line}
      </div>
    );
  }

  // JSON output (e.g., contact info)
  if (/^\s*[{[]/.test(line) || /:/.test(line)) {
    return (
      <div key={key} className="pl-4 whitespace-pre text-cyan-300">
        {line}
      </div>
    );
  }

  // Default fallback
  return (
    <div key={key} className="pl-4 whitespace-pre text-gray-200">
      {line}
    </div>
  );
}

export default function Terminal() {
  const { setActiveFile } = useFile();
  const { theme, setTheme } = useTheme();

  const [history, setHistory] = useState<Command[]>([]);
  const [current, setCurrent] = useState("");

  const [caretVisible, setCaretVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCaretVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "There are only 10 types of people in the world: those who understand binary and those who don’t.",
    "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
    "Debugging: Removing the needles from the haystack.",
  ];

  const runCommand = (cmd: string): string[] => {
    const parts = cmd.split(" ");
    const base = parts[0];
    const arg = parts[1];

    switch (base) {
      case "help":
        return [
          "Available commands:",
          "help       Show this help message",
          "whoami     About me",
          "projects   List of projects",
          "contact    My contact info",
          "open <file>   Open a file (About.md, Projects.js, Contact.json)",
          "theme      Toggle light/dracula theme",
          "joke       Tell me a dev joke",
          "cycle      🚴 Easter egg",
          "clear      Clear terminal",
        ];
      case "whoami":
        return [
          "Archit Kaushik 👨‍💻",
          "Software Developer @ Accenture",
          "Exploring MERN, AI, creative coding",
          "Hobbies: Cycling 🚴, design, side projects",
        ];
      case "projects":
        return [
          "Voice Diary — Next.js + Supabase + AI",
          "Finance Tracker — Python + Gmail API + Excel",
          "Maid Finder — MERN + Tailwind",
        ];
      case "contact":
        return [
          "{",
          `  "email": "archit@example.com",`,
          `  "github": "github.com/Archit-bit",`,
          `  "linkedin": "linkedin.com/in/archit-kaushik"`,
          "}",
        ];
      case "open":
        if (
          arg === "About.md" ||
          arg === "Projects.js" ||
          arg === "Contact.json"
        ) {
          setActiveFile(arg as any);
          return [`Opening ${arg}...`];
        }
        return [
          "Usage: open <file>",
          "Available: About.md, Projects.js, Contact.json",
        ];
      case "theme":
        setTheme(theme === "dracula" ? "light" : "dracula");
        return [
          `Theme switched to ${theme === "dracula" ? "light" : "dracula"}`,
        ];
      case "joke":
        return [jokes[Math.floor(Math.random() * jokes.length)]];
      case "cycle":
        return [
          "     __o",
          "   _`\\<,_",
          "  (*)/ (*)   Keep pedaling Archit! 🚴",
        ];
      case "clear":
        setHistory([]);
        return [];
      case "":
        return [];
      default:
        return [
          `Command not found: ${cmd}`,
          "Type 'help' to see available commands.",
        ];
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = current.trim();
    const outputLines = runCommand(cmd);

    if (outputLines.length > 0) {
      setHistory([...history, { input: cmd, output: [] }]);

      outputLines.forEach((line, index) => {
        let buffer = "";
        typewriterEffect(
          line,
          (chunk) => {
            buffer = chunk;
            setHistory((prev) => {
              const newHist = [...prev];
              newHist[newHist.length - 1].output[index] = buffer;
              return [...newHist];
            });
          },
          () => {}
        );
      });
    } else {
      setHistory([...history, { input: cmd, output: [] }]);
    }

    setCurrent("");
  };

  const prompt = "archit@portfolio:~/projects$";

  return (
    <div className="h-64 flex flex-col border-t border-[var(--border)] bg-[#1e1e1e] font-mono text-sm">
      {/* Header tabs like VS Code */}
      <div className="h-8 flex items-center border-b border-[var(--border)] text-xs text-gray-400 px-4 space-x-6">
        <span className="text-gray-200 border-b-2 border-[var(--purple)] pb-1">
          TERMINAL
        </span>
        <span>PROBLEMS</span>
        <span>OUTPUT</span>
        <span>DEBUG CONSOLE</span>
      </div>

      {/* Terminal body */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1 text-gray-100">
        {history.map((cmd, i) => (
          <div key={i}>
            <div className="flex">
              <span className="flex-shrink-0">
                <span className="text-green-400">archit</span>
                <span className="text-yellow-400">@portfolio</span>:
                <span className="text-cyan-400">~/projects</span>
                <span className="text-gray-200">$</span>
              </span>
              &nbsp;
              <span className="text-gray-100">{cmd.input}</span>
            </div>
            {cmd.output.map((line, j) => renderColoredLine(line, j))}
          </div>
        ))}
      </div>

      {/* Input row */}
      <form
        onSubmit={handleCommand}
        className="flex border-t border-[var(--border)] bg-[#1e1e1e] px-3 py-2"
      >
        <span className="flex-shrink-0">
          <span className="text-green-400">archit</span>
          <span className="text-yellow-400">@portfolio</span>:
          <span className="text-cyan-400">~/projects</span>
          <span className="text-gray-200">$</span>
        </span>
        &nbsp;
        <input
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          className="flex-1 bg-transparent outline-none text-gray-100 caret-gray-100"
          autoFocus
        />
        {caretVisible && (
          <span className="w-1 bg-gray-100 self-center mb-1 animate-pulse" />
        )}
      </form>
    </div>
  );
}
