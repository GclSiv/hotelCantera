<script setup lang="ts">
/**
 * Encabezado de sección editorial.
 * - subtitle: pequeño rótulo superior con tracking ancho (ej. "HOSPITALIDAD OAXAQUEÑA").
 * - title: título grande en Cormorant Garamond (font-display).
 * - align: alineación del bloque.
 * - light: para fondos oscuros (invierte colores de texto).
 */
interface Props {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

withDefaults(defineProps<Props>(), {
  align: 'left',
  light: false,
})
</script>

<template>
  <div :class="[align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left']">
    <p
      v-if="subtitle"
      :class="[
        'mb-4 text-xs font-medium uppercase tracking-[0.35em]',
        light ? 'text-cream/70' : 'text-terracota',
      ]"
    >
      <span
        v-if="align !== 'center'"
        :class="['mr-3 inline-block h-px w-8 border-t align-middle', light ? 'border-cream/40' : 'border-terracota/40']"
      ></span>
      {{ subtitle }}
    </p>
    <h2
      :class="[
        'font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl',
        light ? 'text-cream' : 'text-obsidian',
      ]"
    >
      {{ title }}
    </h2>
  </div>
</template>
