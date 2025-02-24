
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { toast } from "./ui/use-toast";
import { FileType } from '../types/terminal';

interface FileViewerProps {
  selectedFile: FileType | null;
}

const FileViewer = ({ selectedFile }: FileViewerProps) => {
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
        </h2>
      </div>
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
          selectedFile.content
        )}
      </div>
    </div>
  );
};

export default FileViewer;
