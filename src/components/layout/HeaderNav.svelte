<script>
  export let t;
</script>

<nav class="hidden invisible md:block md:visible md:h-auto;">
  <ul class="flex flex-row gap-4">
    <li class="jm-header__list-item">
      <a href="/#" class="jm-header__list-item-link">{t("nav.home")}</a>
    </li>
    <li class="jm-header__list-item">
      <a href="#about" class="jm-header__list-item-link">{t("nav.about")}</a>
    </li>
    <li class="jm-header__list-item">
      <a href="#path" class="jm-header__list-item-link">{t("nav.path")}</a>
    </li>
    <li class="jm-header__list-item">
      <a href="#projects" class="jm-header__list-item-link">{t("nav.projects")}</a>
    </li>
    <li class="jm-header__list-item">
      <a href="#contact" class="jm-header__list-item-link">{t("nav.contact")}</a>
    </li>
  </ul>
</nav>

<style>
  .jm-header__list-item-link {
    padding: 1rem 0.25rem 1rem 0.25rem;
  }
</style>
