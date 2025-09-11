import type { PasteData } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function saveToLocal(pasteData: PasteData) {
  const { id, content, createdAt } = pasteData;

  const key = "items";

  const stored = localStorage.getItem(key);
  const items = stored ? JSON.parse(stored) : [];

  const index = items.findIndex((item: PasteData) => item.id === id);

  if (index !== -1) items[index].content = content;
  else items.push({ id, content, createdAt });

  localStorage.setItem(key, JSON.stringify(items));
}

export const timeAgo = (timestamp: string): string => {
  const seconds = Math.floor(
    (new Date().getTime() - new Date(timestamp).getTime()) / 1000,
  );
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) return `${interval} years ago`;

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return `${interval} months ago`;

  interval = Math.floor(seconds / 86400);
  if (interval > 1) return `${interval} days ago`;

  interval = Math.floor(seconds / 3600);
  if (interval > 1) return `${interval} hours ago`;

  interval = Math.floor(seconds / 60);
  if (interval > 1) return `${interval} minutes ago`;

  return "Just now";
};
