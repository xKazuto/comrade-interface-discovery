import { FolderType } from '../types/terminal';

export const folderStructure: FolderType[] = [
  {
    name: "CLASSIFIED",
    password: "7777",
    isLocked: true,
    files: [
      {
        name: 'OTP Protocol',
        content: 'One Time Pad Protocol\n\nUse table CT-37c as provided the table itself is NOT classified\n\nTo Decode\nTake the encoded message \n01824 54360 93990 97928 99113 79749 15983 5432\n\nFind the One Time Pad with the matching code block\n\n01824 13278 46048 42098 39256 28289 23434 98696\n81482 21395 87397 65302 14165 13905 22280 38657\n40495 76237 88907 13478 83563 36062 95181 81426\n64987 38893 68878 87236 46463 10851 30926 65392\n\nCopy as many of the blocks as are needed for the whole message length\n54360 93990 97928 99113 79749 15983 54\n13278 46048 42098 39256 28289 23434 98696\n\nAdd the original message values to the OTP values vertically if the result is over 10 subtract 10 eg 15 = 5\n    54360 93990 97928 99113 79749 15983 5432\n   +13278 46048 42098 39256 28289 23434 9869\n   =67538 39938 39916 28369 97928 38317 4291 \n\nDerive the letters from the numbers using table CT-37c\n6 75 3 83 99 3 83 99 1 6 2 83 6 99 79 2 83 83 1 74 2 91\nT H  I S     I S     A T E S  T    M  E S  S  A G  E .\n\nThe result\nTHIS IS A TEST MESSAGE.',
        type: 'text'
      },
      {
        name: 'CT-37c',
        content: 'Loading image...',
        type: 'image',
        imageUrl: 'https://cdn.discordapp.com/attachments/992004895488102430/1343652091004063796/image.png?ex=67be0d06&is=67bcbb86&hm=83469a4ae3b6a2fc5b6d334c87753b535ca989e11c16b1db144d43da9ce45aea&',
        originalContent: 'Loading image...'
      },
      {
        name: 'SUBJECT_7',
        content: 'Loading image...',
        type: 'image',
        imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
        corruptedImageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
        isCorrupted: true,
        originalContent: 'Loading image...'
      },
      {
        name: 'ENCRYPTED_DATA',
        content: '[ENCRYPTED DATA]\n\nAccess denied. Decryption key required.\n\nWarning: Unauthorized access attempts will be logged.',
        originalContent: 'TOP SECRET - Project Sigma\n\nTest subjects showing unprecedented results.\nAnomaly containment: SUCCESSFUL\nNext phase: Ready to proceed\n\nNote: Maintain Level 5 clearance protocols at all times.',
        type: 'text',
        isEncrypted: true,
        decryptionKey: 'SIGMA-7'
      },
      {
        name: 'CLASSIFIED_IMAGE',
        content: 'Loading image...',
        type: 'image',
        imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
        encryptedImageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
        isEncrypted: true,
        decryptionKey: 'IMAGE-7'
      },
      {
        name: 'INCIDENT_REPORT.txt',
        isCorrupted: true,
        content: 'ERR0R: F1LE C0RRUPT3D\n\n@#$%^&* DATA INTEGRITY COMPROMISED *&^%$#@\n\nRecovery possible from X-8 ARCHIVE\nContact Systems Administrator\nArchive Access adress: 146.66.81.38:23\n\n[REMAINING DATA UNREADABLE]',
        originalContent: 'INCIDENT REPORT - July 23, 1991\n\nCritical system failure in Sector 7\nUnauthorized access detected\nContainment protocols initiated\n\nCasualties: [REDACTED]\nStatus: Contained',
        type: 'text'
      }
    ]
  },
  {
    name: "PUBLIC",
    files: [
      {
        name: 'MEMO TO TECHNICIAN PETROV',
        content: 'To: Viktor Petrov\nFrom: Kollia Vishkov, On-Site Supervisor\nSubject: STOP CRASHING THE BACKUP SERVER WITH YOUR DAMN STORIES\n\nViktor,\n\nFor the last time—STOP uploading your ridiculous, bloated, completely fictional nonsense to the backup server. It’s there to store critical data, not your never-ending saga of space wizards, vampire accountants, or whatever nonsense you’ve come up with this week.\n\nYou’ve crashed the system AGAIN. That’s the THIRD time this month. Because of you, real work was lost, backups failed, and IT is once again demanding overtime to clean up your mess.\n\nHow many times do I have to say this? The backup server is for BUSINESS-CRITICAL FILES—not your 800-page monstrosities that no one asked for! If you want to write a novel, get a personal hard drive, a notebook, or hell, carve it into stone for all I care—just KEEP IT OFF THE BACKUP SERVER.\n\nThanks to this, the server is now only responding to Telnet connections.\n\nKollia Vishkov\nOn-Site Supervisor',
        type: 'text'
      },
      {
        name: 'MANIFEST',
        content: 'Equipment Manifest:\n- Spectrometer MK3\n- Containment Unit B7\n- [REDACTED]\n\nNote: All equipment must be properly decontaminated.',
        type: 'text'
      }
    ]
  },
  {
    name: "ARCHIVES",
    password: "VBUOREIBGVUOIgierwbg!",
    isLocked: true,
    files: [
      {
        name: 'SYSTEM_BACKUP.txt',
        isCorrupted: true,
        content: 'C0RRUPT3D BACKUP F1LE\n\n<System Message: Local backup corrupted>\nAttempting remote connection...\nERROR: Cannot establish connection to X-8 ARCHIVE\n\nTry: BACKUP-1991-07-23',
        originalContent: 'Full system backup completed\nDate: July 23, 1991\nEncryption: Active\nBackup Location: X-8 ARCHIVE',
        type: 'text'
      },
      {
        name: 'ENCRYPTED_DATA.txt',
        content: '[ENCRYPTED DATA]\n\nAccess denied. Decryption key required.\n\nWarning: Unauthorized access attempts will be logged.',
        originalContent: 'TOP SECRET - Project Sigma\n\nTest subjects showing unprecedented results.\nAnomaly containment: SUCCESSFUL\nNext phase: Ready to proceed\n\nNote: Maintain Level 5 clearance protocols at all times.',
        type: 'text',
        isEncrypted: true,
        decryptionKey: 'SIGMA-7'
      },
      {
        name: 'CLASSIFIED_IMAGE.img',
        content: 'Loading image...',
        type: 'image',
        imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
        encryptedImageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
        isEncrypted: true,
        decryptionKey: 'IMAGE-7'
      }
    ]
  }
];
