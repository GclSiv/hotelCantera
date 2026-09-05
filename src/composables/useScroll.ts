import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Rastrea la posición de scroll vertical de la página.
 * Devuelve `y` (px) e `isScrolled` (true tras superar `threshold`),
 * útil para el navbar transparente → sólido.
 */
export function useScroll(threshold = 40) {
  const y = ref(0)
  const isScrolled = ref(false)

  function onScroll() {
    y.value = window.scrollY
    isScrolled.value = window.scrollY > threshold
  }

  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { y, isScrolled }
}
