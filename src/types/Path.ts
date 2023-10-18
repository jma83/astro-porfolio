export interface IconData {
  src: string;
  alt: string;
  classes?: string;
}

export interface PathCardData {
  title: string;
  icon?: IconData;
}

export interface PathCardMainData extends PathCardData {
  description?: string;
  location: string;
  dateRange: string;
}

export interface PathExperienceCardData extends PathCardMainData {
  techIcons: IconData[];
}

export interface PathLanguageCardData {
  title: string;
  icon?: IconData;
  date: string;
  certificate: string;
}

export interface PathMenuData {
  title: string;
  href: string;
}
