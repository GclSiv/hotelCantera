import { createApp } from 'vue'
import '@/assets/styles/main.css'
import App from './App.vue'
import { vReveal } from '@/composables/useScrollReveal'
import { vMagnetic } from '@/composables/useMagnetic'

const app = createApp(App)
app.directive('reveal', vReveal)
app.directive('magnetic', vMagnetic)
app.mount('#app')
