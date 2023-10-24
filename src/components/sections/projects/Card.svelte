<script>
  import GithubIcon from "@components/icons/GithubIcon.svelte";
  import PlayIcon from "@components/icons/PlayIcon.svelte";
  import SeeMoreIcon from "@components/icons/SeeMoreIcon.svelte";
  import Tooltip from "@components/shared/Tooltip.svelte";
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let data;

  const handleShowInfo = () => {
    console.log("hooaaa")
    dispatch('showInfo', { cardData: data });
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
  <img src={src} alt={alt} class="object-cover" class:list={classes} />
  <div class="jm-card__bg"></div>
  <div class="jm-card__content md:px-16">
    <h3>{title}</h3>
    <p>{subtitle}</p>
    <ul class="flex flex-row items-center rounded-full bg-gray-700 p-2 mt-2">
      {#each pathTech as img (img.alt)}
        <li>
          <div>
            <img src={img.src} alt={img.alt} class="w-5 mx-2" />
          </div>
        </li>
      {/each}
    </ul>
    <div class="flex flex-row justify-around items-center gap-8 mt-6">
      {#if github}
        <Tooltip message="Github">
          <div class="bg-gray-100 rounded-full p-1 hover:opacity-75">
            <a href={github} target="_blank">
              <GithubIcon />
            </a>
          </div>
        </Tooltip>
      {/if}

      {#if demo}
        <Tooltip message="Play demo">
          <div class="bg-gray-100 rounded-full p-1 hover:opacity-75">
            <a href="/" target="_blank">
              <PlayIcon />
            </a>
          </div>
        </Tooltip>
      {/if}
      <Tooltip message="See more">
        <button type="button" class="bg-gray-100 rounded-full p-1 hover:opacity-75" on:click={handleShowInfo}>
          <SeeMoreIcon />
        </button>
      </Tooltip>
    </div>
  </div>
</div>

<style>
  .jm-card {
    @apply w-full border border-gray-900 relative flex justify-center;
  }

  .jm-card__content {
    @apply w-full h-full top-0 left-0 absolute px-4 flex flex-col justify-center items-center text-center z-20 gap-1;
    @apply invisible opacity-0 transition duration-200;
  }

  .jm-card__bg {
    @apply w-full h-full absolute top-0 left-0 bg-primary-500 z-10;
    @apply invisible opacity-0 transition duration-200;
  }

  .jm-card__content > h3 {
    @apply text-white font-semibold text-lg;
  }

  .jm-card__content > p {
    @apply text-white font-normal text-base;
  }

  .jm-card:hover > .jm-card__bg {
    @apply visible opacity-80;
  }

  .jm-card:hover > .jm-card__content {
    @apply visible opacity-100;
  }
</style>
