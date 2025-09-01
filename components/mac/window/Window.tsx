"use client";
import { useEffect, useRef, useState } from "react";
export default function Window({ id, title, style, onClose, onFocus, children }:{ id:string; title:string; style?:React.CSSProperties; onClose:()=>void; onFocus:()=>void; children:React.ReactNode; }) {
  const [pos, setPos] = useState<{x:number;y:number}|null>(null);
  const [size, setSize] = useState({ w: 900, h: 560 });
  const drag = useRef<{sx:number; sy:number; ox:number; oy:number} | null>(null);
  const rez = useRef<{sx:number; sy:number; ow:number; oh:number} | null>(null);

  // center on first mount
  useEffect(() => {
    if (pos===null) {
      const x = Math.max(12, Math.round((window.innerWidth - size.w) / 2));
      const y = Math.max(40, Math.round((window.innerHeight - size.h) / 2));
      setPos({ x, y });
    }
  }, [pos, size.w, size.h]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (drag.current) {
        setPos(p => {
          const cur = p ?? {x:0,y:0};
          return { x: Math.max(12, drag.current.ox + (e.clientX-drag.current.sx)), y: Math.max(40, drag.current.oy + (e.clientY-drag.current.sy)) };
        });
      } else if (rez.current) {
        const minW = 560, minH = 360;
        const dw = e.clientX - rez.current.sx;
        const dh = e.clientY - rez.current.sy;
        const newW = Math.max(minW, rez.current.ow + dw);
        const newH = Math.max(minH, rez.current.oh + dh);
        setSize({ w: newW, h: newH });
      }
    };
    const onUp = () => { drag.current = null; rez.current = null; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, []);

  const startDrag = (e: React.MouseEvent) => { if (!pos) return; drag.current = { sx: e.clientX, sy: e.clientY, ox: pos.x, oy: pos.y }; };
  const startResize = (e: React.MouseEvent) => { e.stopPropagation(); rez.current = { sx: e.clientX, sy: e.clientY, ow: size.w, oh: size.h }; };

  if (pos===null) return null; // wait one tick to compute center

  return (
    <div id={id}
      style={{ left: pos.x, top: pos.y, width: size.w, height: size.h, ...(style||{}) }}
      onMouseDown={onFocus}
      className="fixed bg-chrome border border-neutral-700 rounded-mac shadow-mac select-none"
    >
      <div className="h-10 flex items-center gap-2 px-3 border-b border-neutral-800 cursor-move" onMouseDown={startDrag}>
        <div className="flex gap-2">
          <button onClick={onClose} className="h-3 w-3 rounded-full bg-red-500" title="Close" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" /><div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="text-sm ml-2">{title}</div>
      </div>
      <div className="h-[calc(100%-40px)] bg-panel overflow-hidden">{children}</div>
      <div className="absolute right-1.5 bottom-1.5 h-4 w-4 cursor-nwse-resize opacity-70" onMouseDown={startResize}>
        <svg viewBox="0 0 16 16" className="h-4 w-4 fill-neutral-600">
          <path d="M10 16h6v-2h-4v-2H10v4zm-4 0h2v-6H6v6zm-6 0h2v-10H0v10z"/>
        </svg>
      </div>
    </div>
  );
}
