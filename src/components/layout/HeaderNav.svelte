<script>
  import { translate } from "../../stores/i18nStore";

  let t = translate.get();
</script>

<nav class="hidden invisible h-0 md:block md:visible md:h-auto;">
  <ul class="flex flex-row gap-4">
    <li class="jm-header__list-item">
      <a href="/public" class="jm-header__list-item-link">{t("nav.home")}</a>
    </li>
    <li class="jm-header__list-item">
      <a href="#" class="jm-header__list-item-link">{t("nav.about")}</a>
    </li>
    <li class="jm-header__list-item">
      <a href="#" class="jm-header__list-item-link">{t("nav.path")}</a>
    </li>
    <li class="jm-header__list-item">
      <a href="#" class="jm-header__list-item-link">{t("nav.projects")}</a>
    </li>
    <li class="jm-header__list-item">
      <a href="#" class="jm-header__list-item-link">{t("nav.contact")}</a>
    </li>
  </ul>
</nav>

<style>
  .jm-header__list-item-link {
    @apply px-1 py-4;
  }
</style>
