<script setup lang="ts">
import { ref, computed } from 'vue'
import { hotelConfig } from '@/data/hotel'
import { navLinks } from '@/data/navigation'
import BaseButton from '@/components/ui/BaseButton.vue'
import logoWhite from '@/assets/images/brand/logo-white.png'

const year = new Date().getFullYear()

// Newsletter (sitio estático): abre el cliente de correo con el mensaje prellenado.
const email = ref('')
function subscribe() {
  const body = `Deseo suscribirme al boletín con el correo: ${email.value}`
  window.location.href = `mailto:${hotelConfig.contact.email}?subject=${encodeURIComponent(
    'Suscripción al boletín',
  )}&body=${encodeURIComponent(body)}`
}

// Redes sociales: convertimos el objeto social en una lista renderizable.
const socials = computed(() =>
  Object.entries(hotelConfig.social)
    .filter(([, url]) => !!url)
    .map(([platform, url]) => ({ platform, url: url as string })),
)

// Iconos SVG minimalistas por red social (inline, sin librerías).
const socialPaths: Record<string, string> = {
  instagram:
    'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 3.3a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 10.7a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4zm6.8-11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
  facebook:
    'M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.5-1.5h1.6V3.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H7.6V13h2.6v8h3.3z',
  tiktok:
    'M16.5 3c.3 2.1 1.5 3.4 3.5 3.5v2.4c-1.2.1-2.3-.3-3.5-1v6.6c0 3.4-2.6 5.9-5.9 5.5-2.9-.3-4.9-2.8-4.6-5.7.3-2.6 2.6-4.5 5.2-4.3v2.5c-.4-.1-.9-.1-1.3 0-1.2.3-1.9 1.4-1.6 2.6.3 1.1 1.4 1.8 2.6 1.5 1-.2 1.7-1.1 1.7-2.2V3h3.4z',
  twitter:
    'M18.9 2.8h3.3l-7.2 8.2 8.5 11.2h-6.7l-5.2-6.8-6 6.8H2.3l7.7-8.8L1.8 2.8h6.8l4.7 6.3 5.6-6.3zm-1.2 17.7h1.8L7.1 4.6H5.1l12.6 15.9z',
}
</script>

<template>
  <footer id="contacto" class="bg-obsidian text-cream/70">
    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <!-- Newsletter -->
      <div class="mb-14 flex flex-col gap-6 border-b border-cream/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h3 class="font-display text-3xl font-medium text-cream sm:text-4xl">Recibe nuestras novedades</h3>
          <p class="mt-2 max-w-md text-sm text-cream/60">Ofertas y experiencias de Oaxaca, directo a tu correo.</p>
        </div>
        <form class="flex w-full max-w-md items-end gap-3" @submit.prevent="subscribe">
          <input
            v-model="email"
            type="email"
            required
            placeholder="Tu correo electrónico"
            class="flex-1 border-b border-cream/30 bg-transparent py-2 text-sm text-cream outline-none transition-colors focus:border-gold placeholder:text-cream/40"
          />
          <BaseButton type="submit" variant="primary">Suscribirme</BaseButton>
        </form>
      </div>

      <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Col 1: Hotel -->
        <div>
          <img :src="logoWhite" alt="Hotel Cantera Real" class="mb-5 h-12 w-auto" />
          <p class="max-w-xs text-sm leading-relaxed text-cream/60">
            {{ hotelConfig.description }}
          </p>
        </div>

        <!-- Col 2: Explora -->
        <div>
          <h3 class="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-cream/50">Explora</h3>
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href" class="text-sm text-cream/70 transition-colors hover:text-terracota">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 3: Contacto -->
        <div>
          <h3 class="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-cream/50">Contacto</h3>
          <ul class="space-y-3 text-sm text-cream/70">
            <li>{{ hotelConfig.contact.address }}</li>
            <li>
              <a :href="`tel:${hotelConfig.contact.phone}`" class="transition-colors hover:text-terracota">
                {{ hotelConfig.contact.phone }}
              </a>
            </li>
            <li>
              <a :href="`mailto:${hotelConfig.contact.email}`" class="transition-colors hover:text-terracota">
                {{ hotelConfig.contact.email }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 4: Redes -->
        <div>
          <h3 class="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-cream/50">Síguenos</h3>
          <div class="flex gap-3">
            <a
              v-for="s in socials"
              :key="s.platform"
              :href="s.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="s.platform"
              class="flex h-10 w-10 items-center justify-center rounded-sm border border-cream/15 text-cream/70 transition-all hover:border-terracota hover:text-terracota"
            >
              <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current" aria-hidden="true">
                <path :d="socialPaths[s.platform] ?? ''" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        class="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-8 text-xs text-cream/40 sm:flex-row"
      >
        <p>© {{ year }} {{ hotelConfig.name }}. Todos los derechos reservados.</p>
        <p>Oaxaca de Juárez · México</p>
      </div>
    </div>
  </footer>
</template>
