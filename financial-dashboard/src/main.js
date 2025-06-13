import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './styles.css'; // Importa los estilos de Tailwind

const app = createApp(App);
app.use(createPinia());
app.mount('#app');