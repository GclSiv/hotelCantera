<script setup lang="ts">
import { ref, onMounted, onUnmounted, useTemplateRef } from 'vue'

/**
 * Bloque estadístico con contador animado (cuenta de 0 al valor al entrar en viewport).
 * `value` puede traer sufijo/prefijo no numérico: "20+", "5 min", "98%" — se preserva.
 */
interface Props {
  value: string | number
  label: string
}
const props = defineProps<Props>()

const root = useTemplateRef<HTMLElement>('root')
const display = ref('0')

// Separa la parte numérica del resto (sufijo/prefijo).
const raw = String(props.value)
const match = raw.match(/(\d+)/)
const target = match ? parseInt(match[1] as string, 10) : 0
const render = (n: number) => (match ? raw.replace(/\d+/, String(n)) : raw)

let io: IntersectionObserver | null = null

function animate() {
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (reduce || !match) {
    display.value = raw
    return
  }
  const duration = 1400
  const start = performance.now()
  function tick(now: number) {
    const t = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
    display.value = render(Math.round(eased * target))
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  display.value = render(0)
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          animate()
          io?.disconnect()
        }
      }
    },
    { threshold: 0.4 },
  )
  if (root.value) io.observe(root.value)
})
onUnmounted(() => io?.disconnect())
</script>

<template>
  <div ref="root" class="text-center sm:text-left">
    <p class="font-display text-5xl font-medium leading-none text-cantera sm:text-6xl">
      {{ display }}
    </p>
    <p class="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-obsidian/50">{{ label }}</p>
  </div>
</template>
