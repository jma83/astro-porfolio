import type { PathMenuData } from "../types/Path.ts";

const getPathMenuItems = (t: Function): PathMenuData[] => [
  { title: t("path.studies"), href: "#studies" },
  { title: t("path.experience"), href: "#experience" },
  { title: t("path.tech"), href: "#tech" },
];

export default getPathMenuItems;
