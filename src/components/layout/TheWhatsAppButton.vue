<script setup lang="ts">
import { hotelConfig } from '@/data/hotel'
</script>

<template>
  <a
    :href="hotelConfig.whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    class="group fixed bottom-24 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-cantera text-cream shadow-xl transition-all duration-500 hover:scale-105 hover:bg-terracota lg:bottom-6"
  >
    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-cantera/40"></span>
    <svg viewBox="0 0 24 24" class="relative h-7 w-7 fill-current" aria-hidden="true">
      <path
        d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.05-1.32A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
      />
    </svg>
  </a>
</template>
