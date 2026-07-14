export interface NavLink {
  path: string; // relative path under /[locale]
  labelKey: "home" | "about" | "programmes" | "activities" | "facilities" | "gallery" | "parentInfo" | "contact";
}

export const navLinksList: NavLink[] = [
  { path: "", labelKey: "home" },
  { path: "about", labelKey: "about" },
  { path: "programmes", labelKey: "programmes" },
  { path: "activities", labelKey: "activities" },
  { path: "facilities", labelKey: "facilities" },
  { path: "gallery", labelKey: "gallery" },
  { path: "parent-information", labelKey: "parentInfo" },
  { path: "contact", labelKey: "contact" }
];
