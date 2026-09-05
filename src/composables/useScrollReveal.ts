import type { Directive } from 'vue'

interface RevealOptions {
  /** Retraso de entrada en ms (para efecto stagger en listas). */
  delay?: number
  /** Desplazamiento vertical inicial en px. */
  y?: number
}

interface RevealEl extends HTMLElement {
  __revealIO?: IntersectionObserver
}

/**
 * Directiva `v-reveal`: revela el elemento con un fade-up lento e intencionado
 * cuando entra en el viewport (motion "slow luxury"). Autocontenida — usa estilos
 * inline y un IntersectionObserver, sin dependencias ni CSS global.
 *
 * Uso:  <div v-reveal>            → reveal simple
 *       <div v-reveal="{ delay: 120 }">  → con retraso (stagger)
 */
export const vReveal: Directive<RevealEl, RevealOptions | undefined> = {
  mounted(el, binding) {
    // Respeta usuarios que prefieren menos movimiento.
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (reduce) return

    const delay = binding.value?.delay ?? 0
    const y = binding.value?.y ?? 26

    el.style.opacity = '0'
    el.style.transform = `translateY(${y}px)`
    el.style.transition = `opacity 900ms cubic-bezier(0.16,0.84,0.44,1) ${delay}ms, transform 900ms cubic-bezier(0.16,0.84,0.44,1) ${delay}ms`
    el.style.willChange = 'opacity, transform'

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'none'
            io.unobserve(el)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    io.observe(el)
    el.__revealIO = io
  },
  unmounted(el) {
    el.__revealIO?.disconnect()
  },
}
