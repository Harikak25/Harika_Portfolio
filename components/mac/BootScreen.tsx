"use client";
import { useEffect, useState } from "react";
export default function BootScreen() {
  const [p,setP]=useState(0);
  useEffect(()=>{
    const target=80; // percent
    const duration=2200; // ms
    const step=20; // ms
    const inc = target/(duration/step);
    const t=setInterval(()=>setP(x=>Math.min(target, x+inc)), step);
    return ()=>clearInterval(t);
  },[]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6">
        <img src="/icons/apple-logo.png" alt="logo" className="h-20 w-auto opacity-90 object-contain"/>
        <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-white/80 transition-[width] duration-100 ease-linear" style={{ width: `${p}%` }} />
        </div>
      </div>
    </div>
  );
}
