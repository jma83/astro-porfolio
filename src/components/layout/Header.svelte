<script>
  import { onDestroy, onMount } from "svelte";
  import HeaderNav from "@components/layout/HeaderNav.svelte";
  import {useTranslations} from "@i18n/utils";

  export let lang;
  let isScrollDown = false; // Initialize isActive to false
  let scrollSectionAbout = { scroll: 0, id: "about" };
  let scrollSectionPath = { scroll: 0, id: "path" };
  let scrollSectionProjects = { scroll: 0, id: "projects" };
  let scrollSectionContact = { scroll: 0, id: "contact" };
  let scrollSectionHome = { scroll: 0, id: "home" };
  let scrollSections = [];
  let currentSection = "home";

  $: t = useTranslations(lang);


  const onScroll = () => {
    isScrollDown = window.scrollY > 500;
    checkCurrentScrollSection();
  }

  const checkCurrentScrollSection = () => {
    const scrollY = window.scrollY + 250;
    currentSection = scrollSections.find((section) => (scrollY > section.scroll)).id;
  }

  const initScrollSections = () => {
    scrollSectionAbout.scroll = document.getElementById("about").offsetTop;
    scrollSectionPath.scroll = document.getElementById("path").offsetTop;
    scrollSectionProjects.scroll = document.getElementById("projects").offsetTop;
    scrollSectionContact.scroll = document.getElementById("contact").offsetTop;
    scrollSections = [scrollSectionContact, scrollSectionProjects, scrollSectionPath, scrollSectionAbout, scrollSectionHome];
  }

  onMount(() => {
    initScrollSections();
    document.addEventListener("scroll", onScroll);
  })

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", onScroll)
    }
  })
</script>

<header class="jm-header" class:jm-header__fixed={isScrollDown} class:absolute={!isScrollDown}>
  <div class="jm-header__container md:px-4">
    <div class="jm-header__content items-center md:items-baseline">
      <a href="/public" class="jm-header__brand-link">
        <span class="text-white">JMA</span>
      </a>
      <HeaderNav t={t} currentSection={currentSection} />
      <button class="block visible h-auto md:hidden md:invisible md:h-0">
        <slot name="icon" />
      </button>
    </div>
  </div>
</header>

<style>
  .jm-header {
    @apply w-full text-white top-0 left-0 z-50;
    background: rgb(0, 34, 64);
    background: linear-gradient(
            90deg,
            rgba(0, 34, 64, 1) 0%,
            rgba(0, 68, 128, 1) 95%
    );
  }

  .jm-header__fixed {
    @apply fixed shadow-lg;
  }

  .jm-header__container {
    @apply w-full pr-4 flex justify-center items-start;
  }

  .jm-header__content {
    @apply w-full max-w-6xl flex justify-between;
    @apply font-normal text-base;
  }

  .jm-header__brand-link {
    @apply p-4 relative text-2xl font-extrabold;
  }

  .jm-header__brand-link:after {
    @apply bg-primary-500;
  }

  .jm-header__navigation-bar {
    @apply hidden invisible h-0;
    /*  md:block md:visible md:h-auto */
  }
</style>
