<script>
    import Modal from "@components/shared/Modal.svelte";
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let data;
    export let showModal;

    const handleClose = () => {
        dispatch('close');
    };

    let title;

    $: title = data?.title || "";
</script>


<Modal showModal={showModal} title={title} on:close={handleClose}>
   <div class="mt-4">
       <p>{@html data.description}</p>
       <img src={data.src} class="mt-4" />
   </div>
</Modal>
