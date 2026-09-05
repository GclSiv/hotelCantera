<script setup lang="ts">
import { ref, onMounted } from 'vue'
import logoColor from '@/assets/images/brand/logo-color.png'

const hidden = ref(false)
const gone = ref(false)

onMounted(() => {
  // Oculta tras un breve momento (o al cargar la ventana), lo que ocurra antes.
  const finish = () => {
    hidden.value = true
    window.setTimeout(() => (gone.value = true), 700)
  }
  const t = window.setTimeout(finish, 1400)
  window.addEventListener(
    'load',
    () => {
      window.clearTimeout(t)
      window.setTimeout(finish, 400)
    },
    { once: true },
  )
})
</script>

<template>
  <div
    v-if="!gone"
    class="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-cream transition-opacity duration-700"
    :class="hidden ? 'pointer-events-none opacity-0' : 'opacity-100'"
  >
    <img :src="logoColor" alt="Hotel Cantera Real" class="h-16 w-auto sm:h-20" />
    <div class="mt-8 h-px w-40 overflow-hidden bg-obsidian/10">
      <div class="preloader-line h-full bg-gold"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes draw {
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
}
.preloader-line {
  animation: draw 1.4s ease-in-out infinite;
}
</style>
