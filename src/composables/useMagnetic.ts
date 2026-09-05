import type { Directive } from 'vue'

interface MagneticEl extends HTMLElement {
  __magMove?: (e: MouseEvent) => void
  __magLeave?: () => void
}

/**
 * Directiva `v-magnetic`: aplica un sutil efecto imán — el elemento (idealmente
 * un envoltorio del botón) se desplaza ligeramente hacia el cursor. Detalle de
 * lujo típico de plantillas premium. Se desactiva en dispositivos táctiles.
 *
 * Uso:  <span v-magnetic><BaseButton .../></span>
 *       <span v-magnetic="0.4">…</span>   (intensidad personalizada)
 */
export const vMagnetic: Directive<MagneticEl, number | undefined> = {
  mounted(el, binding) {
    if (typeof window === 'undefined') return
    if (window.matchMedia?.('(hover: none)').matches) return

    const strength = binding.value ?? 0.3
    el.style.display = el.style.display || 'inline-block'
    el.style.transition = 'transform 0.35s cubic-bezier(0.16,0.84,0.44,1)'
    el.style.willChange = 'transform'

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - (r.left + r.width / 2)
      const y = e.clientY - (r.top + r.height / 2)
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }
    const leave = () => {
      el.style.transform = 'translate(0, 0)'
    }

    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    el.__magMove = move
    el.__magLeave = leave
  },
  unmounted(el) {
    if (el.__magMove) el.removeEventListener('mousemove', el.__magMove)
    if (el.__magLeave) el.removeEventListener('mouseleave', el.__magLeave)
  },
}
