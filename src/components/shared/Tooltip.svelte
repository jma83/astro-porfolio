<script>
  export let message = "";
  export let isTop = true;
</script>

<div class="mm-tooltip">
  <slot />
  <div
    class="mm-tooltip__container"
    class:mm-tooltip__container--top={isTop}
  >
    {message}
    <div class="mm-tooltip__arrow-down"></div>
  </div>
</div>

<style>
  .mm-tooltip {
    @apply relative;
  }

  .mm-tooltip__container {
    @apply absolute hidden w-fit;
    @apply py-1 px-3;
    @apply bg-gray-800 rounded text-blue-50 text-xs z-10;
  }

  .mm-tooltip:not(.mm-tooltip--no-target):hover > .mm-tooltip__container {
    @apply block;
  }

  .mm-tooltip__arrow-down {
    @apply w-0 h-0 absolute;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.625rem solid #000;
  }

  .mm-tooltip__container--top {
    bottom: 120%;
  }
</style>
