
import React from 'react';
import { useParakeet } from './hooks/useParakeet';
import { ControlButton } from './components/ControlButton';
import { Transcription } from './components/Transcription';
import { Visualizer } from './components/Visualizer';
import { Status } from './types';

const StatusIndicator: React.FC<{ status: Status, error: string | null }> = ({ status, error }) => {
    let text = '';
    let color = 'text-slate-400';

    switch (status) {
        case Status.IDLE:
            text = "Ready to talk. Press the button to start.";
            break;
        case Status.LISTENING:
            text = "Listening...";
            color = 'text-cyan-400';
            break;
        case Status.THINKING:
            text = "Thinking...";
            color = 'text-amber-400';
            break;
        case Status.SPEAKING:
            text = "Speaking...";
            color = 'text-emerald-400';
            break;
        case Status.ERROR:
            text = error || "An error occurred. Please try again.";
            color = 'text-red-500';
            break;
    }

    return (
        <div className="h-10 flex items-center justify-center">
            <p className={`text-center text-lg transition-colors duration-300 ${color}`}>{text}</p>
        </div>
    );
};

const App: React.FC = () => {
  const { 
      status, 
      transcriptionHistory, 
      interimTranscription,
      error, 
      analyserNode, 
      startConversation, 
      stopConversation 
    } = useParakeet();

  return (
    <div className="flex flex-col h-screen bg-slate-900 font-sans">
      <header className="p-4 text-center">
        <h1 className="text-4xl font-bold text-slate-100">
            Parakeet <span className="text-cyan-400">AI</span>
        </h1>
        <p className="text-slate-400">Your real-time voice assistant</p>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-between overflow-hidden">
        <Transcription history={transcriptionHistory} interimText={interimTranscription} />
        
        <div className="w-full h-36 flex items-center justify-center">
            {status !== Status.IDLE && status !== Status.ERROR && (
                <Visualizer analyserNode={analyserNode} status={status} />
            )}
        </div>
      </main>

      <footer className="w-full flex flex-col items-center justify-center p-6 bg-slate-900/80 backdrop-blur-sm">
        <StatusIndicator status={status} error={error} />
        <div className="mt-4">
            <ControlButton status={status} onStart={startConversation} onStop={stopConversation} />
        </div>
      </footer>
    </div>
  );
};

export default App;
