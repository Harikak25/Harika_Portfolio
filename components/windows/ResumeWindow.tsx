"use client";
import Window from "@/components/mac/window/Window";
export default function ResumeWindow({ id, title, style, onClose, onFocus }: any) {
  return (
    <Window id={id} title={title} style={style} onClose={onClose} onFocus={onFocus}>
      <div className="h-10 flex items-center gap-2 px-3 border-b border-neutral-800 bg-neutral-900">
        <div className="text-xs text-neutral-400">Preview</div>
        <div className="flex-1" />
        <a href="/resume.pdf" download className="flex items-center gap-2 text-xs px-2 py-1 rounded border border-neutral-700 hover:bg-neutral-800">
          <img src="/files/download.png" alt="Download" className="h-4 w-4" /><span>Download</span>
        </a>
      </div>
      <div className="h-[calc(100%-40px)]"><iframe src="/resume.pdf#toolbar=0" className="w-full h-full" /></div>
    </Window>
  );
}
