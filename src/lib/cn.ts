import { twMerge } from "tailwind-merge";

type ClassValue = string | false | null | undefined;

// Joins class names and lets later Tailwind classes override earlier ones.
export function cn(...classes: ClassValue[]) {
  return twMerge(classes.filter(Boolean).join(" "));
}
