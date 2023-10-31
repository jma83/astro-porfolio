<script>
  export let open = false;
  export let size = 32
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class:open
  width={size}
  height={size}
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path class="top" d="M4 6l16 0"></path>
  <path class="middle" d="M4 12l16 0"></path>
  <path class="middle-two" d="M4 12l16 0"></path>
  <path class="bottom" d="M4 18l16 0"></path>
</svg>

<style>
  :root {
    --transition-duration: 400ms;
  }

  svg {
    transition: transform var(--transition-duration);
  }

  .top {
    stroke-dasharray: 40 160;
    transition: stroke-dashoffset var(--transition-duration);
  }

  .middle {
    transform-origin: 50%;
    transition: transform var(--transition-duration);
  }

  .middle-two {
    transform-origin: -50%;
    transition: transform var(--transition-duration);
  }

  .bottom {
    stroke-dasharray: 40 85;
    transition: stroke-dashoffset var(--transition-duration);
  }

  .open {
    transform: rotate(45deg)
  }

  .open .top, .open .bottom {
    stroke-dashoffset: -64px
  }

  .open .middle {
    transform: rotate(90deg);
  }
</style>
