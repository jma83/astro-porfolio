<script>
  import HeaderNavItems from "@components/layout/header/HeaderNavItems.svelte";

  export let t;
  export let currentSection;
  export let homePath;
</script>

<nav class="md:h-auto; invisible hidden md:visible md:block">
  <HeaderNavItems
    {homePath}
    {t}
    {currentSection}
    classes={"flex gap-4 flex-row"}
    isMobile={false}
  />
</nav>
