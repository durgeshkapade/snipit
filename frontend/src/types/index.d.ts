export interface PasteData {
  id: string;
  content: string;
  createdAt: string;
  expiresAt: string;
}

export type IdType = "system" | "dynamic";
