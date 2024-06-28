import './assets/main.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primevue/themes'
import PrimeVuePreset from './PrimeVuePreset'
import Lara from '@primevue/themes/aura'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const MyPreset = definePreset(Lara, PrimeVuePreset)

app.use(PrimeVue, {
  theme: {
    preset: MyPreset
  }
})

app.mount('#app')
