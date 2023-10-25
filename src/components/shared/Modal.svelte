<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let showModal;
    export let title;
    let dialog;

    const handleClose = () => {
        dispatch('close');
    };

    $: showModal ? dialog?.showModal() : dialog?.close();
</script>

{#if showModal }
<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:click|self={handleClose} on:keydown on:keypress on:keyup>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click|stopPropagation class="flex flex-col">
        <div class="flex flex-row justify-between items-start gap-x-1">
            <h2>{title}</h2>
            <button autofocus on:click={handleClose} class="px-2 border-2 border-red-500 rounded-full hover:bg-red-400 hover:opacity-70">x</button>
        </div>
        <slot />
    </div>
</dialog>
{/if}

<style>

    h2 {
        @apply text-2xl font-bold  ;
    }

    dialog {
        @apply w-full rounded-lg p-0;
        max-width: 42rem;
        border: none;
    }
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
    }
    dialog > div {
        padding: 1.5rem 1rem;
    }
    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    button {
        display: block;
    }
</style>
