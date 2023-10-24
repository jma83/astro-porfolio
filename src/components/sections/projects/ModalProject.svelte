<script>
    import Modal from "@components/shared/Modal.svelte";
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let data;
    export let showModal;

    const handleClose = () => {
        dispatch('close');
    };
</script>

<Modal showModal={showModal} on:close={handleClose}>
   <div>
       Holis {data.alt}
   </div>
</Modal>