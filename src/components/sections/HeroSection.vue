<script setup lang="ts">
import { computed } from 'vue'
import { hotelConfig } from '@/data/hotel'
import { useScroll } from '@/composables/useScroll'
import BaseButton from '@/components/ui/BaseButton.vue'
import heroImg from '@/assets/images/hero/hero-01.webp'

// Parallax sutil: la imagen se desplaza más lento que el scroll.
const { y } = useScroll(0)
const parallax = computed(() => `translate3d(0, ${Math.min(y.value * 0.35, 260)}px, 0)`)
</script>

<template>
  <section id="inicio" class="relative flex min-h-screen items-center overflow-hidden">
    <!-- Capa de fondo con parallax (contenedor) + Ken Burns (imagen) -->
    <div class="absolute inset-0 -z-0 scale-110 will-change-transform" :style="{ transform: parallax }">
      <img
        :src="heroImg"
        alt="Fachada colonial del Hotel Cantera Real en Oaxaca"
        fetchpriority="high"
        class="ken-burns h-full w-full object-cover"
      />
    </div>
    <div class="absolute inset-0 bg-obsidian/45"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-obsidian/40"></div>

    <!-- Contenido -->
    <div class="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-10">
      <div class="max-w-2xl">
        <p class="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.4em] text-cream/80 animate-[fadeUp_0.8s_ease-out]">
          <span class="h-px w-10 bg-gold/70"></span>
          Oaxaca · México
        </p>
        <h1 class="font-display text-5xl font-medium leading-[1.03] text-cream drop-shadow-sm sm:text-6xl lg:text-7xl">
          {{ hotelConfig.tagline }}
        </h1>
        <p class="mt-7 max-w-xl text-lg leading-relaxed text-cream/85">{{ hotelConfig.description }}</p>
        <div class="mt-10 flex flex-col gap-4 sm:flex-row">
          <span v-magnetic="0.35" class="inline-block">
            <BaseButton to="#el-hotel" variant="primary">Explorar el hotel</BaseButton>
          </span>
          <span v-magnetic="0.35" class="inline-block text-cream">
            <BaseButton :to="hotelConfig.bookingUrl" target="_blank" variant="secondary">Reservar ahora</BaseButton>
          </span>
        </div>
      </div>
    </div>

    <a
      href="#el-hotel"
      class="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/70 transition-colors hover:text-cream"
      aria-label="Desliza hacia abajo"
    >
      <span class="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      <span class="flex h-9 w-5 items-start justify-center rounded-full border border-cream/40 p-1">
        <span class="h-2 w-0.5 animate-bounce rounded-full bg-cream/70"></span>
      </span>
    </a>
  </section>
</template>

<style scoped>
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes kenburns {
  from { transform: scale(1); }
  to { transform: scale(1.12); }
}
.ken-burns {
  animation: kenburns 22s ease-out infinite alternate;
}
@media (prefers-reduced-motion: reduce) {
  .ken-burns { animation: none; }
}
</style>
