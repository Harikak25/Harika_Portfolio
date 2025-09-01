"use client";
import { useEffect, useState } from "react";
import Window from "@/components/mac/window/Window";
export default function TerminalWindow({ id, title, style, onClose, onFocus }: any) {
  const lines=["HK@portfolio % whoami","Harika — Senior Software Engineer","HK@portfolio % skills","Python, Kafka, Next.js, LLMs, CI/CD","HK@portfolio % open projects"];
  const [shown,setShown]=useState<string[]>([]);
  useEffect(()=>{ let i=0; const t=setInterval(()=>{ setShown(s=>[...s,lines[i++]]); if(i>=lines.length) clearInterval(t); },500); return ()=>clearInterval(t); },[]);
  return (
    <Window id={id} title={title ?? "Terminal"} style={style} onClose={onClose} onFocus={onFocus}>
      <div className="h-full bg-black text-green-400 font-mono text-sm p-4 overflow-auto">{shown.map((l,i)=><div key={i}>{l}</div>)}<div className="animate-pulse">▮</div></div>
    </Window>
  );
}
