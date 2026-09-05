<script setup lang="ts">
import { computed } from 'vue'
import type { Testimonial } from '@/types/hotel'

interface Props {
  testimonial: Testimonial
}
const props = defineProps<Props>()

// Monograma de iniciales (no usamos fotos de huéspedes).
const initials = computed(() =>
  props.testimonial.author
    .split(' ')
    .map((w) => w.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase(),
)
</script>

<template>
  <figure class="mx-auto max-w-3xl text-center">
    <svg viewBox="0 0 24 24" class="mx-auto mb-8 h-10 w-10 fill-terracota/25" aria-hidden="true">
      <path
        d="M9.9 5C6.6 6.6 4.5 9.7 4.5 13.4c0 3 1.7 5.1 4.2 5.1 2 0 3.6-1.5 3.6-3.5 0-1.9-1.4-3.3-3.2-3.3-.4 0-.8.1-1 .2.3-1.6 1.8-3.4 3.8-4.4L9.9 5zm9 0c-3.3 1.6-5.4 4.7-5.4 8.4 0 3 1.7 5.1 4.2 5.1 2 0 3.6-1.5 3.6-3.5 0-1.9-1.4-3.3-3.2-3.3-.4 0-.8.1-1 .2.3-1.6 1.8-3.4 3.8-4.4L18.9 5z"
      />
    </svg>
    <blockquote class="font-display text-2xl font-medium leading-snug text-obsidian sm:text-3xl">
      “{{ testimonial.text }}”
    </blockquote>
    <figcaption class="mt-8 flex flex-col items-center gap-3">
      <span
        class="flex h-12 w-12 items-center justify-center rounded-full border border-cantera/30 font-display text-lg font-medium text-cantera"
      >
        {{ initials }}
      </span>
      <span>
        <span class="block text-sm font-semibold uppercase tracking-[0.2em] text-terracota">
          {{ testimonial.author }}
        </span>
        <span class="mt-1 block text-sm text-obsidian/50">{{ testimonial.origin }}</span>
      </span>
    </figcaption>
  </figure>
</template>
