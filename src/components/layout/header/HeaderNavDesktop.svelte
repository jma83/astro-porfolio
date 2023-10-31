<script>
  import HeaderNavItems from "@components/layout/header/HeaderNavItems.svelte";

  export let t;
  export let currentSection;
</script>

<nav class="hidden invisible md:block md:visible md:h-auto;">
  <HeaderNavItems t={t} currentSection={currentSection} classes={'flex gap-4 flex-row'} />
</nav>
