"use client";
import Window from "@/components/mac/window/Window";
export default function TrashWindow({ id, title, style, onClose, onFocus }: any) {
  return (
    <Window id={id} title={title} style={style} onClose={onClose} onFocus={onFocus}>
      <div className="h-full flex items-center justify-center text-neutral-400">Trash is empty.</div>
    </Window>
  );
}
