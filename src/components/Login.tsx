
import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded credentials for the ARG
    if (username === 'ADMIN' && password === 'SECTOR7') {
      onLogin();
    } else {
      setError('ACCESS DENIED');
      setTimeout(() => setError(''), 2000);
    }
  };

  return (
    <div className="terminal-container min-h-screen bg-terminal text-terminal-foreground p-8">
      <div className="scan-line" />
      <div className="max-w-md mx-auto mt-20">
        <div className="flex items-center justify-center mb-8">
          <Terminal className="w-12 h-12 terminal-glow" />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-2xl terminal-text mb-2">RESTRICTED ACCESS</h1>
          <p className="text-sm opacity-70">SECURITY CLEARANCE REQUIRED</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value.toUpperCase())}
              className="w-full bg-transparent border border-terminal-foreground p-3 terminal-text focus:outline-none focus:ring-1 focus:ring-terminal-foreground"
              placeholder="USERNAME"
              autoComplete="off"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value.toUpperCase())}
              className="w-full bg-transparent border border-terminal-foreground p-3 terminal-text focus:outline-none focus:ring-1 focus:ring-terminal-foreground"
              placeholder="PASSWORD"
              autoComplete="off"
            />
          </div>
          {error && (
            <div className="text-destructive text-center terminal-glow">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full border border-terminal-foreground p-3 terminal-text hover:bg-terminal-foreground hover:text-terminal transition-colors"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
