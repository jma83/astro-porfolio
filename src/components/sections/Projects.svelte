<script>
  import Card from "@components/sections/projects/Card.svelte";
  import {onMount} from "svelte";
  import { useTranslations } from "@i18n/utils";
  import ModalProject from "@components/sections/projects/ModalProject.svelte";
  export let items = []

  export let lang;
  let t;
  let showModal = false;
  let modalData = null;
  $: t = useTranslations(lang);


  onMount(() => {
    console.log("mounted!", lang)
  })

  const handleShow = (data) => {
    showModal = true;
    modalData = data.detail.cardData;
    document.body.style.overflowY = "hidden";
  }

  const handleClose = () => {
    showModal = false;
    document.body.style.overflowY = "scroll";
  }
</script>


<section class="jm-projects pb-8 pt-20 md:py-20" id="projects">
  <div class="jm-projects__container">
    <h2>{t("projects.title")}</h2>
  </div>
  <main class="jm-projects__content">
    {#each items as item (item.alt)}
      <Card data={item} t={t} on:showInfo={handleShow} />
    {/each}
  </main>
  <ModalProject showModal={showModal} data={modalData} t={t} on:close={handleClose} />
</section>

<style>

  h2 {
    @apply text-4xl font-bold  text-white;
  }

  .jm-projects {
    @apply w-full flex flex-col justify-center items-center bg-white;

    background: rgb(0, 34, 64);
    background: linear-gradient(
      90deg,
      rgba(0, 34, 64, 1) 0%,
      rgba(0, 68, 128, 1) 95%
    );
  }

  .jm-projects__container {
    @apply w-full flex flex-col text-center mb-12 px-4;
    max-width: 72rem;
  }

  .jm-projects__content {
    @apply w-full grid gap-0.5;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 30rem), 1fr));
  }
</style>
