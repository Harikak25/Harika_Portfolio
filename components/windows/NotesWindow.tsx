"use client";
import Window from "@/components/mac/window/Window";

export default function NotesWindow({ id, title, style, onClose, onFocus }: any) {
  return (
    <Window id={id} title={title} style={style} onClose={onClose} onFocus={onFocus}>
      <div className="h-full grid grid-cols-[240px_1fr]">
        <aside className="border-r border-neutral-800 p-3">
          <div className="text-sm font-medium">Notes</div>
          <div className="mt-3 text-sm text-blue-400">Terminal Guide</div>
        </aside>
        <section className="p-6 overflow-auto bg-[repeating-linear-gradient(0deg,transparent,transparent_28px,rgba(255,255,255,0.04)_28px,rgba(255,255,255,0.04)_29px)]">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">🚀 Terminal Commands</h1>
            <p className="text-neutral-300 mb-6">Open Terminal from the dock and try these interactive commands:</p>
            
            <div className="space-y-4">
              <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-700">
                <code className="text-green-400 font-mono">whoami</code>
                <p className="text-sm text-neutral-400 mt-1">Who am I anyway?</p>
              </div>
              
              <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-700">
                <code className="text-green-400 font-mono">ls skills/</code>
                <p className="text-sm text-neutral-400 mt-1">What's in my toolkit</p>
              </div>
              
              <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-700">
                <code className="text-green-400 font-mono">cat motivation.txt</code>
                <p className="text-sm text-neutral-400 mt-1">Why I do this</p>
              </div>
              
              <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-700">
                <code className="text-green-400 font-mono">docker ps</code>
                <p className="text-sm text-neutral-400 mt-1">What's running in my head</p>
              </div>
              
              <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-700">
                <code className="text-green-400 font-mono">history</code>
                <p className="text-sm text-neutral-400 mt-1">My journey so far</p>
              </div>
              
              <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-700">
                <code className="text-green-400 font-mono">grep coffee</code>
                <p className="text-sm text-neutral-400 mt-1">Essential fuel stats ☕</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-sm text-blue-300">
                💡 <strong>Pro tip:</strong> Commands are interactive and respond in real-time. 
                Type <code className="text-green-400 font-mono px-1">help</code> in Terminal for the full list!
              </p>
            </div>
            
            <div className="mt-6 text-center text-neutral-500 text-sm">
              Feel free to explore - some commands might surprise you 😎
            </div>
          </div>
        </section>
      </div>
    </Window>
  );
}