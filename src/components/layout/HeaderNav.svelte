<script>
  export let t;
  export let currentSection;

  $: isAbout = currentSection === "about";
  $: isProjects = currentSection === "projects";
  $: isHome = currentSection === "home";
  $: isPath = currentSection === "path";
  $: isContact = currentSection === "contact";
</script>

<nav class="hidden invisible md:block md:visible md:h-auto;">
  <ul class="flex flex-row gap-4">
    <li class="jm-header__list-item" class:active={isHome}>
      <a href="/#" class="jm-header__list-item-link" >{t("nav.home")}</a>
    </li>
    <li class="jm-header__list-item" class:active={isAbout}>
      <a href="#about" class="jm-header__list-item-link">{t("nav.about")}</a>
    </li>
    <li class="jm-header__list-item" class:active={isPath}>
      <a href="#path" class="jm-header__list-item-link">{t("nav.path")}</a>
    </li>
    <li class="jm-header__list-item" class:active={isProjects}>
      <a href="#projects" class="jm-header__list-item-link">{t("nav.projects")}</a>
    </li>
    <li class="jm-header__list-item" class:active={isContact}>
      <a href="#contact" class="jm-header__list-item-link">{t("nav.contact")}</a>
    </li>
  </ul>
</nav>

<style>
  .jm-header__list-item-link {
    padding: 1rem 0.25rem 1rem 0.25rem;
  }

  .jm-header__list-item.active {
    @apply font-bold;
  }
</style>
