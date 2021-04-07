import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueGtag, { trackRouter } from "vue-gtag-next";
import './index.css';

const app = createApp(App);

app.use(VueGtag, {
    property: {
      id: "G-SM1JED26GS"
    }
});

trackRouter(router, {
    useScreenview: true
});

app.use(router);

app.mount('#app');
