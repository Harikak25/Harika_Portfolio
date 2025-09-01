"use client";
import Window from "@/components/mac/window/Window";
const projects=[{title:"CANON",desc:"Kafka + FastAPI + Postgres notification platform.",stack:["Python","Kafka","Postgres"]},{title:"Clause Agent",desc:"RAG pipeline with guardrails.",stack:["LLMs","Embeddings","LangChain"]},{title:"Data Lakehouse",desc:"Delta Lake + PySpark workloads.",stack:["PySpark","Delta","S3"]}];
export default function ProjectsWindow({ id, title, style, onClose, onFocus }: any) {
  return (
    <Window id={id} title={title} style={style} onClose={onClose} onFocus={onFocus}>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-auto h-full">
        {projects.map((p) => (
          <div key={p.title} className="rounded-xl border border-neutral-700 bg-neutral-900 p-4">
            <div className="text-lg font-semibold">{p.title}</div>
            <p className="text-sm text-neutral-300 mt-1">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => (<span key={s} className="text-xs px-2 py-0.5 rounded-full bg-neutral-800 border border-neutral-700">{s}</span>))}
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
}
