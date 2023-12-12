<script>
  import { useTranslations } from "@i18n/utils";
  import { onDestroy, onMount } from "svelte";
  import ArrowDownIcon from "@components/icons/ArrowDownIcon.svelte";
  import { currentLang } from "@stores/i18nStore";

  let typingInterval;
  let currentIndex = 0;
  let currentWord = "Frontend";
  let currentCharacter = currentWord.length;
  let isTyping = true;

  $: t = useTranslations(currentLang.get());
  let words = [];

  const removeInterval = () => {
    clearInterval(typingInterval);
  };

  const initInterval = () => {
    typingInterval = setInterval(startTyping, 250);
  };

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
    }, 1000);
  };

  const proceedRemoving = () => {
    if (currentCharacter > 0) {
      currentWord = currentWord.slice(0, -1);
      currentCharacter--;
      return;
    }
    currentIndex = (currentIndex + 1) % words.length;
    isTyping = true;
  };

  function startTyping() {
    if (isTyping) {
      return proceedTyping();
    }
    proceedRemoving();
  }

  onMount(() => {
    words = [
      t("home.subtitle.frontend"),
      t("home.subtitle.web"),
      t("home.subtitle.app"),
      t("home.subtitle.videogames"),
    ];
    initInterval();
  });

  onDestroy(() => {
    removeInterval();
  });
</script>

<section class="jm-home">
  <div class="jm-home__content z-40">
    <span class="jm-home__introduction text-base md:text-xl"
      >{t("home.introduction")}</span
    >
    <h1 class="jm-home__title text-4xl md:text-6xl">Javier Martínez Arias</h1>
    <h2 class="jm-home__subtitle text-xl md:text-3xl">
      {t("home.subtitle.main")}
      {currentWord}
    </h2>
    <a
      class="jm-home__triangle jm-home__triangle--movement"
      aria-label={t("home.accessible.scrollDown")}
      href="#about"
    >
      <ArrowDownIcon classList="w-2 h-2 fill-current" />
    </a>
  </div>

  <div class="jm-home__circle-container-base">
    <div class="jm-home__circle jm-home__bg z-10" />
  </div>

  <div class="jm-home__circle-container">
    <div class="jm-home__circle jm-home__circle--movement z-0" />
  </div>
</section>

<style>
  .jm-home {
    @apply relative flex w-full justify-center overflow-hidden;

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
    @apply relative flex w-full max-w-3xl flex-col items-center justify-center gap-6 p-4 text-center text-white;
  }

  .jm-home__introduction {
    @apply text-base font-extrabold uppercase tracking-widest text-primary-500;
    letter-spacing: 0.25rem;
  }

  .jm-home__title {
    @apply font-bold;
  }

  .jm-home__subtitle {
    @apply font-semibold uppercase text-gray-50;
  }

  .jm-home__circle-container {
    @apply absolute w-full;
    top: 30vh;
  }

  .jm-home__circle-container-base {
    @apply absolute w-full;
    top: 37vh;
  }

  .jm-home__circle-container {
    min-width: 768px;
  }

  .jm-home__circle {
    @apply absolute w-full;
    height: 500px;
    border-radius: 50%;
  }

  .jm-home__circle--movement {
    @apply opacity-30;
    box-shadow: -1px -11px 45px 1px rgba(0, 0, 0, 0.46);
    /*animation-iteration-count: infinite;*/
    /*animation-duration: 6s;*/
    /*animation-name: translationY;*/
  }

  .jm-home__triangle {
    @apply absolute bottom-0 mb-4 rounded-3xl p-2 shadow-2xl;
  }

  .jm-home__triangle--movement {
    @apply opacity-80;
    box-shadow: -1px -11px 45px 1px rgba(0, 0, 0, 0.46);
    animation-iteration-count: infinite;
    animation-duration: 2s;

    animation-name: translationYTriangle;
  }

  @keyframes rollingX {
    0% {
      transform: translateX(2vw) rotate(0deg);
    }
    100% {
      transform: translateX(90vw) rotate(360deg);
    }
  }

  @keyframes translationY {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes translationYTriangle {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(10px);
    }
  }

  .jm-home__bg {
    background: rgb(0, 34, 64);
    background: linear-gradient(
      90deg,
      rgba(0, 34, 64, 1) 0%,
      rgba(0, 68, 128, 1) 95%
    );
  }
</style>
