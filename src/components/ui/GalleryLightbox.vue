<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

interface Props {
  open: boolean
  images: string[]
  startIndex?: number
}
const props = withDefaults(defineProps<Props>(), { startIndex: 0 })
const emit = defineEmits<{ close: [] }>()

const current = ref(props.startIndex)

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) current.value = props.startIndex
  },
)

const currentSrc = computed(() => props.images[current.value] ?? '')

function prev() {
  current.value = (current.value - 1 + props.images.length) % props.images.length
}
function next() {
  current.value = (current.value + 1) % props.images.length
}

function onKey(e: KeyboardEvent) {
  if (!props.open) return
  if (e.key === 'Escape') emit('close')
  else if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
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
        v-if="open"
        class="fixed inset-0 z-[120] flex items-center justify-center bg-obsidian/90 p-4 backdrop-blur-sm sm:p-10"
        @click.self="emit('close')"
      >
        <!-- Cerrar -->
        <button
          class="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition hover:border-cream hover:text-cream"
          aria-label="Cerrar galería"
          @click="emit('close')"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
          </svg>
        </button>

        <!-- Anterior -->
        <button
          class="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition hover:border-cream hover:text-cream sm:left-6"
          aria-label="Imagen anterior"
          @click.stop="prev"
        >
          <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M15 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <!-- Imagen -->
        <Transition
          mode="out-in"
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <img
            :key="current"
            :src="currentSrc"
            alt="Galería del Hotel Cantera Real"
            class="max-h-[82vh] max-w-[86vw] object-contain shadow-2xl"
          />
        </Transition>

        <!-- Siguiente -->
        <button
          class="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition hover:border-cream hover:text-cream sm:right-6"
          aria-label="Imagen siguiente"
          @click.stop="next"
        >
          <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <!-- Contador -->
        <p class="absolute bottom-6 text-xs uppercase tracking-[0.3em] text-cream/60">
          {{ current + 1 }} / {{ images.length }}
        </p>
      </div>
    </Transition>
  </Teleport>
</template>
