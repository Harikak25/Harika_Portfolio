"use client";
import { Wifi, Battery, Clock } from "lucide-react";
export default function TopBar() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const date = now.toLocaleDateString([], { month: "short", day: "2-digit" });
  return (
    <div className="h-12 px-4 flex items-center justify-between text-sm bg-chrome/90 backdrop-blur border-b border-neutral-800">
      <div className="flex items-center gap-5">
        <span className="font-semibold text-base">HK</span>
        <span className="text-neutral-300 hover:text-white transition">File</span>
        <span className="text-neutral-300 hover:text-white transition">Edit</span>
        <span className="text-neutral-300 hover:text-white transition">View</span>
      </div>
      <div className="flex items-center gap-3">
        <Wifi size={18} /><Battery size={18} />
        <div className="flex items-center gap-1.5"><Clock size={18} /><span className="text-sm">{date} {time}</span></div>
      </div>
    </div>
  );
}
