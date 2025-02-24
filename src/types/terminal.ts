
export type FileType = {
  name: string;
  content: string;
  isCorrupted?: boolean;
  isEncrypted?: boolean;
  decryptionKey?: string;
  originalContent?: string;
  type?: 'text' | 'image';
  imageUrl?: string;
  corruptedImageUrl?: string;
  encryptedImageUrl?: string;
};

export type FolderType = {
  name: string;
  password?: string;
  files: FileType[];
  isLocked?: boolean;
};
