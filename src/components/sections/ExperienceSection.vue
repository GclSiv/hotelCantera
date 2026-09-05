<script setup lang="ts">
import { experiences } from '@/data/experiences'
</script>

<template>
  <section id="experiencias" class="bg-obsidian">
    <div class="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div v-reveal class="mx-auto max-w-2xl text-center">
        <p class="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-cream/60">El destino</p>
        <h2 class="text-4xl font-medium leading-[1.05] text-cream sm:text-5xl">Oaxaca no se visita. Se vive.</h2>
      </div>

      <div class="mt-20 space-y-20 lg:mt-28 lg:space-y-32">
        <article
          v-for="(exp, i) in experiences"
          :key="exp.id"
          class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20"
        >
          <!-- Imagen con marco fino desplazado (terracota) -->
          <figure
            v-reveal
            class="group relative"
            :class="i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'"
          >
            <span
              class="pointer-events-none absolute -inset-3 translate-x-3 translate-y-3 border border-terracota/50 transition-transform duration-700 ease-out group-hover:translate-x-0 group-hover:translate-y-0 lg:-inset-4"
            ></span>
            <div class="relative overflow-hidden" :class="i % 2 === 1 ? 'aspect-[4/5]' : 'aspect-[5/4]'">
              <img
                :src="exp.image"
                :alt="exp.title"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
              />
            </div>
          </figure>

          <!-- Texto con marca de agua tipográfica gigante detrás -->
          <div v-reveal="{ delay: 120 }" class="relative" :class="i % 2 === 1 ? 'lg:pr-6' : 'lg:pl-6'">
            <span
              class="pointer-events-none absolute -top-14 -left-3 select-none font-display text-[9rem] font-medium leading-none text-cream/[0.06] lg:text-[13rem]"
            >
              {{ exp.number }}
            </span>
            <div class="relative">
              <h3 class="font-display text-3xl font-medium text-cream sm:text-4xl lg:text-5xl">
                {{ exp.title }}
              </h3>
              <div class="mt-5 h-px w-16 bg-gold/60"></div>
              <p class="mt-5 max-w-md text-base leading-relaxed text-cream/60">{{ exp.description }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
