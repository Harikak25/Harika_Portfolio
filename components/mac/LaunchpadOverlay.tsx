"use client";
export default function LaunchpadOverlay({ onOpen, onClose }:{ onOpen:(key:string)=>void; onClose:()=>void; }) {
  const apps=[
    { label:"Projects", key:"projects", icon:"/dock/finder.png" },
    { label:"Resume",   key:"resume",   icon:"/files/pdf.png" },
    { label:"iMessage", key:"messages", icon:"/dock/imessage.png" },
    { label:"Notes",    key:"notes",    icon:"/dock/notes.png" },
    { label:"Terminal", key:"terminal", icon:"/dock/terminal.png" },
  ];
  return (
    <div className="fixed inset-0 z-[9999] backdrop-blur-md bg-black/40" onClick={onClose} onKeyDown={(e)=>{ if(e.key==='Escape') onClose(); }} tabIndex={0}>
      <div className="h-full w-full grid place-items-center" onClick={(e)=>e.stopPropagation()}>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-10">
          {apps.map(a=>(
            <button key={a.key} onClick={()=>{ onOpen(a.key); onClose(); }} className="group flex flex-col items-center">
              <img src={a.icon} alt={a.label} className="h-20 w-20 rounded-2xl shadow-mac object-contain" />
              <span className="mt-2 text-sm">{a.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
