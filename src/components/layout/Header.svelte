<script>
  import HeaderNav from "./HeaderNav.svelte";
  import MenuIcon from "../icons/MenuIcon.svelte";
  import { onDestroy, onMount } from "svelte";

  let isScrollDown = false; // Initialize isActive to false

  const onScroll = () => {
    isScrollDown = window.scrollY > 10;
    console.log("isScrollDown", isScrollDown);
  }

  onMount(() => {
    console.log("onMount");
    window.addEventListener("scroll", onScroll);
  })

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", onScroll)
    }
  })
</script>

<header class="jm-header" class:isScrollDown={isScrollDown ? "fixed" : "absolute"}>
  <div class="jm-header__container md:px-4">
    <div class="jm-header__content">
      <a href="/public" class="jm-header__brand-link">
        <span class="text-white">JMA</span>
      </a>
      <HeaderNav />
      <button class="block visible h-auto md:hidden md:invisible md:h-0">
        <MenuIcon classList="w-8 h-8" />
      </button>
    </div>
  </div>
</header>

<style>
  .jm-header {
    @apply w-full text-white top-0 left-0 ;
    background: rgb(0, 34, 64);
    background: linear-gradient(
            90deg,
            rgba(0, 34, 64, 1) 0%,
            rgba(0, 68, 128, 1) 95%
    );
  }

  .jm-header__container {
    @apply w-full pr-4 flex justify-center items-start;
  }

  .jm-header__content {
    @apply w-full max-w-6xl flex justify-between items-center;
    @apply font-normal text-base;
  }

  .jm-header__brand-link {
    @apply p-4 relative text-2xl font-extrabold;
  }

  .jm-header__brand-link:after {
    @apply bg-primary-500;
  }

  .jm-header__navigation-bar {
    @apply hidden invisible h-0;
    /*  md:block md:visible md:h-auto */
  }
</style>
