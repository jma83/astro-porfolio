<script>
    import HeaderNavItems from "@components/layout/header/HeaderNavItems.svelte";

    export let t;
    export let currentSection;
    export let active = false;
    export let isScrollDown = false;

    $: currentActualSection = active ? currentSection: "";
</script>

<nav class="jm-header-mobile md:hidden md:invisible md:h-0" class:active class:isScrollDown>
    <HeaderNavItems t={t} currentSection={currentActualSection} classes="flex gap-4 flex-col" />
</nav>

<style>
    .jm-header-mobile {
        @apply w-full absolute flex justify-center items-center  invisible h-auto z-20 py-4 uppercase transition-all;
        background: rgb(0, 34, 64);
        background: linear-gradient(
                90deg,
                rgba(0, 34, 64, 1) 0%,
                rgba(0, 68, 128, 1) 95%
        );
        top: -2rem;
        animation-duration: 0.6s;
        animation-name: hideNavbar;
    }

    .jm-header-mobile.active {
        @apply visible ;
        animation-duration: 0.4s;
        top: 2.5rem;
        animation-name: showNavbar;
    }

    .jm-header-mobile.isScrollDown {
        @apply shadow-lg;
    }

    @keyframes showNavbar {
        0% {
            opacity: 0;
            visibility: hidden;
            top: -2rem;
        }
        100% {
            opacity: 1;
            visibility: visible;
            top: 2.5rem;
        }
    }

    @keyframes hideNavbar {
        0% {
            opacity: 1;
            visibility: visible;
            top: 2.5rem;
        }
        99% {
            opacity: 0;
            visibility: hidden;
            top: -2rem;
        }
        100% {
            display: none;
        }
    }
</style>
