type ClassValue = string | number | false | null | undefined;

/** Minimal class joiner — avoids pulling in an extra dependency. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
