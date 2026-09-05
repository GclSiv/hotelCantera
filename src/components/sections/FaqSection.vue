<script setup lang="ts">
import { ref } from 'vue'
import { faqs } from '@/data/faq'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import FAQItem from '@/components/ui/FAQItem.vue'

// Un solo panel abierto a la vez.
const openId = ref<number | null>(faqs[0]?.id ?? null)

function toggle(id: number) {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <section id="faq" class="bg-sand/30">
    <div class="mx-auto max-w-3xl px-6 py-24 lg:py-32">
      <SectionHeading v-reveal subtitle="Preguntas frecuentes" title="Todo lo que necesitas saber." align="center" />

      <div v-reveal="{ delay: 100 }" class="mt-14">
        <FAQItem
          v-for="item in faqs"
          :key="item.id"
          :item="item"
          :open="openId === item.id"
          @toggle="toggle(item.id)"
        />
      </div>
    </div>
  </section>
</template>
