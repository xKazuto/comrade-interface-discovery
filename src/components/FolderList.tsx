
import React from 'react';
import { File, Folder, Lock, Unlock, AlertTriangle, Image as ImageIcon } from 'lucide-react';
import { Input } from "./ui/input";
import { FolderType, FileType } from '../types/terminal';

interface FolderListProps {
  folders: FolderType[];
  selectedFolder: FolderType | null;
  selectedFile: FileType | null;
  passwordInput: string;
  onFolderClick: (folder: FolderType) => void;
  onFileClick: (file: FileType) => void;
  onPasswordChange: (value: string) => void;
  onPasswordSubmit: (folder: FolderType) => void;
}

const FolderList = ({
  folders,
  selectedFolder,
  selectedFile,
  passwordInput,
  onFolderClick,
  onFileClick,
  onPasswordChange,
  onPasswordSubmit,
}: FolderListProps) => {
  return (
    <div className="space-y-2">
      {folders.map((folder) => (
        <div key={folder.name} className="space-y-1">
          <button
            onClick={() => onFolderClick(folder)}
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
                    onChange={(e) => onPasswordChange(e.target.value)}
                    placeholder="Enter password"
                    className="flex-1 h-8 bg-terminal text-terminal-foreground border-terminal-foreground"
                  />
                  <button
                    onClick={() => onPasswordSubmit(folder)}
                    className="px-2 py-1 border border-terminal-foreground hover:bg-terminal-foreground/10"
                  >
                    UNLOCK
                  </button>
                </div>
              ) : (
                folder.files.map((file) => (
                  <button
                    key={file.name}
                    onClick={() => onFileClick(file)}
                    className={`w-full text-left p-2 flex items-center hover:bg-terminal-foreground/10 ${
                      selectedFile?.name === file.name ? 'bg-terminal-foreground/20' : ''
                    }`}
                  >
                    {file.isCorrupted ? (
                      <AlertTriangle className="w-4 h-4 mr-2 text-red-500" />
                    ) : file.type === 'image' ? (
                      <ImageIcon className="w-4 h-4 mr-2" />
                    ) : (
                      <File className="w-4 h-4 mr-2" />
                    )}
                    {file.name}
                    {file.isCorrupted && (
                      <span className="ml-2 text-xs text-red-500">[CORRUPTED]</span>
                    )}
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FolderList;
