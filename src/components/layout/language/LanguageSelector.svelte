<script>
import { languageList } from "@static/languageItems";
</script>

<ul class="jm-language-selector">
  {#each languageList as languageItem (languageItem.id)}
    <li class="jm-language-selector__item">
      <a href={languageItem.href}>
        <img
          src={languageItem.src}
          alt={languageItem.alt}
          width="24"
          height="24"
          title={languageItem.alt}
        />
      </a>
    </li>
  {/each}
</ul>


<style>
.jm-language-selector {
  @apply ml-2 mr-16 flex flex-row gap-4;
}

.jm-language-selector__item {
  @apply flex h-6 w-6 object-cover;
}
</style>