// lib/utils.ts
import { Review } from "@/types/type";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//=============================================

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//=============================================

export const avgPropertyRatingFunction = (arr: Review[]) => {
  if (arr.length === 0) return 0;
  const avgRating =
    arr.reduce((a: number, b: Review) => a + b.rating, 0) / arr.length;
  const rate = Number(avgRating.toFixed(1));
  return rate;
};

//=============================================

export const formatChatTime = (messageTime: string | number | Date): string => {
  const date = new Date(messageTime);
  const today = new Date();
  const isToday = date.toDateString() === today.toDateString();

  const currentFormattedTime =
    date.toLocaleTimeString([], { hour12: true }).slice(0, 4) +
    date.toLocaleTimeString([], { hour12: true }).slice(7, 10);

  return isToday
    ? currentFormattedTime
    : `${date.toLocaleDateString()} ${currentFormattedTime}`;
};
