
import React, { useState } from 'react';
import { File, Folder } from 'lucide-react';

const files = {
  'PROJECT_NOTES.txt': 'CLASSIFIED INFORMATION:\nProject Status: ONGOING\nSecurity Level: TOP SECRET\nLast Update: 1992-06-15\n\nFurther details restricted.',
  'LOG_1991.txt': 'System Log - 1991\nMultiple anomalies detected\nProject advancement: 67%\nRequiring immediate attention.',
  'MANIFEST.txt': 'Equipment Manifest:\n- Spectrometer MK3\n- Containment Unit B7\n- [REDACTED]\n\nNote: All equipment must be properly decontaminated.',
};

const Terminal = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

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
            {Object.keys(files).map((fileName) => (
              <button
                key={fileName}
                onClick={() => setSelectedFile(fileName)}
                className={`w-full text-left p-2 flex items-center hover:bg-terminal-foreground/10 ${
                  selectedFile === fileName ? 'bg-terminal-foreground/20' : ''
                }`}
              >
                <File className="w-4 h-4 mr-2" />
                {fileName}
              </button>
            ))}
          </div>
        </div>
        <div className="border border-terminal-foreground p-4">
          <div className="mb-4">
            <h2 className="text-lg terminal-text mb-2">
              {selectedFile || 'NO FILE SELECTED'}
            </h2>
          </div>
          <div className="font-mono whitespace-pre-wrap terminal-text">
            {selectedFile ? files[selectedFile as keyof typeof files] : 'SELECT A FILE TO VIEW CONTENTS'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
