<script setup lang="ts">
import { rooms } from '@/data/rooms'
import { hotelConfig } from '@/data/hotel'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section id="habitaciones" class="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
    <div v-reveal class="mx-auto max-w-2xl text-center">
      <p class="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-terracota">Encuentra tu espacio</p>
      <h2 class="text-4xl font-medium leading-[1.05] sm:text-5xl">Cada habitación, un descanso con carácter.</h2>
    </div>

    <div class="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
      <div
        v-for="(room, i) in rooms"
        :key="room.id"
        v-reveal
        class="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-0"
      >
        <!-- Fotografía (héroe) con marco dorado desalineado -->
        <figure
          class="group relative lg:col-span-7"
          :class="i % 2 === 1 ? 'lg:order-2 lg:col-start-6' : 'lg:order-1 lg:col-start-1'"
        >
          <div class="relative z-0 aspect-[16/11] overflow-hidden">
            <img
              :src="room.image"
              :alt="room.name"
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
            />
          </div>
          <span
            class="pointer-events-none absolute -inset-3 border border-gold/40 opacity-0 transition-opacity duration-700 group-hover:opacity-100 lg:-inset-4"
          ></span>
        </figure>

        <!-- Tarjeta de texto flotante que invade la imagen -->
        <div
          class="relative z-10 bg-cream p-8 shadow-xl ring-1 ring-obsidian/5 lg:col-span-6 lg:p-12"
          :class="
            i % 2 === 1
              ? 'lg:order-1 lg:col-start-1 lg:mr-[-10%]'
              : 'lg:order-2 lg:col-start-7 lg:ml-[-10%]'
          "
        >
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-terracota">
            {{ String(i + 1).padStart(2, '0') }} · {{ room.subtitle }}
          </p>
          <h3 class="mt-3 font-display text-4xl font-medium leading-tight">{{ room.name }}</h3>
          <p class="mt-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-obsidian/50">
            <span>{{ room.guests }} huéspedes</span>
            <span class="h-1 w-1 rounded-full bg-gold"></span>
            <span>{{ room.size }}</span>
          </p>
          <p class="mt-5 max-w-md text-sm leading-relaxed text-obsidian/65">{{ room.description }}</p>

          <ul class="mt-6 space-y-2">
            <li
              v-for="feature in room.features.slice(0, 3)"
              :key="feature"
              class="flex items-center gap-3 text-sm text-obsidian/70"
            >
              <span class="h-px w-5 bg-gold"></span>{{ feature }}
            </li>
          </ul>

          <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div class="text-cantera">
              <BaseButton :to="room.bookingUrlOverride ?? hotelConfig.bookingUrl" target="_blank" variant="ghost">
                Reservar esta habitación →
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
