<script setup lang="ts">
// Franja de confianza — solo afirmaciones verificables (nada de calificaciones inventadas).
const items = [
  'Reserva directa sin comisiones',
  'Atención personalizada',
  'En el Centro Histórico',
  'También en Booking · Expedia',
]
</script>

<template>
  <div class="border-y border-obsidian/10 bg-cream">
    <div
      class="mx-auto flex max-w-7xl flex-col items-center justify-center gap-x-10 gap-y-3 px-6 py-6 text-center sm:flex-row lg:px-10"
    >
      <template v-for="(item, i) in items" :key="item">
        <span class="text-[11px] font-medium uppercase tracking-[0.25em] text-obsidian/55">{{ item }}</span>
        <span v-if="i < items.length - 1" class="hidden h-1 w-1 rounded-full bg-gold sm:block"></span>
      </template>
    </div>
  </div>
</template>
