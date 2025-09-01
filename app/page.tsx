"use client";
import { useEffect, useState } from "react";
import TopBar from "@/components/mac/TopBar";
import Dock from "@/components/mac/Dock";
import Desktop from "@/components/mac/Desktop";
import BootScreen from "@/components/mac/BootScreen";
import Notification from "@/components/mac/Notification";
import LaunchpadOverlay from "@/components/mac/LaunchpadOverlay";
import MessagesWindow from "@/components/mac/imap/MessagesWindow";
import ProjectsWindow from "@/components/windows/ProjectsWindow";
import ResumeWindow from "@/components/windows/ResumeWindow";
import FinderWindow from "@/components/windows/FinderWindow";
import NotesWindow from "@/components/windows/NotesWindow";
import TerminalWindow from "@/components/windows/TerminalWindow";
import TrashWindow from "@/components/windows/TrashWindow";
import CertsWindow from "@/components/windows/CertsWindow";
import CertPreviewWindow from "@/components/windows/CertPreviewWindow";

type WinType="messages"|"projects"|"resume"|"finder"|"notes"|"terminal"|"trash"|"certs"|"certPreview";
type Win={id:string; type:WinType; title:string; z:number; meta?:any;};

export default function Page(){
  const [booted,setBooted]=useState(false);
  const [showNotif,setShowNotif]=useState(false);
  const [wins,setWins]=useState<Win[]>([]);
  const [zTop,setZTop]=useState(10);
  const [showLaunchpad,setShowLaunchpad]=useState(false);
  useEffect(()=>{ const t1=setTimeout(()=>setBooted(true),2800); const t2=setTimeout(()=>setShowNotif(true),3400); return ()=>{clearTimeout(t1); clearTimeout(t2);};},[]);
  const titleFor=(t:WinType)=>({messages:"iMessage",projects:"Projects",resume:"Resume.pdf",finder:"Finder",notes:"Notes",terminal:"Terminal",trash:"Trash",certs:"Certifications",certPreview:"Certificate"}[t]);
  const open=(type:WinType, meta?:any)=>{ setWins(prev=>[...prev,{id:`${type}-${Date.now()}-${Math.floor(Math.random()*1000)}`,type, title:titleFor(type)!, z:zTop+1, meta}]); setZTop(zTop+2); };
  const focus=(id:string)=>{ setWins(prev=>prev.map(w=>w.id===id?{...w,z:zTop+1}:w)); setZTop(zTop+2); };
  const close=(id:string)=>setWins(prev=>prev.filter(w=>w.id!==id));
  const onOpenKey=(key:string)=>{ const map:Record<string,WinType>={projects:"projects",resume:"resume",messages:"messages",notes:"notes",terminal:"terminal"}; if(map[key]) open(map[key]);};
  const openCert = (href:string) => open("certPreview", { file: href });
  return (
    <div className="min-h-screen flex flex-col">
      {!booted ? <BootScreen/> : <>
        <TopBar/>
        <Desktop onOpenMessages={()=>open("messages")} onOpenProjects={()=>open("projects")} onOpenResume={()=>open("resume")} onOpenCerts={()=>open("certs")} />
        <Dock onFinder={()=>open("finder")} onLaunchpad={()=>setShowLaunchpad(true)} onNotes={()=>open("notes")} onMessages={()=>open("messages")} onTerminal={()=>open("terminal")} onTrash={()=>open("trash")} />
        {showNotif && <Notification title="New message from Harika" body="Tap to open" onClick={()=>{open("messages"); setShowNotif(false);}} onClose={()=>setShowNotif(false)} />}
        {wins.map(w=>{ const style={zIndex:w.z}; switch(w.type){
          case "messages": return <MessagesWindow key={w.id} id={w.id} style={style} onClose={()=>close(w.id)} onFocus={()=>focus(w.id)} />;
          case "projects": return <ProjectsWindow key={w.id} id={w.id} title={w.title} style={style} onClose={()=>close(w.id)} onFocus={()=>focus(w.id)} />;
          case "resume": return <ResumeWindow key={w.id} id={w.id} title={w.title} style={style} onClose={()=>close(w.id)} onFocus={()=>focus(w.id)} />;
          case "finder": return <FinderWindow key={w.id} id={w.id} title={w.title} style={style} onClose={()=>close(w.id)} onFocus={()=>focus(w.id)} onOpen={onOpenKey} />;
          case "notes": return <NotesWindow key={w.id} id={w.id} title={w.title} style={style} onClose={()=>close(w.id)} onFocus={()=>focus(w.id)} />;
          case "terminal": return <TerminalWindow key={w.id} id={w.id} title={w.title} style={style} onClose={()=>close(w.id)} onFocus={()=>focus(w.id)} />;
          case "trash": return <TrashWindow key={w.id} id={w.id} title={w.title} style={style} onClose={()=>close(w.id)} onFocus={()=>focus(w.id)} />;
          case "certs": return <CertsWindow key={w.id} id={w.id} title={w.title} style={style} onClose={()=>close(w.id)} onFocus={()=>focus(w.id)} onOpenCert={openCert} />;
          case "certPreview": return <CertPreviewWindow key={w.id} id={w.id} style={style} onClose={()=>close(w.id)} onFocus={()=>focus(w.id)} file={w.meta?.file || ""} />;
        }})}
        {showLaunchpad && <LaunchpadOverlay onOpen={onOpenKey} onClose={()=>setShowLaunchpad(false)} />}
      </>}
    </div>
  );
}
