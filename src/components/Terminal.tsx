
import React, { useState, useCallback } from 'react';
import { File, Folder, Lock, Unlock } from 'lucide-react';
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";

type FileType = {
  name: string;
  content: string;
};

type FolderType = {
  name: string;
  password?: string;
  files: FileType[];
  isLocked?: boolean;
};

const folderStructure: FolderType[] = [
  {
    name: "CLASSIFIED",
    password: "7777",
    isLocked: true,
    files: [
      {
        name: 'PROJECT_NOTES.txt',
        content: 'CLASSIFIED INFORMATION:\nProject Status: ONGOING\nSecurity Level: TOP SECRET\nLast Update: 1992-06-15\n\nFurther details restricted.'
      }
    ]
  },
  {
    name: "PUBLIC",
    files: [
      {
        name: 'LOG_1991.txt',
        content: 'System Log - 1991\nMultiple anomalies detected\nProject advancement: 67%\nRequiring immediate attention.'
      },
      {
        name: 'MANIFEST.txt',
        content: 'Equipment Manifest:\n- Spectrometer MK3\n- Containment Unit B7\n- [REDACTED]\n\nNote: All equipment must be properly decontaminated.'
      }
    ]
  }
];

const Terminal = () => {
  const [selectedFolder, setSelectedFolder] = useState<FolderType | null>(null);
  const [selectedFile, setSelectedFile] = useState<FileType | null>(null);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [folders, setFolders] = useState<FolderType[]>(folderStructure);

  // Memoized handlers to prevent unnecessary re-renders
  const handleFolderClick = useCallback((folder: FolderType) => {
    setSelectedFolder(folder);
    setSelectedFile(null);
  }, []);

  const handleFileClick = useCallback((file: FileType) => {
    setSelectedFile(file);
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

  return (
    <div className="terminal-container min-h-screen bg-terminal text-terminal-foreground p-8">
      <div className="scan-line" />
      <div className="grid grid-cols-[300px_1fr] gap-8 max-w-6xl mx-auto">
        <div className="border border-terminal-foreground p-4">
          <div className="mb-4">
            <h2 className="text-lg terminal-text mb-2 flex items-center">
              <Folder className="w-4 h-4 mr-2" />
              SYSTEM FILES
            </h2>
          </div>
          <div className="space-y-2">
            {folders.map((folder) => (
              <div key={folder.name} className="space-y-1">
                <button
                  onClick={() => handleFolderClick(folder)}
                  className={`w-full text-left p-2 flex items-center hover:bg-terminal-foreground/10 ${
                    selectedFolder?.name === folder.name ? 'bg-terminal-foreground/20' : ''
                  }`}
                >
                  {folder.password ? (
                    folder.isLocked ? <Lock className="w-4 h-4 mr-2" /> : <Unlock className="w-4 h-4 mr-2" />
                  ) : (
                    <Folder className="w-4 h-4 mr-2" />
                  )}
                  {folder.name}
                </button>
                {selectedFolder?.name === folder.name && (
                  <div className="pl-6 space-y-1">
                    {folder.isLocked && folder.password ? (
                      <div className="flex space-x-2 p-2">
                        <Input
                          type="password"
                          value={passwordInput}
                          onChange={(e) => setPasswordInput(e.target.value)}
                          placeholder="Enter password"
                          className="flex-1 h-8 bg-terminal text-terminal-foreground border-terminal-foreground"
                        />
                        <button
                          onClick={() => handlePasswordSubmit(folder)}
                          className="px-2 py-1 border border-terminal-foreground hover:bg-terminal-foreground/10"
                        >
                          UNLOCK
                        </button>
                      </div>
                    ) : (
                      folder.files.map((file) => (
                        <button
                          key={file.name}
                          onClick={() => handleFileClick(file)}
                          className={`w-full text-left p-2 flex items-center hover:bg-terminal-foreground/10 ${
                            selectedFile?.name === file.name ? 'bg-terminal-foreground/20' : ''
                          }`}
                        >
                          <File className="w-4 h-4 mr-2" />
                          {file.name}
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="border border-terminal-foreground p-4">
          <div className="mb-4">
            <h2 className="text-lg terminal-text mb-2">
              {selectedFile?.name || 'NO FILE SELECTED'}
            </h2>
          </div>
          <div className="font-mono whitespace-pre-wrap terminal-text">
            {selectedFile ? selectedFile.content : 'SELECT A FILE TO VIEW CONTENTS'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
