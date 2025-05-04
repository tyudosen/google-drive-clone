export interface Folder {
  id: string;
  name: string;
  itemCount: number;
  modifiedAt: string;
}

export interface File {
  id: string;
  name: string;
  type: "folder" | "document" | "image" | "spreadsheet" | "code" | "other";
  size: number;
  owner: string;
  modifiedAt: string;
  itemCount?: number;
  shared?: boolean;
  starred?: boolean;
}
