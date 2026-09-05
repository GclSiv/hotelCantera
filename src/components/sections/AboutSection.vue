<script setup lang="ts">
import { hotelConfig } from '@/data/hotel'
import { img } from '@/data/images'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import StatItem from '@/components/ui/StatItem.vue'

const s = hotelConfig.stats
const stats = [
  { value: s.roomsCount, label: 'Habitaciones' },
  { value: `${s.historyYears}+`, label: 'Años de historia' },
  { value: `${s.minutesToCenter} min`, label: 'Del Centro Histórico' },
  { value: `${s.satisfactionPercentage}%`, label: 'Satisfacción' },
]
</script>

<template>
  <section id="el-hotel" class="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
    <div class="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <!-- Imagen -->
      <div v-reveal class="relative">
        <div class="aspect-[4/5] overflow-hidden">
          <img
            :src="img('hotel/hotel-03.webp')"
            alt="Interior colonial del Hotel Cantera Real"
            loading="lazy"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-gold/50 lg:block"></div>
      </div>

      <!-- Texto -->
      <div v-reveal="{ delay: 120 }">
        <SectionHeading subtitle="Hospitalidad oaxaqueña" title="Tradición que se siente. Confort que se recuerda." />
        <p class="mt-6 text-base leading-relaxed text-obsidian/65">
          {{ hotelConfig.description }}
        </p>
        <p class="mt-4 text-base leading-relaxed text-obsidian/65">
          Cada espacio del hotel refleja la esencia de Oaxaca: arquitectura, historia,
          gastronomía y una hospitalidad que convierte tu estancia en un recuerdo.
        </p>

        <figure class="mt-8 border-l-2 border-gold/50 pl-5">
          <blockquote class="font-display text-xl italic leading-relaxed text-obsidian/75">
            «No recibimos huéspedes: damos la bienvenida a casa.»
          </blockquote>
          <figcaption class="mt-3 font-display text-2xl italic text-cantera">Equipo Hotel Cantera Real</figcaption>
        </figure>

        <div class="mt-12 grid grid-cols-2 gap-8">
          <div v-for="(stat, i) in stats" :key="stat.label" v-reveal="{ delay: 200 + i * 90 }">
            <StatItem :value="stat.value" :label="stat.label" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
