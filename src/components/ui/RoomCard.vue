<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Room } from '@/types/hotel'
import { hotelConfig } from '@/data/hotel'
import BaseButton from '@/components/ui/BaseButton.vue'

interface Props {
  room: Room
}
const props = defineProps<Props>()

const showDetails = ref(false)
const bookingLink = computed(() => props.room.bookingUrlOverride ?? hotelConfig.bookingUrl)
</script>

<template>
  <article class="group flex flex-col overflow-hidden bg-cream">
    <!-- Imagen con zoom suave -->
    <div class="relative aspect-[4/3] overflow-hidden">
      <img
        :src="room.image"
        :alt="room.name"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <span
        class="absolute left-4 top-4 bg-cream/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-obsidian/70"
      >
        {{ room.subtitle }}
      </span>
    </div>

    <!-- Contenido -->
    <div class="flex flex-1 flex-col px-1 pt-6">
      <h3 class="font-display text-3xl font-medium text-obsidian">{{ room.name }}</h3>
      <p class="mt-2 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-terracota">
        <span>{{ room.guests }} huéspedes</span>
        <span class="h-1 w-1 rounded-full bg-terracota/50"></span>
        <span>{{ room.size }}</span>
      </p>
      <p class="mt-4 text-sm leading-relaxed text-obsidian/60">{{ room.description }}</p>

      <ul class="mt-5 space-y-2">
        <li
          v-for="feature in room.features.slice(0, 3)"
          :key="feature"
          class="flex items-center gap-2 text-sm text-obsidian/70"
        >
          <span class="h-px w-4 bg-gold"></span>
          {{ feature }}
        </li>
      </ul>

      <div class="mt-7 flex flex-col gap-3 pb-1 sm:flex-row">
        <BaseButton variant="secondary" @click="showDetails = true">Descubrir</BaseButton>
        <div class="text-cantera">
          <BaseButton :to="bookingLink" target="_blank" variant="ghost">Reservar ahora →</BaseButton>
        </div>
      </div>
    </div>

    <!-- Modal de detalles -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="showDetails"
          class="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-obsidian/60 p-6 backdrop-blur-sm"
          @click.self="showDetails = false"
        >
          <div class="w-full max-w-2xl overflow-hidden rounded-md bg-cream shadow-2xl">
            <div class="aspect-[16/9] w-full overflow-hidden">
              <img :src="room.image" :alt="room.name" class="h-full w-full object-cover" />
            </div>
            <div class="p-8">
              <p class="text-xs font-semibold uppercase tracking-[0.25em] text-terracota">
                {{ room.subtitle }}
              </p>
              <h3 class="mt-1 font-display text-3xl font-medium text-obsidian">{{ room.name }}</h3>
              <p class="mt-2 text-sm uppercase tracking-[0.15em] text-obsidian/50">
                {{ room.guests }} huéspedes · {{ room.size }}
              </p>
              <p class="mt-4 text-sm leading-relaxed text-obsidian/70">{{ room.description }}</p>

              <div class="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div
                  v-for="feature in room.features"
                  :key="feature"
                  class="flex items-center gap-2 text-sm text-obsidian/70"
                >
                  <span class="h-px w-4 bg-gold"></span>{{ feature }}
                </div>
              </div>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <BaseButton :to="bookingLink" target="_blank" variant="primary">Reservar ahora</BaseButton>
                <BaseButton variant="secondary" @click="showDetails = false">Cerrar</BaseButton>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </article>
</template>
