
import React, { useState, useRef, useEffect } from 'react';
import { Input } from "./ui/input";

interface CommandConsoleProps {
  onConnect: (code: string) => void;
  connected: boolean;
}

const CommandConsole = ({ onConnect, connected }: CommandConsoleProps) => {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<string[]>([
    'TERMINAL v1.991 READY',
    'Type "help" for available commands',
  ]);
  
  const consoleEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const processCommand = (command: string) => {
    const commandLower = command.toLowerCase().trim();
    
    let response: string[] = [];
    
    switch (commandLower) {
      case 'help':
        response = [
          'Available commands:',
          '  help          - Show this help message',
          '  clear         - Clear console',
          '  connect       - Attempt connection to ARCHIVE-SERVER-7',
          '  status        - Show connection status',
        ];
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'connect':
        response = ['Usage: connect <backup-code>'];
        break;
      case 'status':
        response = [
          'System Status:',
          `Connection to ARCHIVE-SERVER-7: ${connected ? 'ESTABLISHED' : 'DISCONNECTED'}`,
          'Corrupted files detected: 2',
        ];
        break;
      default:
        if (commandLower.startsWith('connect ')) {
          const code = command.split(' ')[1];
          onConnect(code);
          return;
        }
        response = [`Unknown command: ${command}`];
    }
    
    setHistory(prev => [...prev, `> ${command}`, ...response]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    processCommand(input);
    setInput('');
  };

  return (
    <div className="border border-terminal-foreground p-4 bg-black/50">
      <div className="mb-4">
        <h2 className="text-lg terminal-text mb-2">SYSTEM CONSOLE</h2>
      </div>
      <div 
        className="h-64 overflow-y-auto mb-4 font-mono text-sm whitespace-pre-wrap terminal-text"
        style={{ scrollBehavior: 'smooth' }}
      >
        {history.map((line, i) => (
          <div key={i} className={`mb-1 ${line.startsWith('>') ? 'text-green-500' : ''}`}>
            {line}
          </div>
        ))}
        <div ref={consoleEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-black/50 border-terminal-foreground text-terminal-foreground font-mono"
          placeholder="Enter command..."
          spellCheck={false}
        />
      </form>
    </div>
  );
};

export default CommandConsole;
