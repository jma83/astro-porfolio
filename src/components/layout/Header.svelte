<script>
  import { onDestroy, onMount } from "svelte";
  import HeaderNav from "@components/layout/header/HeaderNavDesktop.svelte";
  import {useTranslations} from "@i18n/utils";
  import MenuIcon from "@components/icons/MenuIcon.svelte";
  import HeaderNavMobile from "@components/layout/header/HeaderNavMobile.svelte";

  export let lang;
  let isScrollDown = null; // Initialize isActive to false
  let openMenu = false; // Initialize isActive to false
  let scrollSectionAbout = { scroll: 0, id: "about" };
  let scrollSectionPath = { scroll: 0, id: "path" };
  let scrollSectionProjects = { scroll: 0, id: "projects" };
  let scrollSectionContact = { scroll: 0, id: "contact" };
  let scrollSectionHome = { scroll: 0, id: "home" };
  let scrollSections = [];
  let currentSection = "home";

  $: t = useTranslations(lang);


  const onScroll = () => {
    openMenu = false;
    checkCurrentScrollSection();

    if (window.scrollY === 0) {
      isScrollDown = null;
      return;
    }
    if (isScrollDown === null && window.scrollY <= 500){
      return;
    }
    isScrollDown = window.scrollY > 500;
  }

  const onResize = () => {
    initScrollSections();
    openMenu = false;
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
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
  })

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", onScroll)
    }
  })

  const handleMenu = () => {
    openMenu = !openMenu
  }
</script>

<header class="jm-header" class:jm-header--appear-fixed="{isScrollDown === true}"
        class:jm-header__disappear-fixed="{isScrollDown === false}">
  <div class="jm-header__container md:px-4">
    <div class="jm-header__content items-center md:items-baseline">
      <a href="/" class="jm-header__brand-link z-50">
        <span class="text-white">JMA</span>
      </a>
      <HeaderNav t={t} currentSection={currentSection} />
      <HeaderNavMobile t={t} currentSection={currentSection} active={openMenu} isScrollDown={isScrollDown} />
      <button class="block visible h-auto md:hidden md:invisible md:h-0 z-50" on:click={handleMenu}>
        <MenuIcon open={openMenu} />
      </button>
    </div>
  </div>
</header>

<style>
  .jm-header {
    @apply w-full absolute text-white top-0 left-0 z-50 transition-all;
    background: rgb(0, 34, 64);
    background: linear-gradient(
            90deg,
            rgba(0, 34, 64, 1) 0%,
            rgba(0, 68, 128, 1) 95%
    );

    animation-duration: 0.25s;
    animation-timing-function: ease-in-out;
  }

  .jm-header--appear-fixed {
    @apply fixed shadow-lg;
    animation-name: slide-down;
    display: block;
  }

  .jm-header__disappear-fixed {
    animation-name: slide-up;
    animation-fill-mode: forwards;
  }

  @keyframes slide-down {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-up {
    0% {
      position: fixed;
      transform: translateY(0);
      opacity: 1;
    }
    99% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      position: absolute;
      opacity: 1;
    }
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
