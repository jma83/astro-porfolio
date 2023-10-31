export interface FooterItemData {
  title: string;
  href: string | null;
}

export interface FooterSectionData {
  title: string;
  dataList: FooterItemData[];
}

export const linksList: FooterItemData[] = [
  { title: "nav.home", href: "/" },
  { title: "nav.about", href: "#about" },
  { title: "nav.path", href: "#path" },
  { title: "nav.projects", href: "#projects" },
  { title: "nav.contact", href: "#contact" },
];

export const specializationList: FooterItemData[] = [
  { title: "footer.specialization.frontend", href: null },
  { title: "footer.specialization.web", href: null },
  { title: "footer.specialization.apps", href: null },
  { title: "footer.specialization.games", href: null },
];

export const consultationList: FooterItemData[] = [
  { title: "footer.consultation.email", href: "mailto:jma96.elx@gmail.com" },
  {
    title: "footer.consultation.linkedin",
    href: "https://www.linkedin.com/in/javier-mart%C3%ADnez-arias-6555b8166/",
  },
];

export const footerSectionList: FooterSectionData[] = [
  { title: "footer.links.title", dataList: linksList },
  { title: "footer.specialization.title", dataList: specializationList },
  { title: "footer.consultation.title", dataList: consultationList },
];

export const iconsList = [
  {
    iconName: "email",
    href: "mailto:jma96.elx@gmail.com",
    size: 20,
  },
  {
    iconName: "linkedin",
    href: "https://www.linkedin.com/in/javier-mart%C3%ADnez-arias-6555b8166/",
    size: 20,
  },
  {
    iconName: "github",
    href: "https://github.com/jma83",
    size: 20,
  },
];

export const languageList = [
  {
    src: "/src/images/path/studies/spanish_logo.avif",
    alt: "Spanish",
    href: "/",
  },
  {
    src: "/src/images/path/studies/english_logo.avif",
    alt: "English",
    href: "/en",
  },
];
