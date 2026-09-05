<script setup lang="ts">
import { hotelConfig } from '@/data/hotel'
import { nearbyPlaces } from '@/data/location'

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(hotelConfig.contact.address)}&output=embed`

const culture = nearbyPlaces.filter((p) => p.category === 'culture')
const dining = nearbyPlaces.filter((p) => p.category === 'dining')
</script>

<template>
  <section id="ubicacion" class="overflow-hidden bg-cream">
    <div class="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div class="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-10">
        <!-- Mapa con marco de arena desalineado (offset 16px) -->
        <div v-reveal class="relative lg:col-span-7 lg:mt-12">
          <div class="absolute left-4 top-4 h-full w-full bg-sand"></div>
          <div class="relative overflow-hidden shadow-lg">
            <iframe
              :src="mapSrc"
              title="Ubicación del Hotel Cantera Real en Oaxaca"
              loading="lazy"
              class="h-[380px] w-full grayscale-[0.25] lg:h-[520px]"
              style="border: 0"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <!-- Puntos de interés editoriales -->
        <div v-reveal="{ delay: 120 }" class="lg:col-span-5">
          <p class="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-terracota">
            <span class="mr-3 inline-block h-px w-8 border-t border-terracota/40 align-middle"></span>
            Ubicación privilegiada
          </p>
          <h2 class="font-display text-4xl font-medium leading-[1.05] sm:text-5xl">En el corazón de Oaxaca.</h2>
          <p class="mt-5 text-sm leading-relaxed text-obsidian/60">
            A pocos pasos de los principales atractivos del Centro Histórico.
          </p>

          <!-- Cultura -->
          <div class="mt-12">
            <h3 class="mb-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-obsidian/40">Cultura</h3>
            <ul>
              <li
                v-for="(place, i) in culture"
                :key="place.name"
                class="flex items-baseline justify-between gap-4 border-b border-obsidian/10 py-4"
              >
                <span class="flex items-baseline gap-4">
                  <span class="text-xs tabular-nums text-gold/70">{{ String(i + 1).padStart(2, '0') }}</span>
                  <span class="font-display text-xl text-obsidian/85">{{ place.name }}</span>
                </span>
                <span class="whitespace-nowrap text-[11px] uppercase tracking-[0.25em] text-gold">
                  {{ place.distance }} · {{ place.timeWalking }}
                </span>
              </li>
            </ul>
          </div>

          <!-- Gastronomía (bloque desplazado para asimetría) -->
          <div class="mt-10 lg:ml-8">
            <h3 class="mb-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-obsidian/40">Gastronomía</h3>
            <ul>
              <li
                v-for="(place, i) in dining"
                :key="place.name"
                class="flex items-baseline justify-between gap-4 border-b border-obsidian/10 py-4"
              >
                <span class="flex items-baseline gap-4">
                  <span class="text-xs tabular-nums text-gold/70">{{ String(i + 1).padStart(2, '0') }}</span>
                  <span class="font-display text-xl text-obsidian/85">{{ place.name }}</span>
                </span>
                <span class="whitespace-nowrap text-[11px] uppercase tracking-[0.25em] text-gold">
                  {{ place.distance }} · {{ place.timeWalking }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
