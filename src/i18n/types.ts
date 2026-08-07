export type Lang = "en" | "de";

export const LANG_STORAGE_KEY = "portfolio-lang";

export function isLang(value: string | null): value is Lang {
  return value === "en" || value === "de";
}
