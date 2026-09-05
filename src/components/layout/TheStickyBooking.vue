<script setup lang="ts">
import { computed } from 'vue'
import { useScroll } from '@/composables/useScroll'
import { hotelConfig } from '@/data/hotel'

// Barra de reserva persistente para móvil/tablet (en desktop el navbar ya lleva el CTA).
const { y } = useScroll(0)
const show = computed(() => y.value > 640)
</script>

<template>
  <Transition
    enter-active-class="transition duration-400 ease-out"
    enter-from-class="translate-y-full"
    enter-to-class="translate-y-0"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="translate-y-0"
    leave-to-class="translate-y-full"
  >
    <div
      v-show="show"
      class="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-obsidian/10 bg-cream/95 p-3 shadow-[0_-8px_30px_-12px_rgba(30,27,24,0.25)] backdrop-blur-md lg:hidden"
    >
      <a
        :href="hotelConfig.bookingUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex flex-1 items-center justify-center rounded-sm bg-cantera px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-cream transition-colors duration-500 hover:bg-terracota"
      >
        Reservar ahora
      </a>
      <a
        :href="hotelConfig.whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm border border-obsidian/20 text-cantera transition-colors duration-500 hover:border-cantera"
      >
        <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current" aria-hidden="true">
          <path
            d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.05-1.32A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
          />
        </svg>
      </a>
    </div>
  </Transition>
</template>
