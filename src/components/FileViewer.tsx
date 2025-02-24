
import React, { useState } from 'react';
import { AlertTriangle, Lock } from 'lucide-react';
import { toast } from "./ui/use-toast";
import { FileType } from '../types/terminal';
import { Input } from "./ui/input";

interface FileViewerProps {
  selectedFile: FileType | null;
}

const FileViewer = ({ selectedFile }: FileViewerProps) => {
  const [decryptionKey, setDecryptionKey] = useState('');
  const [isDecrypted, setIsDecrypted] = useState(false);

  if (!selectedFile) {
    return (
      <div className="border border-terminal-foreground p-4">
        <div className="mb-4">
          <h2 className="text-lg terminal-text mb-2 flex items-center">
            NO FILE SELECTED
          </h2>
        </div>
        <div className="font-mono whitespace-pre-wrap terminal-text">
          SELECT A FILE TO VIEW CONTENTS
        </div>
      </div>
    );
  }

  const handleDecrypt = () => {
    if (decryptionKey === selectedFile.decryptionKey) {
      setIsDecrypted(true);
      toast({
        title: "Decryption Successful",
        description: "File contents decrypted",
      });
    } else {
      toast({
        title: "Decryption Failed",
        description: "Invalid decryption key",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="border border-terminal-foreground p-4">
      <div className="mb-4">
        <h2 className="text-lg terminal-text mb-2 flex items-center">
          {selectedFile.name}
          {selectedFile.isCorrupted && (
            <span className="ml-2 text-red-500 flex items-center">
              <AlertTriangle className="w-4 h-4 mr-1" />
              CORRUPTED
            </span>
          )}
          {selectedFile.isEncrypted && !isDecrypted && (
            <span className="ml-2 text-yellow-500 flex items-center">
              <Lock className="w-4 h-4 mr-1" />
              ENCRYPTED
            </span>
          )}
        </h2>
      </div>
      {selectedFile.isEncrypted && !isDecrypted ? (
        <div className="space-y-4">
          <div className="font-mono whitespace-pre-wrap terminal-text">
            {selectedFile.content}
          </div>
          <div className="flex space-x-2">
            <Input
              type="password"
              value={decryptionKey}
              onChange={(e) => setDecryptionKey(e.target.value)}
              placeholder="Enter decryption key"
              className="flex-1 bg-terminal text-terminal-foreground border-terminal-foreground"
            />
            <button
              onClick={handleDecrypt}
              className="px-4 py-2 border border-terminal-foreground hover:bg-terminal-foreground/10"
            >
              DECRYPT
            </button>
          </div>
        </div>
      ) : (
        <div className={`font-mono whitespace-pre-wrap terminal-text ${
          selectedFile.isCorrupted ? 'text-red-500' : ''
        }`}>
          {selectedFile.type === 'image' ? (
            <div className="relative">
              <img
                src={selectedFile.imageUrl}
                alt={selectedFile.name}
                className={`max-w-full h-auto ${selectedFile.isCorrupted ? 'opacity-50 grayscale' : ''}`}
                onError={(e) => {
                  e.currentTarget.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                  toast({
                    title: "Image Load Error",
                    description: "Failed to load image file",
                    variant: "destructive",
                  });
                }}
              />
              {selectedFile.isCorrupted && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <span className="text-red-500 font-bold">CORRUPTED IMAGE FILE</span>
                </div>
              )}
            </div>
          ) : (
            selectedFile.isEncrypted && isDecrypted ? selectedFile.originalContent : selectedFile.content
          )}
        </div>
      )}
    </div>
  );
};

export default FileViewer;
