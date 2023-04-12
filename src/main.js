import {createApp} from 'vue';
import App from "@/App.vue";
import components from '@/components/UI'
import MyInput from "@/components/UI/MyInput.vue";


const app = createApp(App)
components.forEach(component=>{
app.component(component.name, component)
})
app.component('my-input',MyInput)
app.mount('#app');
