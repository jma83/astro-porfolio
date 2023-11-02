<script>
  import HeaderNavItems from "@components/layout/header/HeaderNavItems.svelte";

  export let t;
  export let currentSection;
  export let homePath;
</script>

<nav class="hidden invisible md:block md:visible md:h-auto;">
  <HeaderNavItems homePath={homePath} t={t} currentSection={currentSection} classes={'flex gap-4 flex-row'} />
</nav>
