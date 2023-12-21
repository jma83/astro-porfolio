<script>
  import GithubIcon from "@components/icons/GithubMinimalIcon.svelte";
  import PlayIcon from "@components/icons/PlayIcon.svelte";
  import SeeMoreIcon from "@components/icons/SeeMoreIcon.svelte";
  import Tooltip from "@components/shared/Tooltip.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let data;
  export let t;

  const handleShowInfo = () => {
    dispatch("showInfo", { cardData: data });
  };

  const {
    src,
    alt,
    classes = "",
    title,
    subtitle,
    pathTech = [],
    github,
    demo,
  } = data;
</script>

<div class="jm-card">
  <img
    {src}
    {alt}
    class="object-cover"
    class:list={classes}
    width="958"
    height="486"
  />
  <div class="jm-card__bg"></div>
  <div class="jm-card__content md:px-16">
    <h3>{t(title)}</h3>
    <p>{t(subtitle)}</p>
    <ul class="mt-2 flex flex-row items-center rounded-full bg-gray-700 p-2">
      {#each pathTech as img (img.alt)}
        <li>
          <div>
            <img
              src={img.src}
              alt={img.alt}
              class="mx-2 w-5"
              width="24"
              height="24"
            />
          </div>
        </li>
      {/each}
    </ul>
    <div class="mt-6 flex flex-row items-center justify-around gap-8">
      {#if github}
        <Tooltip message="Github">
          <div class="rounded-full bg-gray-100 p-1 hover:opacity-75">
            <a href={github} target="_blank">
              <GithubIcon />
            </a>
          </div>
        </Tooltip>
      {/if}

      {#if demo}
        <Tooltip message="Play demo">
          <div class="rounded-full bg-gray-100 p-1 hover:opacity-75">
            <a href={demo} target="_blank">
              <PlayIcon />
            </a>
          </div>
        </Tooltip>
      {/if}
      <Tooltip message="See more">
        <button
          type="button"
          class="rounded-full bg-gray-100 p-1 hover:opacity-75"
          on:click={handleShowInfo}
        >
          <SeeMoreIcon />
        </button>
      </Tooltip>
    </div>
  </div>
</div>

<style>
  .jm-card {
    @apply relative flex w-full justify-center border border-gray-900;
    min-height: 350px;
  }

  .jm-card__content {
    @apply absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center gap-1 px-4 text-center;
    @apply invisible opacity-0 transition duration-200;
  }

  .jm-card__bg {
    @apply absolute left-0 top-0 z-10 h-full w-full bg-primary-500;
    @apply invisible opacity-0 transition duration-200;
  }

  .jm-card__content > h3 {
    @apply text-lg font-semibold text-white;
  }

  .jm-card__content > p {
    @apply text-base font-normal text-white;
  }

  .jm-card:hover > .jm-card__bg {
    @apply visible opacity-80;
  }

  .jm-card:hover > .jm-card__content {
    @apply visible opacity-100;
  }

  @keyframes show {
    from {
      opacity: 0.25;
      scale: 50%;
    }
    to {
      opacity: 1;
      scale: 100%;
    }
  }

  img {
    view-timeline-name: --image;
    view-timeline-axis: block;
    animation-timeline: --image;
    animation-name: show;

    animation-range: entry 25% cover 30%;
    animation-fill-mode: both;
  }
</style>
