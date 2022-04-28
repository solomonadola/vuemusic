/* eslint-disable eol-last */
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import veeValidatePlugin from "./includes/validation";
import "./assets/tailwind.css";
import "./assets/main.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(veeValidatePlugin);
app.mount("#app");
