<script setup lang="ts">
import { hotelConfig } from '@/data/hotel'
import { img } from '@/data/images'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section class="relative overflow-hidden">
    <img
      :src="img('hero/hero-03.webp')"
      alt="Patio colonial del Hotel Cantera Real"
      loading="lazy"
      class="absolute inset-0 h-full w-full object-cover"
    />
    <div class="absolute inset-0 bg-obsidian/70"></div>

    <div class="relative mx-auto max-w-4xl px-6 py-28 text-center lg:py-40">
      <p v-reveal class="mb-5 text-xs font-medium uppercase tracking-[0.4em] text-gold">Reserva directa</p>
      <h2 v-reveal="{ delay: 80 }" class="font-display text-4xl font-medium leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
        Tu próxima historia comienza aquí.
      </h2>
      <p v-reveal="{ delay: 160 }" class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
        Reserva directamente y vive Oaxaca desde una perspectiva diferente, con la
        hospitalidad y el confort de Hotel Cantera Real.
      </p>
      <div v-reveal="{ delay: 240 }" class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <span v-magnetic="0.35" class="inline-block">
          <BaseButton :to="hotelConfig.bookingUrl" target="_blank" variant="primary">Reservar ahora</BaseButton>
        </span>
        <span v-magnetic="0.35" class="inline-block text-cream">
          <BaseButton :to="hotelConfig.whatsappUrl" target="_blank" variant="secondary">Hablar por WhatsApp</BaseButton>
        </span>
      </div>
    </div>
  </section>
</template>
