"use client";
import { useEffect, useState, useRef, type CSSProperties } from "react";
import Window from "@/components/mac/window/Window";

type LineType = "command" | "output";
type TerminalLine = { readonly id: string; readonly type: LineType; readonly content: string };

const newId = () => `${Date.now()}-${Math.random().toString(36).slice(2)}`;

// Typing speed settings
const TYPE_DELAY_BASE = 40;
const TYPE_DELAY_JITTER = 20;
const TYPE_DELAY_PUNCT = 240;
const LINE_PAUSE = 300;

// Pad helper for docker ps table
const pad = (s: string, len: number) => s.padEnd(len, " ");

const commands: Record<string, string[]> = {
  whoami: [
    "Harika K — Senior Software Engineer",
    "Currently: Architecting GenAI systems at BCBS-M",
    "Focus: Making AI trustworthy in high-stakes environments",
  ],
  "ls skills/": [
    "cloud-native/     genai-ml/         data-engineering/",
    "backend-dev/      certifications/   coffee-brewing/",
  ],
  "cat motivation.txt": [
    `"Turn impossible data challenges into 'how did we live without this?'"`,
    "",
    "Status: Obsessed with production-ready AI systems",
    "Mission: Building infrastructure that powers the future",
  ],
  "docker ps": [
    `${pad("CONTAINER", 14)}${pad("STATUS", 10)}${pad("UPTIME", 12)}DESCRIPTION`,
    `${pad("innovation", 14)}${pad("running", 10)}${pad("10+ years", 12)}Always shipping something cool`,
    `${pad("learning", 14)}${pad("running", 10)}${pad("continuous", 12)}New tech adoption engine`,
    `${pad("impact", 14)}${pad("running", 10)}${pad("24/7", 12)}Making data work for business`,
    `${pad("coffee-api", 14)}${pad("running", 10)}${pad("always", 12)}Essential productivity service`,
  ],
  history: [
    "2014: Started with Hadoop (when big data was actually big)",
    "2016: Embraced cloud-native architecture on AWS/Azure",
    "2019: Dove deep into ML/AI production systems",
    "2022: GenAI pioneer in enterprise healthcare",
    "2024: Still shipping game-changing solutions daily",
  ],
  "grep coffee": [
    "~/productivity/fuel.log: 4 cups = optimal algorithm performance",
    "~/habits/morning.sh: coffee && code && conquer",
    '~/stats/efficiency.json: "coffee_correlation": 0.94',
  ],
  help: [
    "Available commands:",
    "  whoami             Who am I anyway?",
    "  ls skills/         What's in my toolkit",
    "  cat motivation.txt Why I do this",
    "  docker ps          What's running in my head",
    "  history            My journey so far",
    "  grep coffee        Essential fuel stats",
    "  clear              Clear terminal",
    "  help               Show this help",
  ],
};

type Props = {
  readonly id: string;
  readonly title?: string;
  readonly style?: CSSProperties;
  readonly onClose: () => void;
  readonly onFocus: () => void;
};

export default function TerminalWindow({ id, title, style, onClose, onFocus }: Props) {
  const [lines, setLines] = useState<TerminalLine[]>([
    { id: newId(), type: "output", content: "Welcome to HK Terminal v2.0" },
    { id: newId(), type: "output", content: 'Type "help" for available commands' },
    { id: newId(), type: "output", content: "" },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLLabelElement>(null);
  const inputId = `${id}-terminal-input`;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const append = (type: LineType, content: string) =>
    setLines((prev) => [...prev, { id: newId(), type, content }]);

  const typeOut = async (full: string) => {
    const id = newId();
    setLines((prev) => [...prev, { id, type: "output", content: "" }]);
    for (let i = 1; i <= full.length; i++) {
      const ch = full[i - 1];
      const jitter = Math.random() * TYPE_DELAY_JITTER;
      const punctPause = /[.,;:!?)]/.test(ch) ? TYPE_DELAY_PUNCT : 0;
      await new Promise((r) => setTimeout(r, TYPE_DELAY_BASE + jitter + punctPause));
      setLines((prev) =>
        prev.map((ln) => (ln.id === id ? { ...ln, content: full.slice(0, i) } : ln))
      );
    }
  };

  const executeCommand = async (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    append("command", `HK@portfolio % ${cmd}`);

    if (trimmed === "clear") {
      setLines([
        { id: newId(), type: "output", content: 'Terminal cleared. Type "help" for commands.' },
        { id: newId(), type: "output", content: "" },
      ]);
      return;
    }

    if (trimmed === "") {
      append("output", "");
      return;
    }

    const response = commands[trimmed];
    if (response) {
      setIsTyping(true);
      for (const line of response) {
        await typeOut(line);
        await new Promise((r) => setTimeout(r, LINE_PAUSE));
      }
      setIsTyping(false);
      append("output", "");
    } else {
      await typeOut(`Command not found: ${cmd}`);
      await typeOut('Type "help" for available commands');
      append("output", "");
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isTyping) {
      void executeCommand(currentInput);
      setCurrentInput("");
    }
  };

  return (
    <Window id={id} title={title ?? "Terminal"} style={style} onClose={onClose} onFocus={onFocus}>
      <label
        ref={containerRef}
        htmlFor={inputId}
        className="h-full block bg-black text-green-400 font-mono text-sm p-4 overflow-auto cursor-text"
        aria-label="Terminal area. Click to focus the input."
      >
        {lines.map((line) => (
          <pre
            key={line.id}
            className={
              (line.type === "command" ? "text-green-300" : "text-green-400") +
              " whitespace-pre font-mono mb-1"
            }
          >
            {line.content}
          </pre>
        ))}

        {!isTyping && (
          <div className="flex items-center">
            <span className="text-green-300 mr-2">HK@portfolio %</span>
            <input
              id={inputId}
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono"
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal input"
            />
            <span className="animate-pulse text-green-400">▮</span>
          </div>
        )}

        {isTyping && (
          <div className="flex items-center">
            <span className="animate-pulse text-green-400">▮</span>
          </div>
        )}
      </label>
    </Window>
  );
}

