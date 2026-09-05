<script setup lang="ts">
import { ref } from 'vue'
import { hotelConfig } from '@/data/hotel'
import BaseButton from '@/components/ui/BaseButton.vue'

const checkIn = ref('')
const checkOut = ref('')
const guests = ref(2)
const showModal = ref(false)

function search() {
  showModal.value = true
}

function goToBooking() {
  window.open(hotelConfig.bookingUrl, '_blank', 'noopener')
  showModal.value = false
}
</script>

<template>
  <div class="relative z-30 mx-auto -mt-16 max-w-5xl px-6 lg:-mt-14 lg:px-10">
    <div class="rounded-md bg-cream shadow-2xl ring-1 ring-obsidian/5">
      <form
        class="grid grid-cols-1 divide-y divide-obsidian/10 md:grid-cols-[1fr_1fr_1fr_auto] md:divide-x md:divide-y-0"
        @submit.prevent="search"
      >
        <!-- Check-in -->
        <label class="flex flex-col gap-1 px-6 py-5">
          <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-terracota">Check-in</span>
          <input v-model="checkIn" type="date" class="bg-transparent text-sm text-obsidian outline-none" />
        </label>

        <!-- Check-out -->
        <label class="flex flex-col gap-1 px-6 py-5">
          <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-terracota">Check-out</span>
          <input v-model="checkOut" type="date" class="bg-transparent text-sm text-obsidian outline-none" />
        </label>

        <!-- Huéspedes -->
        <label class="flex flex-col gap-1 px-6 py-5">
          <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-terracota">Huéspedes</span>
          <select v-model.number="guests" class="bg-transparent text-sm text-obsidian outline-none">
            <option :value="1">1 huésped</option>
            <option :value="2">2 huéspedes</option>
            <option :value="3">3 huéspedes</option>
            <option :value="4">4 huéspedes</option>
          </select>
        </label>

        <!-- Botón -->
        <div class="flex items-stretch p-3">
          <BaseButton type="submit" variant="primary" block>Buscar disponibilidad</BaseButton>
        </div>
      </form>
    </div>

    <!-- Modal de reserva -->
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
          v-if="showModal"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/60 px-6 backdrop-blur-sm"
          @click.self="showModal = false"
        >
          <div class="w-full max-w-md rounded-md bg-cream p-8 shadow-2xl">
            <p class="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-terracota">Reserva directa</p>
            <h3 class="font-display text-3xl font-medium text-obsidian">Continúa tu reserva</h3>
            <div class="mt-5 space-y-1 text-sm text-obsidian/70">
              <p><strong class="font-medium text-obsidian">Entrada:</strong> {{ checkIn || 'Por definir' }}</p>
              <p><strong class="font-medium text-obsidian">Salida:</strong> {{ checkOut || 'Por definir' }}</p>
              <p><strong class="font-medium text-obsidian">Huéspedes:</strong> {{ guests }}</p>
            </div>
            <p class="mt-5 text-sm leading-relaxed text-obsidian/60">
              Te llevaremos a nuestra plataforma segura de reservas para confirmar disponibilidad y
              completar tu estancia.
            </p>
            <div class="mt-7 flex flex-col gap-3 sm:flex-row">
              <BaseButton variant="primary" block @click="goToBooking">Ir a reservar</BaseButton>
              <BaseButton variant="secondary" block @click="showModal = false">Cancelar</BaseButton>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
