<script setup lang="ts">
import type { FAQItem } from '@/types/hotel'

interface Props {
  item: FAQItem
  open: boolean
}
defineProps<Props>()
defineEmits<{ toggle: [] }>()
</script>

<template>
  <div class="border-b border-obsidian/10">
    <button
      class="flex w-full items-center justify-between gap-4 py-6 text-left"
      :aria-expanded="open"
      @click="$emit('toggle')"
    >
      <span class="font-display text-xl font-medium text-obsidian sm:text-2xl">
        {{ item.question }}
      </span>
      <span
        class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-obsidian/20 text-obsidian/60 transition-transform duration-500"
        :class="open ? 'rotate-45 border-terracota text-terracota' : ''"
      >
        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 5v14M5 12h14" stroke-linecap="round" />
        </svg>
      </span>
    </button>
    <!-- Acordeón con transición de altura vía grid-rows (0fr → 1fr) -->
    <div
      class="grid transition-all duration-500 ease-out"
      :class="open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
    >
      <div class="overflow-hidden">
        <p class="max-w-2xl pb-6 text-sm leading-relaxed text-obsidian/65">{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>
