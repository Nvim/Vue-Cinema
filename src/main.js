import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { useUserStore } from "./stores/user";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

const store = useUserStore();

app.use(router);
store.checkAuth().then(() => {
  app.mount("#app");
});
