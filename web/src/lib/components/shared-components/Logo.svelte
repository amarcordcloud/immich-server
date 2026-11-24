<script lang="ts">
  interface Props {
    variant?: 'icon' | 'inline';
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'giant';
    class?: string;
  }

  let { variant = 'icon', size = 'medium', class: className = '' }: Props = $props();

  const sizes = { tiny: 'h-6', small: 'h-8', medium: 'h-10', large: 'h-16', giant: 'h-24' };
</script>

{#if variant === 'icon'}
  <img src="/amarcord-icon.svg" alt="Amarcord logo" class="{sizes[size]} w-auto {className}" draggable="false" />
{:else}
  <img
    src="/amarcord-inline-light.svg"
    alt="Amarcord logo"
    class="{sizes[size]} w-auto dark:hidden {className}"
    draggable="false"
  />
  <img
    src="/amarcord-inline-dark.svg"
    alt="Amarcord logo"
    class="{sizes[size]} hidden w-auto dark:block {className}"
    draggable="false"
  />
{/if}
