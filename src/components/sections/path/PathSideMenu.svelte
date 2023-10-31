<script>
  import {onDestroy, onMount} from "svelte";

  export let menuItems;
  export let t;

  let scrollSectionStudies = { scroll: 0, id: "studies" };
  let scrollSectionExperience = { scroll: 0, id: "experience" };
  let scrollSectionTech = { scroll: 0, id: "tech" };
  let scrollSections = [];
  let currentSection = "none";

  const initScrollSections = () => {
    scrollSectionStudies.scroll = document.getElementById("studies").offsetTop;
    scrollSectionExperience.scroll = document.getElementById("experience").offsetTop;
    scrollSectionTech.scroll = document.getElementById("tech").offsetTop;
    scrollSections = [scrollSectionTech, scrollSectionExperience, scrollSectionStudies];
  }

  const onScroll = () => {
    const scrollY = window.scrollY + 400;
    currentSection = scrollSections.find((section) => (scrollY > section.scroll))?.id || "none";
  }

  onMount(() => {
    initScrollSections();
    onScroll();
    window.addEventListener("scroll", onScroll);
  })

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", onScroll)
    }
  })

  const getClearSection = (section) => {
    return section.href.replace("#", "")
  }
</script>

<aside class="relative">
  <nav class="sticky left-0 top-64 p-4 md:mt-20 mr-8">
    <ul class="flex flex-col gap-y-3">
      {#each menuItems as menuItem (menuItem.href)}
        <li class="jm-path-side-menu__list-item" class:active={currentSection === getClearSection(menuItem)}>
          <a class="jm-path-side-menu__list-item-link" href={menuItem.href}><span>{menuItem.title}</span></a>
        </li>
      {/each}
    </ul>
  </nav>
</aside>

<style>
  li {
    @apply font-medium text-lg ;
  }

  .active {
    @apply font-semibold;
  }

  .jm-path-side-menu__list-item {
    @apply w-fit relative;
  }

  .jm-path-side-menu__list-item-link span:before {
    @apply flex w-full absolute bottom-0 left-0 bg-gray-900 transition-all duration-300 ease-in-out;
    height: 1px;
    transform: scaleX(0);
    visibility: hidden;
    content: "";
  }

  .jm-path-side-menu__list-item.active > .jm-path-side-menu__list-item-link span:before {
    visibility: visible;
    transform: scaleX(1);
  }
</style>
