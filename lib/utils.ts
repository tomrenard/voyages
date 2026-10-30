import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// fr-FR skips the thousands space below 10 000 ("1400"); force it so every
// price reads the same ("1 400", "2 200").
export const formatEuros = (n: number) =>
  n.toLocaleString("fr-FR", { useGrouping: "always" });
