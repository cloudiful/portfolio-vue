/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composable
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import axios from "axios";

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

axios.defaults.baseURL=import.meta.env.VITE_BASE_URL
