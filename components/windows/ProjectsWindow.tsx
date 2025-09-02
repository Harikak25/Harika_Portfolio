"use client";
import Window from "@/components/mac/window/Window";

const projects = [
  {
    title: "BCBS Contract Intelligence Platform",
    period: "Dec 2022 - Present",
    challenge: "Manual contract review processes across 1M+ legacy healthcare contracts",
    solution: "Built GenAI-powered document intelligence platform using Claude 2.1 via Amazon Bedrock and Titan Embeddings for production RAG pipelines. Deployed BART-MNLI on SageMaker for zero-shot clause classification",
    impact: "Automated clause-level risk scoring, reduced review turnaround by 60%, ensured HIPAA compliance with real-time data processing (<5 sec freshness)",
    stack: ["AWS S3", "Kinesis", "Step Functions", "PySpark", "Delta Lake", "Claude", "Titan Embeddings", "Spring Boot"]
  },
  {
    title: "Synchrony Financial Risk Detection Engine", 
    period: "Dec 2019 - Nov 2022",
    challenge: "Early detection of repayment anomalies across 3B+ transaction records",
    solution: "Architected real-time ML pipeline with XGBoost and Random Forest models, plus Isolation Forest for unsupervised anomaly detection. Deployed DistilBERT for NLP-driven rationale extraction",
    impact: "Enabled proactive risk identification, streamlined compliance audits, reduced false positive alerts by 40%",
    stack: ["Azure ML", "Databricks", "Snowflake", "FastAPI", "DistilBERT", "Named Entity Recognition"]
  },
  {
    title: "RedBus Dynamic Pricing Intelligence",
    period: "June 2016 - Dec 2019", 
    challenge: "Static discount model missing demand patterns and revenue optimization opportunities",
    solution: "Developed GRU neural networks using Keras for time-series demand prediction with real-time promotional decisioning",
    impact: "30% improvement in conversion rates, optimized marketing spend through targeted route-specific offers",
    stack: ["Keras GRU", "PySpark", "Amazon Redshift", "Spring Boot", "Redis", "OracleDB"]
  }
];

export default function ProjectsWindow({ id, title, style, onClose, onFocus }: any) {
  return (
    <Window id={id} title={title} style={style} onClose={onClose} onFocus={onFocus}>
      <div className="p-6 space-y-6 overflow-auto h-full">
        {projects.map((project) => (
          <div key={project.title} className="rounded-xl border border-neutral-700 bg-neutral-900 p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <span className="text-sm text-neutral-400 bg-neutral-800 px-2 py-1 rounded">{project.period}</span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div>
                <h4 className="text-sm font-medium text-red-400 mb-1">Challenge:</h4>
                <p className="text-sm text-neutral-300">{project.challenge}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-blue-400 mb-1">Solution:</h4>
                <p className="text-sm text-neutral-300">{project.solution}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-green-400 mb-1">Impact:</h4>
                <p className="text-sm text-neutral-300">{project.impact}</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-neutral-400 mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        <div className="text-center text-neutral-500 text-sm mt-8 pb-4">
          📄 Download detailed resume from desktop folder for complete project portfolio
        </div>
      </div>
    </Window>
  );
}