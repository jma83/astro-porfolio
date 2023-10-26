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
    const scrollY = window.scrollY + 250;
    currentSection = scrollSections.find((section) => (scrollY > section.scroll))?.id || "none";
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

  const getClearSection = (section) => {
    return section.href.replace("#", "")
  }
</script>

<aside class="relative">
  <nav class="sticky left-0 top-64 p-4 md:mt-20 mr-8">
    <ul class="flex flex-col gap-y-1">
      {#each menuItems as menuItem (menuItem.href)}
        <li class:active={currentSection === getClearSection(menuItem)}>
          <a href={menuItem.href}>{menuItem.title}</a>
        </li>
      {/each}
    </ul>
  </nav>
</aside>

<style>
  li {
    @apply font-medium text-lg py-1;
  }

  .active {
    @apply font-bold;
  }
</style>
