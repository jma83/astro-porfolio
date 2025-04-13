<script>
  import { onDestroy, onMount } from "svelte";
  import HeaderNav from "@components/layout/header/HeaderNavDesktop.svelte";
  import { useTranslations } from "@i18n/utils";
  import MenuIcon from "@components/icons/MenuIcon.svelte";
  import HeaderNavMobile from "@components/layout/header/HeaderNavMobile.svelte";
  import { defaultLang } from "@i18n/ui";
  import { currentLang } from "@stores/i18nStore";

  const lang = currentLang.get();
  let isScrollDown = null;
  let openMenu = null;
  let scrollSectionAbout = { scroll: 0, id: "about" };
  let scrollSectionPath = { scroll: 0, id: "path" };
  let scrollSectionProjects = { scroll: 0, id: "projects" };
  let scrollSectionContact = { scroll: 0, id: "contact" };
  let scrollSectionHome = { scroll: 0, id: "home" };
  let defaultSection = scrollSectionHome.id;
  let scrollSections = [];
  let currentSection = defaultSection;
  let screenSize = 1920;
  let isMounted = false;
  const homeBase = "/";
  const hash = "#";

  const onScroll = () => {
    if (isMounted && openMenu) {
      openMenu = false;
    }
    if (!isMounted) {
      initScrollSections();
    }
    checkCurrentScrollSection();

    if (window.scrollY === 0) {
      isScrollDown = null;
      return;
    }
    if (isScrollDown === null && window.scrollY <= 500) {
      return;
    }
    isScrollDown = window.scrollY > 500;
  };

  const onResize = () => {
    screenSize = window.innerWidth;
    initScrollSections();
    if (isMounted && openMenu) {
      openMenu = null;
    }
  };

  const checkCurrentScrollSection = () => {
    const minScrollY = 250;
    if (window.scrollY < minScrollY) {
      currentSection = defaultSection;
      return;
    }
    const scrollY = window.scrollY + minScrollY;
    currentSection = scrollSections.find(
      (section) => scrollY > section.scroll,
    )?.id || defaultSection;
  };

  const initScrollSections = () => {
    scrollSectionAbout.scroll = document.getElementById("about")?.offsetTop || 0;
    scrollSectionPath.scroll = document.getElementById("path")?.offsetTop || 0;
    scrollSectionProjects.scroll =
      document.getElementById("projects")?.offsetTop || 0;
    scrollSectionContact.scroll = document.getElementById("contact")?.offsetTop || 0;
    scrollSections = [
      scrollSectionContact,
      scrollSectionProjects,
      scrollSectionPath,
      scrollSectionAbout,
      scrollSectionHome,
    ];
  };

  onMount(() => {
    onResize();
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    setTimeout(() => {
      initScrollSections();
      checkCurrentScrollSection();
    }, 250);
    isMounted = true;
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    }
  });

  const handleMenu = () => {
    openMenu = !openMenu;
  };

  $: isMobile = screenSize <= 768;
  $: homeHref =
    defaultLang !== lang ? `${homeBase}${lang}${hash}` : `${homeBase}${hash}`;
  $: t = useTranslations(lang);
</script>

<header
  class="jm-header"
  class:jm-header--appear-fixed={isScrollDown === true}
  class:jm-header__disappear-fixed={isScrollDown === false}
>
  <div class="jm-header__container md:px-4">
    <div class="jm-header__content items-center md:items-baseline">
      <a href={homeHref} class="jm-header__brand-link z-50">
        <span class="text-white">JMA</span>
      </a>
      {#if !isMobile}
        <HeaderNav {t} {currentSection} homePath={homeHref} />
      {:else}
        <HeaderNavMobile
          {t}
          {currentSection}
          homePath={homeHref}
          active={openMenu}
          {isScrollDown}
        />
      {/if}
      <button
        class="visible z-50 block h-auto md:invisible md:hidden md:h-0"
        aria-label="Menu"
        on:click={handleMenu}
      >
        <MenuIcon open={openMenu} />
      </button>
    </div>
  </div>
</header>

<style>
  .jm-header {
    @apply absolute left-0 top-0 z-50 w-full text-white transition-all;
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
    @apply flex w-full items-start justify-center pr-4;
  }

  .jm-header__content {
    @apply flex w-full max-w-6xl justify-between;
    @apply text-base font-normal;
  }

  .jm-header__brand-link {
    @apply relative p-4 text-2xl font-extrabold;
  }

  .jm-header__brand-link:after {
    @apply bg-primary-500;
  }

  .jm-header__navigation-bar {
    @apply invisible hidden h-0;
    /*  md:block md:visible md:h-auto */
  }
</style>
