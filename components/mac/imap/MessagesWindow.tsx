"use client";
import { useState, type CSSProperties, type ReactNode } from "react";
import Window from "@/components/mac/window/Window";

const chats = {
  Harika: [
    "Hey there!",
    "Welcome to my digital workspace.",
    "I'm Harika - Senior Software Engineer with 10+ years architecting data platforms and GenAI applications.",
    "Recent highlights: GenAI contract intelligence (1M+ contracts), fraud detection (3B+ records), ML pricing optimization (30% boost).",
    "Check Projects folder for detailed case studies, try Terminal for interactive exploration, grab my resume from desktop folders.",
    "Navigate through other chats to dive deeper!"
  ],
  Expertise: [
    "Insurance & Healthcare: GenAI document intelligence, HIPAA-compliant pipelines, real-time contract analysis.",
    "Financial Services: Real-time fraud detection, ML risk modeling, compliance automation at petabyte scale.",
    "E-commerce & Logistics: Demand prediction networks, dynamic pricing, booking velocity analysis.",
    "Each domain taught me unique lessons - compliance, real-time decisions, scale and speed."
  ],
  "Tech Stack": [
    "Cloud: AWS (S3, Kinesis, Bedrock), Azure (ML, Data Factory), Docker, Kubernetes, Terraform.",
    "AI/ML: Claude via Bedrock, GPT-4, Titan Embeddings, XGBoost, Keras neural networks, BART-MNLI.",
    "Data: PySpark, Databricks, Delta Lake, Kafka, Airflow, Snowflake, real-time streaming.",
    "Backend: Java Spring Boot, Python FastAPI, GraphQL/REST APIs, PostgreSQL, Redis, microservices.",
    "I architect with these tools - every choice optimized for scale, security, maintainability."
  ],
  Connect: [
    "Ready to connect?",
    "Download my resume from the desktop folder",
    "LinkedIn: Let's connect professionally",
    "Coffee chat: Always open to interesting conversations",
    "Currently seeking: Senior/Staff level roles in data engineering, ML infrastructure, or GenAI applications",
    "I love solving complex data challenges and building systems that scale."
  ]
} as const;

type Props = {
  readonly id: string;
  readonly style: CSSProperties;
  readonly onClose: () => void;
  readonly onFocus: () => void;
};

export default function MessagesWindow({ id, style, onClose, onFocus }: Props) {
  const [active, setActive] = useState<keyof typeof chats>("Harika");

  return (
    <Window id={id} title="iMessage" style={style} onClose={onClose} onFocus={onFocus}>
      <div className="grid grid-cols-[220px_1fr] h-full">
        <aside className="border-r border-neutral-800 p-3 text-sm">
          <div className="font-medium mb-2">Conversations</div>
          {(Object.keys(chats) as Array<keyof typeof chats>).map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setActive(name)}
              className={`w-full text-left px-2 py-1 rounded hover:bg-neutral-800/60 ${
                active === name ? "bg-neutral-800/60" : ""
              }`}
            >
              {name}
            </button>
          ))}
        </aside>
        <section className="p-4 flex flex-col gap-3 overflow-auto">
          {(() => {
            const seen = new Map<string, number>();
            return chats[active].map((msg) => {
              const count = (seen.get(msg) ?? 0) + 1;
              seen.set(msg, count);
              const key = count === 1 ? msg : `${msg}-${count}`;
              return (
                <Bubble key={key} who={active === "Harika" ? "me" : "them"}>
                  {msg}
                </Bubble>
              );
            });
          })()}
        </section>
      </div>
    </Window>
  );
}

function Bubble({ who, children }: { readonly who: "me" | "them"; readonly children: ReactNode }) {
  const base = "max-w-[70%] px-3 py-2 rounded-2xl text-sm";
  const cls =
    who === "me"
      ? "self-end bg-accent text-white rounded-br-sm"
      : "self-start bg-neutral-800 rounded-bl-sm";
  return <div className={`inline-block ${base} ${cls}`}>{children}</div>;
}