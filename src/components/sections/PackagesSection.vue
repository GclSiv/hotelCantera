<script setup lang="ts">
import { computed } from 'vue'
import { packages } from '@/data/packages'
import { hotelConfig } from '@/data/hotel'
import BaseButton from '@/components/ui/BaseButton.vue'

const feature = computed(() => packages[0])
const rest = computed(() => packages.slice(1))
</script>

<template>
  <section id="paquetes" class="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
    <div v-reveal class="mx-auto max-w-2xl text-center">
      <p class="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-terracota">Paquetes</p>
      <h2 class="text-4xl font-medium leading-[1.05] sm:text-5xl">Estancias pensadas para cada historia.</h2>
    </div>

    <div class="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-2">
      <!-- Paquete destacado (grande) -->
      <article
        v-if="feature"
        v-reveal
        class="group relative overflow-hidden lg:col-span-2 lg:row-span-2 lg:min-h-[560px]"
      >
        <img
          :src="feature.image"
          :alt="feature.name"
          loading="lazy"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/30 to-transparent"></div>
        <div class="relative flex h-full flex-col justify-end p-8 lg:p-12">
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{{ feature.subtitle }}</p>
          <h3 class="mt-3 max-w-md font-display text-4xl font-medium text-cream lg:text-5xl">{{ feature.name }}</h3>
          <p class="mt-4 max-w-md text-sm leading-relaxed text-cream/75">{{ feature.description }}</p>
          <ul class="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            <li v-for="inc in feature.includes" :key="inc" class="flex items-center gap-2 text-xs text-cream/70">
              <span class="h-px w-4 bg-gold"></span>{{ inc }}
            </li>
          </ul>
          <div class="mt-7 text-cream">
            <BaseButton :to="hotelConfig.whatsappUrl" target="_blank" variant="secondary">Consultar</BaseButton>
          </div>
        </div>
      </article>

      <!-- Paquetes compactos -->
      <article
        v-for="(pkg, i) in rest"
        :key="pkg.id"
        v-reveal="{ delay: 100 + i * 100 }"
        class="group relative overflow-hidden lg:col-span-1 lg:min-h-[268px]"
      >
        <img
          :src="pkg.image"
          :alt="pkg.name"
          loading="lazy"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/25 to-transparent"></div>
        <div class="relative flex h-full flex-col justify-end p-7">
          <p class="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">{{ pkg.subtitle }}</p>
          <h3 class="mt-2 font-display text-2xl font-medium text-cream">{{ pkg.name }}</h3>
          <a
            :href="hotelConfig.whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-3 inline-flex w-fit items-center text-xs font-medium uppercase tracking-[0.15em] text-cream/85 transition-colors duration-500 hover:text-gold"
          >
            Consultar →
          </a>
        </div>
      </article>
    </div>
  </section>
</template>
