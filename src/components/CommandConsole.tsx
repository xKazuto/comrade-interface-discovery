
import React, { useState, useRef, useEffect } from 'react';
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";

interface CommandConsoleProps {
  onConnect: (code: string) => void;
  connected: boolean;
}

const CommandConsole = ({ onConnect, connected }: CommandConsoleProps) => {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<string[]>([
    'DEBUG MODE ACTIVATED',
    'SECURITY ALERT: Multiple failed login attempts detected',
    'System locked - Recovery key required',
    'Type "help" for available commands',
  ]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [failedAttempts] = useState(5);
  const [recoveryMode, setRecoveryMode] = useState(true);
  
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
    
    if (!isAuthenticated && !recoveryMode) {
      if (commandLower.startsWith('login ')) {
        const credentials = command.split(' ')[1];
        if (credentials === "sysadmin:9264") {
          setIsAuthenticated(true);
          response = [
            'Authentication successful',
            'Welcome, System Administrator',
            'Type "help" for available commands'
          ];
        } else {
          response = [
            'Access denied: Invalid credentials',
            `Warning: System locked after ${failedAttempts} failed attempts`,
            'Recovery key required - Check secure off-site server'
          ];
          setRecoveryMode(true);
        }
      } else {
        response = ['Error: Authentication required', 'Usage: login <username:password>'];
      }
    } else if (recoveryMode) {
      if (commandLower.startsWith('recover ')) {
        const key = command.split(' ')[1];
        if (key === "SIGMA-PROTOCOL-7") {
          setRecoveryMode(false);
          setIsAuthenticated(true);
          response = [
            'Recovery successful',
            'Security lockout cleared',
            'Welcome, System Administrator',
            'Type "help" for available commands'
          ];
        } else {
          response = [
            'Invalid recovery key',
            'Please obtain valid key from secure off-site server'
          ];
        }
      } else if (commandLower === 'help') {
        response = [
          'SYSTEM LOCKED - Recovery required',
          'Available commands:',
          '  help              - Show this help message',
          '  recover <key>     - Attempt system recovery',
          '  status            - Show system status'
        ];
      } else if (commandLower === 'status') {
        response = [
          'System Status:',
          'CRITICAL: Security lockout active',
          `Failed login attempts: ${failedAttempts}`,
          'Recovery key required',
          'Access to archive server blocked'
        ];
      } else {
        response = ['System locked - Use "recover <key>" to unlock'];
      }
    } else {
      switch (commandLower) {
        case 'help':
          response = [
            'Available commands:',
            '  help          - Show this help message',
            '  clear         - Clear console',
            '  connect       - Attempt connection to ARCHIVE-SERVER-7',
            '  status        - Show connection status',
            '  logout        - End administrator session'
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
            'Debug Mode: ACTIVE',
            'Administrator: AUTHENTICATED',
            'Corrupted files detected: 2',
          ];
          break;
        case 'logout':
          setIsAuthenticated(false);
          response = [
            'Administrator session terminated',
            'Login required for system access'
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
        <h2 className="text-lg terminal-text mb-2">SYSTEM CONSOLE {recoveryMode && "- LOCKED"}</h2>
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
          placeholder={recoveryMode ? "Enter recovery key..." : isAuthenticated ? "Enter command..." : "Login required..."}
          spellCheck={false}
        />
      </form>
    </div>
  );
};

export default CommandConsole;
