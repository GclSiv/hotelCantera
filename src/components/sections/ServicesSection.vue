<script setup lang="ts">
import { services } from '@/data/services'
import ServiceItem from '@/components/ui/ServiceItem.vue'
</script>

<template>
  <section id="servicios" class="bg-sand/25">
    <div class="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div v-reveal class="mx-auto max-w-2xl text-center">
        <p class="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-terracota">Todo lo que necesitas</p>
        <h2 class="text-4xl font-medium leading-[1.05] sm:text-5xl">Nada que no quieras. Todo lo que mereces.</h2>
      </div>

      <!-- Retícula de líneas ultrafinas (estilo Aquila): el borde exterior superior/izquierdo
           lo da el contenedor; cada celda cierra con borde derecho/inferior. -->
      <div
        v-reveal
        class="mt-16 grid grid-cols-1 border-l border-t border-cantera/15 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="service in services"
          :key="service.id"
          class="border-b border-r border-cantera/15"
        >
          <ServiceItem :service="service" />
        </div>
      </div>
    </div>
  </section>
</template>
