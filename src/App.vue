<script setup lang="ts">
import TheNavbar from '@/components/layout/TheNavbar.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import BookingBar from '@/components/sections/BookingBar.vue'
</script>

<template>
  <div class="min-h-screen bg-cream text-obsidian antialiased">
    <TheNavbar />

    <main>
      <HeroSection />
      <BookingBar />

      <!-- Secciones siguientes (Fase 5): El Hotel, Servicios, Habitaciones,
           Experiencias, Galería, Ubicación, Testimonios, FAQ, CTA -->
      <section id="el-hotel" class="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <p class="text-center font-display text-2xl text-obsidian/30">
          Próxima fase — El Hotel, Servicios, Habitaciones y más…
        </p>
      </section>
    </main>

    <TheFooter />
  </div>
</template>
