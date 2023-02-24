import { createApp } from "vue";
import router from "./router";
import "./styles/index.scss";
import App from "./App.vue";
import { createI18n, useI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  fallbackLocale: "en",
});

createApp(App).use(router).mount("#app");
