import type { PasteData } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function saveToLocal(pasteData: PasteData) {
  const { id, content } = pasteData;

  const key = "items";

  const stored = localStorage.getItem(key);
  const items = stored ? JSON.parse(stored) : [];

  const index = items.findIndex((item: PasteData) => item.id === id);

  if (index !== -1) items[index].content = content;
  else items.push({ id, content });

  localStorage.setItem(key, JSON.stringify(items));
}
