<script setup lang="ts">
import { ref } from 'vue'
import { useScroll } from '@/composables/useScroll'
import { hotelConfig } from '@/data/hotel'
import { navLinks } from '@/data/navigation'
import BaseButton from '@/components/ui/BaseButton.vue'
import logoColor from '@/assets/images/brand/logo-color.png'
import logoWhite from '@/assets/images/brand/logo-white.png'

const { isScrolled } = useScroll(40)
const mobileOpen = ref(false)

function close() {
  mobileOpen.value = false
}
</script>

<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-500',
      isScrolled ? 'bg-cream/90 py-3 shadow-lg backdrop-blur-md' : 'bg-transparent py-5',
    ]"
  >
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
      <!-- Logo -->
      <a href="#inicio" class="flex items-center" @click="close">
        <img
          :src="isScrolled ? logoColor : logoWhite"
          alt="Hotel Cantera Real"
          class="h-11 w-auto transition-all duration-500 sm:h-12"
        />
      </a>

      <!-- Enlaces desktop -->
      <ul class="hidden items-center gap-8 lg:flex">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            :class="[
              'text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-500',
              isScrolled ? 'text-obsidian/70 hover:text-terracota' : 'text-cream/80 hover:text-cream',
            ]"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- CTA desktop -->
      <div class="hidden lg:block">
        <BaseButton :to="hotelConfig.bookingUrl" target="_blank" variant="primary">
          Reservar ahora
        </BaseButton>
      </div>

      <!-- Botón hamburguesa -->
      <button
        class="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
        :aria-expanded="mobileOpen"
        aria-label="Abrir menú"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="sr-only">Menú</span>
        <span class="relative block h-4 w-6">
          <span
            :class="[
              'absolute left-0 block h-0.5 w-6 transition-all duration-300',
              mobileOpen ? 'top-1/2 rotate-45 bg-obsidian' : 'top-0',
              !mobileOpen && (isScrolled ? 'bg-obsidian' : 'bg-cream'),
            ]"
          ></span>
          <span
            :class="[
              'absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 transition-all duration-300',
              mobileOpen ? 'opacity-0' : 'opacity-100',
              isScrolled ? 'bg-obsidian' : 'bg-cream',
            ]"
          ></span>
          <span
            :class="[
              'absolute left-0 block h-0.5 w-6 transition-all duration-300',
              mobileOpen ? 'top-1/2 -rotate-45 bg-obsidian' : 'bottom-0',
              !mobileOpen && (isScrolled ? 'bg-obsidian' : 'bg-cream'),
            ]"
          ></span>
        </span>
      </button>
    </nav>

    <!-- Menú móvil -->
    <Transition
      enter-active-class="transition duration-400 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileOpen"
        class="absolute inset-x-0 top-full origin-top border-t border-obsidian/5 bg-cream/95 backdrop-blur-md lg:hidden"
      >
        <ul class="flex flex-col gap-1 px-6 py-6">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="block border-b border-obsidian/5 py-3 font-display text-2xl text-obsidian/80 transition-colors hover:text-terracota"
              @click="close"
            >
              {{ link.label }}
            </a>
          </li>
          <li class="pt-4">
            <BaseButton :to="hotelConfig.bookingUrl" target="_blank" variant="primary" block>
              Reservar ahora
            </BaseButton>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
