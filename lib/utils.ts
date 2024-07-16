import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseKey);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function DateToText(date: any) {
  const theDate = new Date(date);
  const frenchDate = theDate.toLocaleDateString("fr-FR", {
    month: "long",
    day: "2-digit",
  });
  return frenchDate.toString();
}

export function DateToDayText(date: Date) {
  const frenchDate = date
    .toLocaleDateString("fr-FR", { weekday: "long" })
    .substring(0, 3)
    .toLowerCase();
  return frenchDate.toString();
}

export function DateToDateHourText(date: Date) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
export function DateToHourText(date: string) {
  try {
    return date.split(":")[0] + "h" + date.split(":")[1];
  } catch (e) {
    console.log("error1", date);
  }
}

export function DateToWeekdayString(date: Date) {
  try {
    return new Intl.DateTimeFormat("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  } catch (e) {
    console.log("error3", date);
  }
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

export function convertDecimalToHours(decimalHours: number) {
  const hours = Math.floor(decimalHours);
  const minutes = Math.round((decimalHours - hours) * 60);
  return `${hours}h${minutes}`;
}
