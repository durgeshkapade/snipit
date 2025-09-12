import type { PasteData } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function saveToLocal(pasteData: PasteData) {
  const { id, content, createdAt, expiresAt }: PasteData = pasteData;

  const key = "items";

  const stored = localStorage.getItem(key);
  const items = stored ? JSON.parse(stored) : [];

  const index = items.findIndex((item: PasteData) => item.id === id);

  if (index !== -1) items[index].content = content;
  else items.push({ id, content, createdAt, expiresAt });

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

export function getTimeRemaining(isoString: string) {
  const expiryDate = new Date(isoString);
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const timeDifference = expiryDate.getTime() - currentDate.getTime();

  // If the date has already passed, return an empty string or a message
  if (timeDifference <= 0) {
    return "Expired";
  }

  // Calculate time components
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30.44); // Average number of days per month
  const years = Math.floor(months / 12);

  // Calculate the remainder for each unit
  const remainingMonths = months % 12;
  const remainingDays = Math.floor(days % 30.44);
  const remainingHours = hours % 24;

  // Build the output string
  let result = "";
  if (years > 0) {
    result += `${years} year${years > 1 ? "s" : ""} `;
  }
  if (remainingMonths > 0) {
    result += `${remainingMonths} month${remainingMonths > 1 ? "s" : ""} `;
  }
  if (remainingDays > 0) {
    result += `${remainingDays} day${remainingDays > 1 ? "s" : ""} `;
  }
  if (remainingHours > 0) {
    result += `${remainingHours} hour${remainingHours > 1 ? "s" : ""} `;
  }

  return result.trim();
}
