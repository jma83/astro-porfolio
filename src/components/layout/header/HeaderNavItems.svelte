<script>
  export let t;
  export let currentSection;
  export let classes;
  export let homePath;
  export let isMobile = true;

  $: navItems = [
    { id: "home", href: homePath, name: t("nav.home") },
    { id: "about", href: "#about", name: t("nav.about") },
    { id: "path", href: "#path", name: t("nav.path") },
    { id: "projects", href: "#projects", name: t("nav.projects") },
    { id: "contact", href: "#contact", name: t("nav.contact") },
  ];
</script>

<ul class={classes}>
  {#each navItems as navItem (navItem.id)}
    <li
      class="jm-header__list-item"
      class:active={currentSection === navItem.id}
      class:isMobile
    >
      <a href={navItem.href} class="jm-header__list-item-link">
        <span>{navItem.name}</span>
      </a>
    </li>
  {/each}
</ul>

<style>
  .jm-header__list-item-link {
    @apply mx-1 pb-1 pt-4;
    position: relative;
  }

  .jm-header__list-item.active {
    @apply font-semibold;
  }

  .jm-header__list-item-link span:before {
    @apply absolute bottom-0 left-0 flex w-full bg-gray-200 transition-all duration-300 ease-in-out;
    height: 1px;
    transform: scaleX(0);
    visibility: hidden;
    content: "";
  }

  .jm-header__list-item:hover:not(.isMobile)
    > .jm-header__list-item-link
    span:before,
  .jm-header__list-item.active > .jm-header__list-item-link span:before {
    visibility: visible;
    transform: scaleX(1);
  }
</style>
