"use client";
export default function Notification({ title, body, onClick, onClose }:{ title:string; body:string; onClick:()=>void; onClose:()=>void; }) {
  return (
    <div className="fixed right-0 mr-6 w-[440px] bg-panel border border-neutral-700 rounded-mac shadow-2xl cursor-pointer z-[10000] top-[2.51rem]" onClick={onClick}>
      <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-800">
        <span className="text-base font-semibold">{title}</span>
        <button onClick={(e)=>{ e.stopPropagation(); onClose(); }} className="text-neutral-400 hover:text-neutral-200 text-lg">×</button>
      </div>
      <div className="px-5 py-4 text-base text-neutral-200">{body}</div>
    </div>
  );
}
