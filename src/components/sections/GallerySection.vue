<script setup lang="ts">
import { ref } from 'vue'
import { img, imageKeys } from '@/data/images'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import GalleryLightbox from '@/components/ui/GalleryLightbox.vue'

// Selección curada para el masonry (excluye alias de experiencias).
const galleryImages = imageKeys('gallery/gallery-').map((k) => img(k))

const lightboxOpen = ref(false)
const startIndex = ref(0)

function openAt(i: number) {
  startIndex.value = i
  lightboxOpen.value = true
}
</script>

<template>
  <section id="galeria" class="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
    <SectionHeading v-reveal subtitle="Galería" title="Detalles que permanecen." align="center" />

    <!-- Masonry con CSS columns -->
    <div class="mt-14 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
      <button
        v-for="(src, i) in galleryImages"
        :key="i"
        v-reveal="{ delay: (i % 3) * 90 }"
        class="group block w-full overflow-hidden"
        @click="openAt(i)"
      >
        <img
          :src="src"
          :alt="`Hotel Cantera Real — foto ${i + 1}`"
          loading="lazy"
          class="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </button>
    </div>

    <GalleryLightbox
      :open="lightboxOpen"
      :images="galleryImages"
      :start-index="startIndex"
      @close="lightboxOpen = false"
    />
  </section>
</template>
