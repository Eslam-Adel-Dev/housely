import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// images imports
import AmexLogo from "../assets/images/American-Express-logo.png";
import MastercardLogo from "../assets/images/Mastercard-Logo.png";
import VisaLogo from "../assets/images/Visa-Logo.png";
// types imports
import { Review } from "@/types/type";

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

//=============================================

export const formatCardNumber = (num: string) => {
  const clean = num.replace(/\D/g, "");
  const groups = clean.match(/.{1,4}/g);
  if (!groups) return "";
  return groups.join(" ").slice(0, 19);
};

//=============================================

export const formatExpiry = (expiry: string) => {
  const clean = expiry.replace(/\D/g, "");
  if (clean.length > 2) {
    return `${clean.slice(0, 2)}/${clean.slice(2, 4)}`;
  }
  return clean;
};

//=============================================

export const getCardLogo = (number: string) => {
  const cleanNum = number.replace(/\s/g, "");
  if (cleanNum.startsWith("4")) {
    return VisaLogo;
  }
  if (/^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)/.test(cleanNum)) {
    return MastercardLogo;
  }
  if (/^3[47]/.test(cleanNum)) {
    return AmexLogo;
  }
  return null;
};

