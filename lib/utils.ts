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

//=============================================

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDateRange = (startDate: string, endDate: string) => {
  if (!startDate) return "Select Date";
  const start = new Date(startDate);
  const startStr = `${months[start.getMonth()]} ${start.getDate()}`;
  if (!endDate) return startStr;
  const end = new Date(endDate);
  const endStr = `${months[end.getMonth()]} ${end.getDate()}`;
  return `${startStr} - ${endStr}`;
};

//=============================================

export const maskCardNumber = (number: string) => {
  const cleanNum = number.replace(/\D/g, "");
  if (cleanNum.length < 4) return "None";
  const last4 = cleanNum.slice(-4);
  return `**** **** **** ${last4}`;
};

//=============================================

export const calculateTotalPrice = (price: number, tax: number) => {
  return price + price * (tax / 100);
};

//=============================================

export const calculateRentTime = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  // Add 1 day to make the range inclusive
  end.setDate(end.getDate() + 1);

  const diffMs = end.getTime() - start.getTime();
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  const months = Math.floor(totalDays / 30);
  const days = totalDays % 30;

  return { months, days };
};

//=============================================

export const calculatePrice = (
  pricePerMonth: string | number,
  months: number,
  days: number,
) => {
  const priceForMonths = Number(pricePerMonth) * months;
  const pricePerDay = Number(pricePerMonth) / 30;
  const priceForDays = pricePerDay * days;
  return priceForMonths + priceForDays;
};
