import { FolderType } from '../types/terminal';

export const folderStructure: FolderType[] = [
  {
    name: "CLASSIFIED",
    password: "7777",
    isLocked: true,
    files: [
      {
        name: 'PROJECT_NOTES.txt',
        content: 'CLASSIFIED INFORMATION:\nProject Status: ONGOING\nSecurity Level: TOP SECRET\nLast Update: 1992-06-15\n\nFurther details restricted.',
        type: 'text'
      },
      {
        name: 'SUBJECT_7.img',
        content: 'Loading image...',
        type: 'image',
        imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
        isCorrupted: true,
        originalContent: 'Loading image...'
      },
      {
        name: 'ENCRYPTED_DATA.txt',
        content: '[ENCRYPTED DATA]\n\nAccess denied. Decryption key required.\n\nWarning: Unauthorized access attempts will be logged.',
        originalContent: 'TOP SECRET - Project Sigma\n\nTest subjects showing unprecedented results.\nAnomaly containment: SUCCESSFUL\nNext phase: Ready to proceed\n\nNote: Maintain Level 5 clearance protocols at all times.',
        type: 'text',
        isEncrypted: true,
        decryptionKey: 'SIGMA-7'
      }
    ]
  },
  {
    name: "PUBLIC",
    files: [
      {
        name: 'LOG_1991.txt',
        content: 'System Log - 1991\nMultiple anomalies detected\nProject advancement: 67%\nRequiring immediate attention.',
        type: 'text'
      },
      {
        name: 'MANIFEST.txt',
        content: 'Equipment Manifest:\n- Spectrometer MK3\n- Containment Unit B7\n- [REDACTED]\n\nNote: All equipment must be properly decontaminated.',
        type: 'text'
      },
      {
        name: 'INCIDENT_REPORT.txt',
        isCorrupted: true,
        content: 'ERR0R: F1LE C0RRUPT3D\n\n@#$%^&* DATA INTEGRITY COMPROMISED *&^%$#@\n\nRecovery possible from ARCHIVE-SERVER-7\nContact Systems Administrator\nArchive Access Code: BACKUP-1991-07-23\n\n[REMAINING DATA UNREADABLE]',
        originalContent: 'INCIDENT REPORT - July 23, 1991\n\nCritical system failure in Sector 7\nUnauthorized access detected\nContainment protocols initiated\n\nCasualties: [REDACTED]\nStatus: Contained',
        type: 'text'
      }
    ]
  },
  {
    name: "ARCHIVES",
    password: "1991",
    isLocked: true,
    files: [
      {
        name: 'SYSTEM_BACKUP.txt',
        isCorrupted: true,
        content: 'C0RRUPT3D BACKUP F1LE\n\n<System Message: Local backup corrupted>\nAttempting remote connection...\nERROR: Cannot establish connection to ARCHIVE-SERVER-7\n\nTry: BACKUP-1991-07-23',
        originalContent: 'Full system backup completed\nDate: July 23, 1991\nEncryption: Active\nBackup Location: ARCHIVE-SERVER-7',
        type: 'text'
      }
    ]
  }
];
