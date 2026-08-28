export type Lang = "en" | "de" | "ar";

export const LANG_STORAGE_KEY = "portfolio-lang";

export function isLang(value: string | null): value is Lang {
  return value === "en" || value === "de" || value === "ar";
}
