import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'

// PrimeVue styles
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

// Custom styles
import './style.css'

const app = createApp(App)

app.use(PrimeVue, {
  ripple: true
})

app.mount('#app')