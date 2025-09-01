"use client";
export default function Desktop({ onOpenMessages, onOpenProjects, onOpenResume, onOpenCerts }:{ onOpenMessages:()=>void; onOpenProjects:()=>void; onOpenResume:()=>void; onOpenCerts:()=>void; }) {
  return (
    <div className="flex-1 relative">
      <div className="absolute top-16 left-6 flex flex-col gap-8 text-center">
        <Folder label="Resume" onDblClick={onOpenResume} />
        <Folder label="Projects" onDblClick={onOpenProjects} />
        <Folder label="Certifications" onDblClick={onOpenCerts} />
      </div>
    </div>
  );
}
function Folder({ label, onDblClick }:{ label:string; onDblClick:()=>void; }) {
  return (
    <button onDoubleClick={onDblClick} className="flex flex-col items-center gap-2 w-28">
      <img src="/files/folder.png" alt={label} className="h-16 w-16 object-contain drop-shadow" />
      <span className="text-[12px] mt-1">{label}</span>
    </button>
  );
}
