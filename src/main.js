import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { VApp, VCheckbox } from 'vuetify/components';
import '@mdi/font/css/materialdesignicons.css';

const app = createApp(App)

const vuetify = createVuetify({
    components: { VApp, VCheckbox },
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
