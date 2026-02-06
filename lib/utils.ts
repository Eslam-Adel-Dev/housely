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
