
export type FileType = {
  name: string;
  content: string;
  isCorrupted?: boolean;
  originalContent?: string;
  type?: 'text' | 'image';
  imageUrl?: string;
};

export type FolderType = {
  name: string;
  password?: string;
  files: FileType[];
  isLocked?: boolean;
};
