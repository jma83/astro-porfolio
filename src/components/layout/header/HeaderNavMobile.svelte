<script>
    import HeaderNavItems from "@components/layout/header/HeaderNavItems.svelte";

    export let t;
    export let currentSection;
    export let active = false;
    export let isScrollDown = false;
</script>

<nav class="jm-header-mobile md:hidden md:invisible md:h-0" class:active class:isScrollDown>
    <HeaderNavItems t={t} currentSection={currentSection} classes="flex gap-4 flex-col" />
</nav>

<style>
    .jm-header-mobile {
        @apply w-full top-0 absolute hidden invisible h-0 z-20 py-4 uppercase transition-all;
        background: rgb(0, 34, 64);
        background: linear-gradient(
                90deg,
                rgba(0, 34, 64, 1) 0%,
                rgba(0, 68, 128, 1) 95%
        );
    }

    .jm-header-mobile.active {
        @apply visible flex justify-center items-center h-fit;
        animation-duration: 0.4s;
        top: 2.5rem;
        animation-name: translationYNavbar;
    }

    .jm-header-mobile.isScrollDown {
        @apply shadow-lg;
    }

    @keyframes translationYNavbar {
        from {
            opacity: 0;
            top: -2rem;
        }
        to {
            opacity: 1;
            top: 2.5rem;
        }
    }
</style>
