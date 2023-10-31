<script>
    export let t;
    export let currentSection;
    export let classes;

    $: isAbout = currentSection === "about";
    $: isProjects = currentSection === "projects";
    $: isHome = currentSection === "home";
    $: isPath = currentSection === "path";
    $: isContact = currentSection === "contact";
</script>

<ul class={classes}>
    <li class="jm-header__list-item" class:active={isHome}>
        <a href="/#" class="jm-header__list-item-link"><span>{t("nav.home")}</span></a>
    </li>
    <li class="jm-header__list-item" class:active={isAbout}>
        <a href="#about" class="jm-header__list-item-link"><span>{t("nav.about")}</span></a>
    </li>
    <li class="jm-header__list-item" class:active={isPath}>
        <a href="#path" class="jm-header__list-item-link"><span>{t("nav.path")}</span></a>
    </li>
    <li class="jm-header__list-item" class:active={isProjects}>
        <a href="#projects" class="jm-header__list-item-link"><span>{t("nav.projects")}</span></a>
    </li>
    <li class="jm-header__list-item" class:active={isContact}>
        <a href="#contact" class="jm-header__list-item-link"><span>{t("nav.contact")}</span></a>
    </li>
</ul>


<style>
    .jm-header__list-item-link {
        @apply pt-4 pb-1 mx-1;
        position: relative;
    }

    .jm-header__list-item.active {
        @apply font-semibold;
    }

    .jm-header__list-item-link span:before {
        @apply flex w-full absolute bottom-0 left-0 bg-gray-200 transition-all duration-300 ease-in-out;
        height: 1px;
        transform: scaleX(0);
        visibility: hidden;
        content: "";
    }

    .jm-header__list-item.active > .jm-header__list-item-link span:before {
        visibility: visible;
        transform: scaleX(1);
    }
</style>
