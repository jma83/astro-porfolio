<script>
  import Modal from "@components/shared/Modal.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let data;
  export let showModal;
  export let t;

  const handleClose = () => {
    dispatch("close");
  };

  let title;

  $: title = data?.title || "";
</script>

<Modal {showModal} title={t(title)} on:close={handleClose}>
  <div class="mt-4">
    <p class="jm-modal-project__paragraph">{@html t(data.description)}</p>
    <img src={data.src} alt={t(title)} class="mt-4" />
  </div>
</Modal>

<style>
  .jm-modal-project__paragraph :global(a) {
    @apply text-primary-500;
  }
</style>
