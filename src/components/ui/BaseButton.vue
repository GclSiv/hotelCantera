<script setup lang="ts">
import { computed } from 'vue'

/**
 * Botón premium reutilizable.
 * - variant 'primary': verde cantera, hover hacia terracota.
 * - variant 'secondary': minimalista con borde fino / transparente.
 * - variant 'ghost': texto con hover sutil, sin fondo.
 * Si se pasa `to`, se renderiza como <a>; si no, como <button>.
 */
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost'
  to?: string
  target?: string
  type?: 'button' | 'submit'
  block?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
  block: false,
})

const base =
  'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] ' +
  'rounded-sm transition-all duration-500 ease-out cursor-pointer select-none ' +
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2'

const variants: Record<string, string> = {
  primary: 'bg-cantera text-cream hover:bg-terracota shadow-lg hover:shadow-xl',
  secondary:
    'border border-current/40 text-current hover:border-current/80 bg-transparent hover:bg-current/5',
  ghost: 'text-current hover:text-terracota px-0 py-1 tracking-[0.15em]',
}

const classes = computed(() => [base, variants[props.variant] ?? '', props.block ? 'w-full' : ''])
const isExternal = computed(() => !!props.to && /^https?:\/\//.test(props.to))
</script>

<template>
  <a
    v-if="to"
    :href="to"
    :target="target"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :class="classes"
  >
    <slot />
  </a>
  <button v-else :type="type" :class="classes">
    <slot />
  </button>
</template>
