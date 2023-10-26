<script>

    $:year = new Date().getFullYear();
</script>

<p class="footer-author">
    Copyright ©{year} All rights reserved | Made with <a href="https://astro.build/">Astro</a> by Javier Martinez Arias
</p>

<style>
    .footer-author {
        @apply text-gray-300 text-center mt-24;
    }

    .footer-author > a:hover  {
        @apply underline;
    }
</style>