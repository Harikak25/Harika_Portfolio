"use client";
import Window from "@/components/mac/window/Window";
type Item={label:string;icon:string;action?:()=>void;kind:"folder"|"file"};
export default function FinderWindow({ id, title, style, onClose, onFocus, onOpen }: any) {
  const items:Item[]=[
    { label:"Projects", icon:"/files/folder.png", kind:"folder", action:()=>onOpen("projects") },
    { label:"Certifications", icon:"/files/folder.png", kind:"folder", action:()=>onOpen("certs") },
    { label:"Documents", icon:"/files/folder.png", kind:"folder", action:()=>onOpen("resume") },
    { label:"Resume.pdf", icon:"/files/pdf.png", kind:"file", action:()=>onOpen("resume") },
  ];
  return (
    <Window id={id} title={title} style={style} onClose={onClose} onFocus={onFocus}>
      <div className="h-full grid grid-cols-[220px_1fr]">
        <aside className="border-r border-neutral-800 p-3 text-sm">
          <div className="font-medium mb-2">Favorites</div>
          <div className="text-neutral-400">Desktop</div>
          <div className="text-neutral-400">Downloads</div>
          <div className="text-neutral-400">Documents</div>
        </aside>
        <section className="p-6 grid grid-cols-4 gap-6 overflow-auto">
          {items.map((it)=>(
            <button key={it.label} onDoubleClick={it.action} className="flex flex-col items-center gap-2">
              <img src={it.icon} alt={it.label} className="h-16 w-16 object-contain" />
              <span className="text-xs">{it.label}</span>
            </button>
          ))}
        </section>
      </div>
    </Window>
  );
}
