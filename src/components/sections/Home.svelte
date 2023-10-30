<script>
  import { useTranslations } from "@i18n/utils";
  import {onDestroy, onMount} from "svelte";
  export let lang;
  let typingInterval;
  let currentIndex = 0;
  let currentWord = 'Frontend';
  let currentCharacter = currentWord.length;
  let isTyping = true;

  $: t = useTranslations(lang);
  let words = []


  const removeInterval = () => {
    clearInterval(typingInterval)
  }

  const initInterval = () => {
    typingInterval = setInterval(startTyping, 250);
  }

  const proceedTyping = () => {
    if (currentCharacter < words[currentIndex].length) {
      currentWord += words[currentIndex][currentCharacter];
      currentCharacter++;
      return;
    }
    isTyping = false;
    removeInterval();
    setTimeout(() => {
      initInterval();
    }, 1000)
  }

  const proceedRemoving = () => {
    if (currentCharacter > 0) {
      currentWord = currentWord.slice(0, -1);
      currentCharacter--;
      return;
    }
    currentIndex = (currentIndex + 1) % words.length;
    isTyping = true;
  }

  function startTyping() {
    if (isTyping) {
      return proceedTyping();
    }
    proceedRemoving();
  }

  onMount(() => {
    words = [t("home.subtitle.frontend"), t("home.subtitle.web"), t("home.subtitle.app"), t("home.subtitle.videogames")];
    initInterval();
  })

  onDestroy(() => {
    removeInterval();
  })
</script>

<section class="jm-home">
  <div class="jm-home__content">
    <span class="jm-home__introduction text-base md:text-xl">{t("home.introduction")}</span>
    <h1 class="jm-home__title text-4xl md:text-6xl">Javier Martínez Arias</h1>
    <h2 class="jm-home__subtitle text-xl md:text-3xl">{t("home.subtitle.main")} {currentWord}</h2>
  </div>
</section>

<style>
  .jm-home {
    @apply w-full flex;

    background: rgb(0, 34, 64);
    background: linear-gradient(
      90deg,
      rgba(0, 34, 64, 1) 0%,
      rgba(0, 68, 128, 1) 95%
    );
    height: 100vh;
    max-height: 1440px;
  }

  .jm-home__content {
    @apply w-full flex flex-col justify-center items-center text-white text-center p-4 gap-6;
  }

  .jm-home__introduction {
    @apply font-extrabold text-base uppercase tracking-widest text-primary-500;
    letter-spacing: 0.25rem;
  }

  .jm-home__title {
    @apply font-bold;
  }

  .jm-home__subtitle {
    @apply font-semibold uppercase;
  }
</style>
