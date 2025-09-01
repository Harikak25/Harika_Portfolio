"use client";
import { useState } from "react";
import Window from "@/components/mac/window/Window";
const chats = {
  Harika: ["Hey 👋","Welcome to my portfolio.","I build data platforms and GenAI apps.","Skills: Python, Kafka, Next.js, CI/CD, LLMs.","Open Projects or Resume from the dock below."],
  Recruiter: ["Hi Harika, can you share your resume?","Also interested in your Kafka work."],
  Mentor: ["Remember to highlight measurable impact.","Add CI status badges in README."]
} as const;
export default function MessagesWindow({ id, style, onClose, onFocus }:{ id:string; style:any; onClose:()=>void; onFocus:()=>void; }) {
  const [active, setActive] = useState<keyof typeof chats>("Harika");
  return (
    <Window id={id} title="iMessage" style={style} onClose={onClose} onFocus={onFocus}>
      <div className="grid grid-cols-[220px_1fr] h-full">
        <aside className="border-r border-neutral-800 p-3 text-sm">
          <div className="font-medium mb-2">Conversations</div>
          {Object.keys(chats).map((name) => (
            <button key={name} onClick={() => setActive(name as any)}
              className={`w-full text-left px-2 py-1 rounded hover:bg-neutral-800/60 ${active===name ? "bg-neutral-800/60" : ""}`}>{name}</button>
          ))}
        </aside>
        <section className="p-4 flex flex-col gap-3 overflow-auto">
          {chats[active].map((msg, i) => (<Bubble key={i} who={active==="Harika" ? "me" : "them"}>{msg}</Bubble>))}
        </section>
      </div>
    </Window>
  );
}
function Bubble({ who, children }:{ who:"me"|"them"; children:React.ReactNode }) {
  const base="max-w-[70%] px-3 py-2 rounded-2xl text-sm";
  const cls = who==="me" ? "self-end bg-accent text-white rounded-br-sm" : "self-start bg-neutral-800 rounded-bl-sm";
  return <div className={`inline-block ${base} ${cls}`}>{children}</div>;
}
