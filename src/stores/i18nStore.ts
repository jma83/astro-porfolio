import { atom, type WritableAtom } from "nanostores";
import { defaultLang } from "@i18n/ui.ts";

export const translate: WritableAtom<Function> = atom(() => {});
export const currentLang: WritableAtom<string> = atom(defaultLang);
