<script setup lang="ts">
import { ref, computed } from 'vue'
import { testimonials } from '@/data/testimonials'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TestimonialCard from '@/components/ui/TestimonialCard.vue'

const active = ref(0)
const current = computed(() => testimonials[active.value])

function prev() {
  active.value = (active.value - 1 + testimonials.length) % testimonials.length
}
function next() {
  active.value = (active.value + 1) % testimonials.length
}
</script>

<template>
  <section id="testimonios" class="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
    <SectionHeading v-reveal subtitle="Huéspedes" title="Historias que se quedan." align="center" />

    <div class="relative mt-16 min-h-[16rem]">
      <Transition
        mode="out-in"
        enter-active-class="transition duration-400 ease-out"
        enter-from-class="opacity-0 translate-x-6"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-6"
      >
        <TestimonialCard v-if="current" :key="active" :testimonial="current" />
      </Transition>
    </div>

    <!-- Navegación manual -->
    <div class="mt-12 flex items-center justify-center gap-6">
      <button
        class="flex h-11 w-11 items-center justify-center rounded-full border border-obsidian/20 text-obsidian/60 transition hover:border-terracota hover:text-terracota"
        aria-label="Testimonio anterior"
        @click="prev"
      >
        <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M15 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <div class="flex gap-2">
        <button
          v-for="(t, i) in testimonials"
          :key="t.id"
          class="h-1.5 rounded-full transition-all duration-300"
          :class="i === active ? 'w-6 bg-terracota' : 'w-1.5 bg-obsidian/20'"
          :aria-label="`Ir al testimonio ${i + 1}`"
          @click="active = i"
        ></button>
      </div>

      <button
        class="flex h-11 w-11 items-center justify-center rounded-full border border-obsidian/20 text-obsidian/60 transition hover:border-terracota hover:text-terracota"
        aria-label="Testimonio siguiente"
        @click="next"
      >
        <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </section>
</template>
