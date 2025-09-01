"use client";
import { useEffect, useState } from "react";
import Window from "@/components/mac/window/Window";
type Cert = { name: string; href: string };
export default function CertsWindow({ id, title, style, onClose, onFocus, onOpenCert }:{ id:string; title:string; style:any; onClose:()=>void; onFocus:()=>void; onOpenCert:(href:string)=>void }) {
  const [files, setFiles] = useState<Cert[]>([]);
  useEffect(()=>{ fetch("/api/certs").then(r=>r.json()).then(d=>setFiles(d.files ?? [])).catch(()=>setFiles([])); },[]);
  return (
    <Window id={id} title={title} style={style} onClose={onClose} onFocus={onFocus}>
      <div className="p-6 grid grid-cols-4 gap-6 overflow-auto h-full">
        {files.length===0 ? <div className="col-span-4 text-sm text-neutral-400">Put your certification PDFs in <code>/public/certs/</code>. They will appear here automatically.</div> :
          files.map(f=>(<button key={f.name} onDoubleClick={()=>onOpenCert(f.href)} className="flex flex-col items-center gap-2">
            <img src="/files/pdf.png" alt={f.name} className="h-16 w-16 object-contain" />
            <span className="text-xs text-center">{f.name}</span>
          </button>))
        }
      </div>
    </Window>
  );
}
