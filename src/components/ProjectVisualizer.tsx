import React from 'react';
import { FileText, Cpu, Database, CheckCircle2, Activity, Volume2, Sparkles, Languages, Maximize2 } from 'lucide-react';


interface ProjectVisualizerProps {
  projectId: string;
}

export const ProjectVisualizer: React.FC<ProjectVisualizerProps> = ({ projectId }) => {
  if (projectId === 'colpali-retrieval') {
    return (
      <div className="p-6 rounded-2xl bg-[#090b12] border border-white/10 h-full flex flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 border-b border-white/[0.08] pb-3 mb-6">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Multimodal Vector Pipeline
          </span>
          <span>Zero OCR Loss</span>
        </div>

        {/* Technical Flow Schematic */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 my-auto">
          {/* Node 1 */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center flex flex-col items-center">
            <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 flex items-center justify-center mb-2">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase">Input</span>
            <span className="text-xs font-bold text-white mt-0.5">Raw PDF Pages</span>
            <span className="text-[10px] font-mono text-slate-400 mt-1">Tables &amp; Charts</span>
          </div>

          {/* Node 2 */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center flex flex-col items-center">
            <div className="w-9 h-9 rounded-lg bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 flex items-center justify-center mb-2">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase">Model</span>
            <span className="text-xs font-bold text-white mt-0.5">Qwen2-VL</span>
            <span className="text-[10px] font-mono text-slate-400 mt-1">Vision Embeddings</span>
          </div>

          {/* Node 3 */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center flex flex-col items-center">
            <div className="w-9 h-9 rounded-lg bg-sky-950/60 border border-sky-800/40 text-sky-400 flex items-center justify-center mb-2">
              <Database className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase">Index</span>
            <span className="text-xs font-bold text-white mt-0.5">FAISS Vector DB</span>
            <span className="text-[10px] font-mono text-slate-400 mt-1">Sub-second Search</span>
          </div>

          {/* Node 4 */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center flex flex-col items-center">
            <div className="w-9 h-9 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 flex items-center justify-center mb-2">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase">Output</span>
            <span className="text-xs font-bold text-white mt-0.5">Page Retrieval</span>
            <span className="text-[10px] font-mono text-emerald-400 mt-1">Visual Match</span>
          </div>
        </div>

        {/* Bottom Technical Metric Bar */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Backend: FastAPI + React.js</span>
          <span className="text-cyan-400 font-semibold">End-to-End Search UI</span>
        </div>
      </div>
    );
  }

  if (projectId === 'plant-disease-detection') {
    return (
      <div className="p-6 rounded-2xl bg-[#090b12] border border-white/10 h-full flex flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 border-b border-white/[0.08] pb-3 mb-6">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Diagnostic Vision Pipeline
          </span>
          <span className="text-emerald-300 font-bold">95%+ Classification Acc</span>
        </div>

        {/* Technical Flow Schematic */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 my-auto">
          {/* Node 1 */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center flex flex-col items-center">
            <div className="w-9 h-9 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 flex items-center justify-center mb-2">
              <Activity className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase">Dataset</span>
            <span className="text-xs font-bold text-white mt-0.5">100,000+ Images</span>
            <span className="text-[10px] font-mono text-slate-400 mt-1">OpenCV Prep</span>
          </div>

          {/* Node 2 */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center flex flex-col items-center">
            <div className="w-9 h-9 rounded-lg bg-sky-950/60 border border-sky-800/40 text-sky-400 flex items-center justify-center mb-2">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase">Framework</span>
            <span className="text-xs font-bold text-white mt-0.5">TensorFlow / Keras</span>
            <span className="text-[10px] font-mono text-slate-400 mt-1">Deep ConvNet</span>
          </div>

          {/* Node 3 */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center flex flex-col items-center">
            <div className="w-9 h-9 rounded-lg bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 flex items-center justify-center mb-2">
              <Languages className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase">Multilingual</span>
            <span className="text-xs font-bold text-white mt-0.5">TE / HI / EN</span>
            <span className="text-[10px] font-mono text-slate-400 mt-1">Streamlit App</span>
          </div>

          {/* Node 4 */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center flex flex-col items-center">
            <div className="w-9 h-9 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 flex items-center justify-center mb-2">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase">Outcome</span>
            <span className="text-xs font-bold text-white mt-0.5">Remedy Advice</span>
            <span className="text-[10px] font-mono text-emerald-400 mt-1">Actionable Care</span>
          </div>
        </div>

        {/* Bottom Technical Metric Bar */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Deployment: Streamlit Web UI</span>
          <span className="text-emerald-400 font-semibold">Agricultural Pathology</span>
        </div>
      </div>
    );
  }

  // Gesture System Control
  return (
    <div className="p-6 rounded-2xl bg-[#090b12] border border-white/10 h-full flex flex-col justify-between">
      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 border-b border-white/[0.08] pb-3 mb-6">
        <span className="flex items-center gap-1.5 text-purple-400">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          HCI Landmark Pipeline
        </span>
        <span className="text-slate-300">Windows OS Direct Hook</span>
      </div>

      {/* Technical Flow Schematic */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 my-auto">
        {/* Node 1 */}
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center flex flex-col items-center">
          <div className="w-9 h-9 rounded-lg bg-purple-950/60 border border-purple-800/40 text-purple-400 flex items-center justify-center mb-2">
            <Activity className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono text-slate-400 uppercase">Webcam</span>
          <span className="text-xs font-bold text-white mt-0.5">30+ FPS Video</span>
          <span className="text-[10px] font-mono text-slate-400 mt-1">OpenCV Stream</span>
        </div>

        {/* Node 2 */}
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center flex flex-col items-center">
          <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 flex items-center justify-center mb-2">
            <Maximize2 className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono text-slate-400 uppercase">Detection</span>
          <span className="text-xs font-bold text-white mt-0.5">21 Hand Points</span>
          <span className="text-[10px] font-mono text-slate-400 mt-1">MediaPipe Mesh</span>
        </div>

        {/* Node 3 */}
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center flex flex-col items-center">
          <div className="w-9 h-9 rounded-lg bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 flex items-center justify-center mb-2">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono text-slate-400 uppercase">Mapping</span>
          <span className="text-xs font-bold text-white mt-0.5">Gesture Vector</span>
          <span className="text-[10px] font-mono text-slate-400 mt-1">Pinch &bull; Scroll</span>
        </div>

        {/* Node 4 */}
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center flex flex-col items-center">
          <div className="w-9 h-9 rounded-lg bg-pink-950/60 border border-pink-800/40 text-pink-400 flex items-center justify-center mb-2">
            <Volume2 className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono text-slate-400 uppercase">Windows Hook</span>
          <span className="text-xs font-bold text-white mt-0.5">PyAutoGUI &bull; pycaw</span>
          <span className="text-[10px] font-mono text-pink-400 mt-1">Volume &amp; Light</span>
        </div>
      </div>

      {/* Bottom Technical Metric Bar */}
      <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
        <span>Controls: Volume, Brightness, Navigation</span>
        <span className="text-purple-400 font-semibold">Low CPU Overhead</span>
      </div>
    </div>
  );
};
