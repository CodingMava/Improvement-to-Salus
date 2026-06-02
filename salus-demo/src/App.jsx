import React, { useState, useEffect } from 'react';

// --- STYLING CONSTANTS (For that premium tech feel) ---
const styles = {
  card: "bg-neutral-900 border border-neutral-800 rounded-3xl p-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-sm",
  statCard: "bg-neutral-950 border border-neutral-800 rounded-2xl p-5 flex flex-col gap-1.5",
  tag: "px-3 py-1 text-xs font-mono font-medium rounded-full uppercase tracking-widest",
  logItem: "flex items-center justify-between gap-4 p-5 rounded-2xl border transition-all duration-300",
};

// --- KEYFRAMES FOR ANIMATION (Add this to your index.css) ---
// @keyframes soundWave {
//   0%, 100% { height: 10px; }
//   50% { height: 30px; }
// }
// .animate-sound { animation: soundWave 1s ease-in-out infinite; }

const SalusPreExecutionDemo = () => {
  const [simulationState, setSimulationState] = useState('idle'); // idle, processing, complete
  const [logs, setLogs] = useState([
    { id: 1, type: 'TEXT', action: 'Draft investor update email', provenance: 'Verified User (JWT)', risk: 'Low', status: '✅ Passed' },
    { id: 2, type: 'TEXT', action: 'Query Q3 revenue db (PII masked)', provenance: 'Verified User (JWT)', risk: 'Medium', status: '✅ Passed' },
  ]);

  const [activeAnalysis, setActiveAnalysis] = useState(null);

  const startDeepfakeSimulation = () => {
    setSimulationState('processing');
    setActiveAnalysis({
      action: 'Execute wire transfer: $15,000 to Apex Corp.',
      type: 'AUDIO (Voice AI Agent)',
      progress: 0,
      scores: null
    });

    // Simulate analysis timeline
    let progressInterval = setInterval(() => {
      setActiveAnalysis(prev => ({
        ...prev,
        progress: Math.min(prev.progress + 15, 99)
      }));
    }, 300);

    // Final result
    setTimeout(() => {
      clearInterval(progressInterval);
      setSimulationState('complete');
      const scores = { synthetic: 98.4, natural: 1.6, latency: '82ms' };
      setActiveAnalysis(prev => ({ ...prev, progress: 100, scores }));

      const attackLog = {
        id: Date.now(),
        type: 'AUDIO',
        action: 'Wire transfer $15k (Deepfake Bypass Attempt)',
        provenance: 'CRITICAL FAILURE: Synthetic Media Detected',
        risk: 'High',
        status: '🛡️ Neutralized'
      };
      setLogs(prev => [attackLog, ...prev]);
    }, 3500);
  };

  const resetSimulation = () => {
    setSimulationState('idle');
    setActiveAnalysis(null);
  }

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 p-6 md:p-10 font-sans selection:bg-emerald-500/20">
      
      {/* --- HEADER --- */}
      <header className="flex items-center justify-between pb-10 border-b border-neutral-800 mb-10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-emerald-500 rounded-full grid place-items-center shadow-[0_0_20px_rgba(16,185,129,0.5)]">
            <span className="font-bold text-xl text-neutral-950">S</span>
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tighter">SALUS <span className='text-neutral-500'>// Multimodal Validation Layer</span></h1>
            <p className="text-sm text-neutral-400">Provenance Authentication and Action Guardrails for Agentic AI</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-neutral-900 p-1 rounded-full border border-neutral-800 text-sm">
            <span className="relative flex h-2 w-2 ml-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className='pr-4 font-medium text-emerald-400'>Monitoring Live Traffic</span>
        </div>
      </header>

      <main className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* --- LEFT PANEL: CONTROL & ACTIVE ANALYSIS --- */}
        <div className={`${styles.card} xl:col-span-1 flex flex-col gap-8`}>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white mb-2">Simulate Edge Case</h2>
            <p className="text-neutral-400 text-sm mb-6">Test the validation layer by injecting a high-risk action triggered by synthetic (cloned) audio media.</p>
            
            {simulationState === 'idle' && (
              <button 
                onClick={startDeepfakeSimulation}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-neutral-950 font-bold py-4 rounded-2xl transition-all duration-150 shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.4)] active:scale-[0.98]"
              >
                Simulate Deepfake Hijack Attempt
              </button>
            )}
            {(simulationState === 'processing' || simulationState === 'complete') && (
              <button 
                onClick={resetSimulation}
                className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-4 rounded-2xl transition-all duration-150"
              >
                Reset Simulation
              </button>
            )}
          </div>

          {/* ACTIVE ANALYSIS VISUALIZATION */}
          {activeAnalysis && (
            <div className="border-t border-neutral-800 pt-8 mt-auto">
              <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-4">Active Provenance Analysis</h3>
              
              <div className="bg-neutral-950 rounded-2xl border border-neutral-800 p-6 flex flex-col gap-5">
                
                {/* Visualizing Audio Input */}
                <div className='flex items-center gap-4 border border-neutral-800 bg-neutral-900 rounded-xl p-4'>
                    <div className="flex items-end gap-[3px] h-8 w-16">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className={`w-1 bg-emerald-500 rounded-full animate-sound`} style={{animationDelay: `${i * 0.1}s`}}></div>
                        ))}
                    </div>
                    <div>
                        <div className="font-mono text-xs text-neutral-400">{activeAnalysis.type}</div>
                        <div className="font-semibold text-white text-sm truncate">{activeAnalysis.action}</div>
                    </div>
                </div>

                {/* Progress Bar or Result */}
                {simulationState === 'processing' && (
                    <div className='space-y-2'>
                        <div className="flex justify-between text-xs font-mono text-neutral-500">
                            <span>Scanning Synthetic Artifacts...</span>
                            <span>{activeAnalysis.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 transition-all duration-300" style={{width: `${activeAnalysis.progress}%`}}></div>
                        </div>
                    </div>
                )}

                {simulationState === 'complete' && activeAnalysis.scores && (
                    <div className='space-y-5 animate-fadeIn'>
                        <div className='border border-red-900/50 bg-red-950/20 rounded-xl p-4 text-center'>
                            <div className='font-black text-6xl text-red-500'>{activeAnalysis.scores.synthetic}%</div>
                            <div className='text-sm font-bold text-red-300 mt-1'>Synthetic Media Probability</div>
                            <div className='text-xs font-mono text-red-400 mt-2 bg-red-950 px-3 py-1 inline-block rounded-md'>VERDICT: Block Action</div>
                        </div>
                        <div className='grid grid-cols-2 gap-3 text-center font-mono text-xs'>
                            <div className='bg-neutral-900 p-3 rounded-lg border border-neutral-800 text-emerald-400'>Natural: {activeAnalysis.scores.natural}%</div>
                            <div className='bg-neutral-900 p-3 rounded-lg border border-neutral-800 text-neutral-400'>Latency: {activeAnalysis.scores.latency}</div>
                        </div>
                    </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* --- RIGHT PANEL: VALIDATION LOGS --- */}
        <div className={`${styles.card} xl:col-span-2 flex flex-col`}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold tracking-tight text-white">Live Pre-Execution Logs</h2>
            <div className="flex gap-2">
                <div className={`${styles.statCard} items-center`}>
                    <div className='text-3xl font-black text-white'>{logs.length}</div>
                    <div className='text-xs text-neutral-500 uppercase tracking-wider'>Actions Validated</div>
                </div>
                <div className={`${styles.statCard} items-center`}>
                    <div className='text-3xl font-black text-red-500'>{logs.filter(l => l.risk === 'High').length}</div>
                    <div className='text-xs text-neutral-500 uppercase tracking-wider'>Threats Blocked</div>
                </div>
            </div>
          </div>

          <div className="space-y-4 overflow-y-auto pr-2 max-h-[600px] custom-scrollbar">
            {logs.map((log) => {
              const isBlocked = log.status.includes('Neutralized');
              return (
                <div 
                  key={log.id} 
                  className={`${styles.logItem} ${
                    isBlocked 
                      ? 'bg-red-950/10 border-red-900/50 hover:bg-red-950/20' 
                      : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex flex-col gap-3 flex-grow">
                    <div className="flex items-center gap-3">
                      <span className={`${styles.tag} ${isBlocked ? 'bg-red-950 text-red-400' : 'bg-neutral-800 text-neutral-300'}`}>
                        {log.type}
                      </span>
                      <span className={`${styles.tag} ${log.risk === 'High' ? 'text-red-400' : log.risk === 'Medium' ? 'text-amber-400' : 'text-emerald-400'}`}>
                        Risk: {log.risk}
                      </span>
                      <span className="font-mono text-xs text-neutral-600">ID: {log.id}</span>
                    </div>
                    
                    <div className="text-lg font-semibold text-white tracking-tight">{log.action}</div>
                    <div className={`font-mono text-sm ${isBlocked ? 'text-red-300' : 'text-neutral-400'}`}>
                      <span className='text-neutral-600'>Provenance:</span> {log.provenance}
                    </div>
                  </div>
                  
                  <div className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap ${
                    isBlocked ? 'bg-red-900/30 text-red-300' : 'bg-emerald-950/50 text-emerald-300'
                  }`}>
                    {log.status}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <footer className='mt-16 pt-8 border-t border-neutral-800 text-center text-neutral-600 text-xs font-mono'>
        SALUS DEMO CONCEPT // Designed for Provenance-Based Action Validation // v1.0
      </footer>
    </div>
  );
};

export default SalusPreExecutionDemo;