import {
  type PathCardMainData,
  type PathExperienceCardData,
  type PathLanguageCardData,
} from "../types/Path";
import {
  capacitorLogo,
  nuxtLogo,
  springLogo,
  tailwindLogo,
  vueLogo,
} from "./pathTechFrameworkItems.ts";
import {
  cobolLogo,
  cssLogo,
  db2Logo,
  htmlLogo,
  javaLogo,
  jsLogo,
  oracleLogo,
  phpLogo,
  sqlServerLogo,
  tsLogo,
} from "./pathTechLanguageItems.ts";

export const getPathStudiesItems = (t: Function): PathCardMainData[] => [
  {
    dateRange: "2020-2022",
    title: t("path.upsa.title"),
    location: t("path.upsa.location"),
    description: t("path.upsa.description"),
    icon: {
      src: "/src/images/path/studies/upsa_logo.avif",
      alt: "UPSA Logo",
    },
  },
  {
    dateRange: "2014-2019",
    title: t("path.ua.title"),
    location: t("path.ua.location"),
    description: t("path.ua.description"),
    icon: {
      src: "/src/images/path/studies/ua_logo.avif",
      alt: "UA Logo",
    },
  },
  {
    dateRange: "2012-2014",
    title: t("path.vk.title"),
    location: t("path.vk.location"),
    icon: {
      src: "/src/images/path/studies/vk_logo.avif",
      alt: "IES Victoria Kent Logo",
    },
  },
];

export const getPathExperienceItems = (
  t: Function,
): PathExperienceCardData[] => [
  {
    title: t("path.mamby.title"),
    location: t("path.mamby.location"),
    description: t("path.mamby.description"),
    dateRange: t("path.mamby.dateRange"),
    techIcons: [
      nuxtLogo,
      vueLogo,
      tsLogo,
      htmlLogo,
      cssLogo,
      tailwindLogo,
      capacitorLogo,
    ],
    icon: {
      src: "/src/images/path/experience/mamby_logo.avif",
      alt: "Everis logo",
    },
  },
  {
    title: t("path.everis2.title"),
    location: t("path.everis2.location"),
    description: t("path.everis2.description"),
    dateRange: t("path.everis2.dateRange"),
    icon: {
      src: "/src/images/path/experience/everis_logo.avif",
      alt: "Everis logo",
    },
    techIcons: [javaLogo, jsLogo, springLogo, oracleLogo],
  },
  {
    title: t("path.everis.title"),
    location: t("path.everis.location"),
    description: t("path.everis.description"),
    dateRange: t("path.everis.dateRange"),
    icon: {
      src: "/src/images/path/experience/everis_logo.avif",
      alt: "Everis logo",
    },
    techIcons: [javaLogo, jsLogo, cobolLogo, db2Logo, sqlServerLogo],
  },
  {
    title: t("path.aire2.title"),
    location: t("path.aire.location"),
    description: t("path.aire.description"),
    dateRange: t("path.aire2.dateRange"),
    techIcons: [htmlLogo, cssLogo, jsLogo, phpLogo],
    icon: {
      src: "/src/images/path/experience/airenetworks_logo.avif",
      alt: "Aire Networks logo",
    },
  },
  {
    title: t("path.aire.title"),
    location: t("path.aire.location"),
    description: t("path.aire.description"),
    dateRange: t("path.aire.dateRange"),
    icon: {
      src: "/src/images/path/experience/airenetworks_logo.avif",
      alt: "Aire Networks logo",
    },
    techIcons: [htmlLogo, cssLogo, jsLogo, phpLogo],
  },
];

export const getPathLanguagesItems = (t: Function): PathLanguageCardData[] => [
  {
    title: t("path.spanish.title"),
    certificate: t("path.spanish.certificate"),
    date: "·",
    icon: {
      src: "/src/images/path/studies/spanish_logo.avif",
      alt: "Spanish logo",
    },
  },
  {
    title: t("path.english.title"),
    date: "2015",
    certificate: t("path.english.certificate"),
    icon: {
      src: "/src/images/path/studies/english_logo.avif",
      alt: "English logo",
    },
  },
  {
    title: t("path.valencian.title"),
    date: "2012",
    certificate: t("path.valencian.certificate"),
    icon: {
      src: "/src/images/path/studies/valencian_logo.avif",
      alt: "Valencian logo",
    },
  },
];
