<script setup lang="ts">
import type { HotelService } from '@/types/hotel'

interface Props {
  service: HotelService
}
defineProps<Props>()

/** Iconos SVG (línea, 24x24) por iconName — sin dependencias externas. */
const icons: Record<string, string[]> = {
  wifi: ['M5 12.55a11 11 0 0 1 14.08 0', 'M1.42 9a16 16 0 0 1 21.16 0', 'M8.53 16.11a6 6 0 0 1 6.95 0', 'M12 20h.01'],
  utensils: ['M4 3v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3', 'M6 12v9', 'M18 3c-1.7 1.3-3 3.5-3 6a3 3 0 0 0 3 3v9'],
  car: [
    'M3 13l2-5.4A2 2 0 0 1 6.9 6.3h10.2A2 2 0 0 1 19 7.6L21 13v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z',
    'M6.5 16h.01',
    'M17.5 16h.01',
  ],
  wind: ['M9.6 4.6A2 2 0 1 1 11 8H2', 'M12.6 19.4A2 2 0 1 0 14 16H2', 'M17.7 7.7A2.5 2.5 0 1 1 19.5 12H2'],
  heart: ['M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 1 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z'],
  sparkles: ['M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z', 'M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z'],
}
</script>

<template>
  <!-- Celda con mucho aire; las líneas divisorias las pone la sección (estilo Aquila) -->
  <div class="group flex h-full flex-col gap-5 p-10 transition-colors duration-500 lg:p-12">
    <span class="text-cantera transition-all duration-500 group-hover:-translate-y-1 group-hover:text-terracota">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-9 w-9"
        aria-hidden="true"
      >
        <path v-for="(d, i) in icons[service.iconName] ?? []" :key="i" :d="d" />
      </svg>
    </span>
    <div>
      <h3 class="font-display text-2xl font-medium text-obsidian">{{ service.name }}</h3>
      <p class="mt-2 text-sm leading-relaxed text-obsidian/55">{{ service.description }}</p>
    </div>
  </div>
</template>
