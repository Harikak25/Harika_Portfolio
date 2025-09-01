"use client";
import { useEffect, useState } from "react";
export default function Background(){
  const [src,setSrc]=useState<string | null>(null);
  useEffect(()=>{
    const tryImg=(p:string)=>new Promise<boolean>(res=>{ const i=new Image(); i.onload=()=>res(true); i.onerror=()=>res(false); i.src=p; });
    (async()=>{
      if (await tryImg('/background.jpg')) { setSrc('/background.jpg'); return; }
      if (await tryImg('/background.png')) { setSrc('/background.png'); return; }
      setSrc(null);
    })();
  },[]);
  return <div aria-hidden className="fixed inset-0 -z-10" style={src?{ background:`url('${src}') center / cover no-repeat fixed` }:{ background:"#0B0B0F" }} />;
}
