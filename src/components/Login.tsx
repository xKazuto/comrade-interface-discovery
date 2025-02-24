
import React, { useState } from 'react';
import { Terminal, AlertTriangle } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '09051945') {
      onLogin();
    } else {
      setError('ACCESS DENIED');
      setTimeout(() => setError(''), 2000);
    }
  };

  return (
    <div className="terminal-container min-h-screen bg-terminal text-terminal-foreground p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.5))] z-0" />
      <div className="scan-line" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMjIyIj48L3JlY3Q+Cjwvc3ZnPg==')] opacity-10" />
      
      <div className="max-w-md mx-auto mt-20 relative z-10">
        <div className="border-2 border-terminal-foreground/30 bg-black/40 backdrop-blur-sm p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Terminal className="w-16 h-16 terminal-glow opacity-80" />
              <div className="absolute -inset-1 bg-terminal-foreground/20 blur-lg -z-10" />
            </div>
          </div>
          
          <div className="text-center mb-8 space-y-2">
            <div className="inline-block border border-terminal-foreground/30 px-4 py-2 bg-black/40">
              <h1 className="text-2xl terminal-text tracking-wider">X-LAB TERMINAL</h1>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm opacity-70">
              <AlertTriangle className="w-4 h-4" />
              <p>SECURITY CLEARANCE REQUIRED</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="text-xs opacity-70 block">SECURITY KEY</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value.toUpperCase())}
                className="w-full bg-black/50 border border-terminal-foreground/30 p-3 terminal-text focus:outline-none focus:border-terminal-foreground/60 focus:ring-1 focus:ring-terminal-foreground/60"
                placeholder="SECURITY KEY"
                autoComplete="off"
              />
            </div>

            {error && (
              <div className="text-destructive text-center terminal-glow flex items-center justify-center space-x-2">
                <AlertTriangle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full border border-terminal-foreground p-3 terminal-text hover:bg-terminal-foreground/10 transition-colors relative group"
            >
              <span className="absolute inset-0 bg-terminal-foreground/5 group-hover:bg-terminal-foreground/10 transition-colors" />
              <span className="relative">AUTHENTICATE</span>
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs opacity-50">ПРИПЯТЬ RESEARCH FACILITY - 1991</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
