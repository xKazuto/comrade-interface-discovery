
import React, { useState, useCallback } from 'react';
import { TerminalIcon } from 'lucide-react';
import { toast } from "./ui/use-toast";
import CommandConsole from './CommandConsole';
import FileViewer from './FileViewer';
import FolderList from './FolderList';
import { folderStructure } from '../data/folderStructure';
import { FileType, FolderType } from '../types/terminal';

const Terminal = () => {
  const [selectedFolder, setSelectedFolder] = useState<FolderType | null>(null);
  const [selectedFile, setSelectedFile] = useState<FileType | null>(null);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [folders, setFolders] = useState<FolderType[]>(folderStructure);
  const [isConnected, setIsConnected] = useState(false);
  const [showConsole, setShowConsole] = useState(false);

  const handleFolderClick = useCallback((folder: FolderType) => {
    setSelectedFolder(folder);
    setSelectedFile(null);
  }, []);

  const handleFileClick = useCallback((file: FileType) => {
    setSelectedFile(file);
    if (file.isCorrupted) {
      toast({
        title: "File Corrupted",
        description: "This file appears to be corrupted. Recovery might be possible through the archive server.",
        variant: "destructive",
      });
    }
  }, []);

  const handlePasswordSubmit = useCallback((folder: FolderType) => {
    if (passwordInput === folder.password) {
      setFolders(prevFolders => 
        prevFolders.map(f => 
          f.name === folder.name ? { ...f, isLocked: false } : f
        )
      );
      setPasswordInput("");
      toast({
        title: "Access Granted",
        description: `Folder ${folder.name} unlocked`,
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password",
        variant: "destructive",
      });
    }
  }, [passwordInput]);

  const handleConnect = useCallback((code: string) => {
    if (code === "BACKUP-1991-07-23") {
      setIsConnected(true);
      toast({
        title: "Connection Established",
        description: "Successfully connected to ARCHIVE-SERVER-7",
      });

      setFolders(prevFolders => 
        prevFolders.map(folder => ({
          ...folder,
          files: folder.files.map(file => ({
            ...file,
            content: file.isCorrupted && file.originalContent ? file.originalContent : file.content,
            isCorrupted: false,
          }))
        }))
      );
    } else {
      toast({
        title: "Connection Failed",
        description: "Invalid backup code",
        variant: "destructive",
      });
    }
  }, []);

  const activateDebugMode = () => {
    setShowConsole(true);
    toast({
      title: "Debug Mode Activated",
      description: "System console enabled",
    });
  };

  return (
    <div className="terminal-container min-h-screen bg-terminal text-terminal-foreground p-8">
      <div className="scan-line" />
      <div className="relative z-10">
        {/* CRT screen effect overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.5))]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMjIyIj48L3JlY3Q+Cjwvc3ZnPg==')] opacity-10" />
        </div>

        <div className="grid grid-cols-[300px_1fr] gap-8 max-w-6xl mx-auto backdrop-blur-[1px]">
          <div className="space-y-8">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={activateDebugMode}
                className="flex items-center gap-2 px-3 py-1 border border-terminal-foreground/30 hover:bg-terminal-foreground/10 transition-colors terminal-text group relative"
                title="Activate Debug Mode"
              >
                <div className="absolute inset-0 bg-terminal-foreground/5 group-hover:bg-terminal-foreground/10 transition-colors" />
                <TerminalIcon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">DEBUG</span>
              </button>
            </div>
            <div className="border border-terminal-foreground/30 bg-black/40 backdrop-blur-sm p-4 relative">
              <div className="absolute inset-0 bg-terminal-foreground/5" />
              <div className="relative z-10">
                <div className="mb-4">
                  <h2 className="text-lg terminal-text mb-2 flex items-center tracking-wider">SYSTEM FILES</h2>
                </div>
                <FolderList
                  folders={folders}
                  selectedFolder={selectedFolder}
                  selectedFile={selectedFile}
                  passwordInput={passwordInput}
                  onFolderClick={handleFolderClick}
                  onFileClick={handleFileClick}
                  onPasswordChange={setPasswordInput}
                  onPasswordSubmit={handlePasswordSubmit}
                />
              </div>
            </div>
            {showConsole && (
              <div className="relative">
                <div className="absolute -inset-px bg-terminal-foreground/20 blur-sm" />
                <div className="relative">
                  <CommandConsole onConnect={handleConnect} connected={isConnected} />
                </div>
              </div>
            )}
          </div>
          <div className="border border-terminal-foreground/30 bg-black/40 backdrop-blur-sm p-4 relative min-h-[600px]">
            <div className="absolute inset-0 bg-terminal-foreground/5" />
            <div className="relative z-10">
              <FileViewer selectedFile={selectedFile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
