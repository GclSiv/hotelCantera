<script setup lang="ts">
import ThePreloader from '@/components/layout/ThePreloader.vue'
import TheNavbar from '@/components/layout/TheNavbar.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import TheWhatsAppButton from '@/components/layout/TheWhatsAppButton.vue'
import TheStickyBooking from '@/components/layout/TheStickyBooking.vue'
import TrustBar from '@/components/layout/TrustBar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import BookingBar from '@/components/sections/BookingBar.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import RoomsSection from '@/components/sections/RoomsSection.vue'
import PackagesSection from '@/components/sections/PackagesSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import GallerySection from '@/components/sections/GallerySection.vue'
import LocationSection from '@/components/sections/LocationSection.vue'
import TestimoniosSection from '@/components/sections/TestimoniosSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
</script>

<template>
  <ThePreloader />
  <div class="min-h-screen bg-cream text-obsidian antialiased">
    <TheNavbar />

    <main>
      <HeroSection />
      <BookingBar />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <RoomsSection />
      <PackagesSection />
      <ExperienceSection />
      <GallerySection />
      <LocationSection />
      <TestimoniosSection />
      <FaqSection />
      <CtaSection />
    </main>

    <TheFooter />
    <TheWhatsAppButton />
    <TheStickyBooking />
  </div>
</template>
