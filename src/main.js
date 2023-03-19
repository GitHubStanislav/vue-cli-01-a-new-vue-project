import {createApp} from 'vue';
import App from "@/App.vue";
import ButtonsStyle from "@/components/UI/ButtonsStyle.vue";
import BaseCard from "@/components/UI/BaseCard.vue";

const app = createApp(App)

app.component('buttons-style', ButtonsStyle)
app.component('base-card', BaseCard)
app.mount('#app');
