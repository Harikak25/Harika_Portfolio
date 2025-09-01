"use client";
import Window from "@/components/mac/window/Window";
export default function NotesWindow({ id, title, style, onClose, onFocus }: any) {
  return (
    <Window id={id} title={title} style={style} onClose={onClose} onFocus={onFocus}>
      <div className="h-full grid grid-cols-[240px_1fr]">
        <aside className="border-r border-neutral-800 p-3">
          <div className="text-sm font-medium">Folders</div>
          <div className="mt-3 text-sm text-neutral-300">Portfolio</div>
        </aside>
        <section className="p-6 overflow-auto bg-[repeating-linear-gradient(0deg,transparent,transparent_28px,rgba(255,255,255,0.04)_28px,rgba(255,255,255,0.04)_29px)]">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Hi, I'm Harika 👋</h1>
            <p className="text-neutral-300">I build data platforms and GenAI applications.</p>
            <hr className="my-4 border-neutral-800" />
            <ul className="list-disc pl-5 text-neutral-300">
              <li>Python, TypeScript, Next.js</li>
              <li>Kafka, Postgres, PySpark</li>
              <li>LLMs, RAG, CI/CD with GitHub Actions</li>
            </ul>
          </div>
        </section>
      </div>
    </Window>
  );
}
