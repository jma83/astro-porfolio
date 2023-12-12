import { atom, type WritableAtom } from "nanostores";
import { defaultLang } from "@i18n/ui.ts";
import { getLangFromUrl } from "@i18n/utils.ts";

export const translate: WritableAtom<Function> = atom(() => {});
export const currentLang: WritableAtom<"es" | "en"> = atom(
  typeof window !== "undefined"
    ? getLangFromUrl(new URL(window.location.href))
    : defaultLang,
);
