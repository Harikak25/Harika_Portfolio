"use client";
type Props = { onFinder:()=>void; onLaunchpad:()=>void; onNotes:()=>void; onMessages:()=>void; onTerminal:()=>void; onTrash:()=>void; };
export default function Dock(p: Props) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9000]">
      <div className="flex gap-6 px-6 py-4 bg-chrome/80 border border-neutral-700 rounded-3xl backdrop-blur shadow-2xl">
        <DockIcon src="/dock/finder.png" label="Finder" onClick={p.onFinder} />
        <DockIcon src="/dock/launchpad.png" label="Launchpad" onClick={p.onLaunchpad} />
        <DockIcon src="/dock/notes.png" label="Notes" onClick={p.onNotes} />
        <DockIcon src="/dock/imessage.png" label="iMessage" onClick={p.onMessages} />
        <DockIcon src="/dock/terminal.png" label="Terminal" onClick={p.onTerminal} />
        <DockIcon src="/dock/trash.png" label="Trash" onClick={p.onTrash} />
      </div>
    </div>
  );
}
function DockIcon({ src, label, onClick }:{ src:string; label:string; onClick:()=>void; }) {
  return (<button onClick={onClick} className="group flex flex-col items-center hover:scale-125 transition">
    <img src={src} alt={label} className="h-14 w-14 object-contain" />
    <span className="text-xs text-neutral-400 group-hover:text-neutral-200 mt-1">{label}</span>
  </button>);
}
