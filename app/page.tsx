const lines = Array.from({ length: 12 }, (_, i) => i + 1);

export default function Home() {
  return (
    <div className="flex h-full font-mono text-sm">
      {/* Gutter (line numbers) */}
      <div className="w-10 bg-[var(--panel)] border-r border-[var(--border)] text-right pr-2 text-[var(--muted)]">
        {lines.map((n) => (
          <div key={n} className="h-6 leading-6">
            {n}
          </div>
        ))}
      </div>

      {/* Editor content */}
      <div className="flex-1 p-4">
        <pre className="text-[var(--foreground)]">
          <code>
            {`# Hello, I'm Archit 👋

This editor pane will show the active file's content.
Next, we'll wire up actual About/Projects/Contact sections.

Stay tuned 🚀`}
          </code>
        </pre>
      </div>

      {/* Comment rail (right side) */}
      <div className="w-8 border-l border-[var(--border)] bg-[var(--panel)]"></div>
    </div>
  );
}
