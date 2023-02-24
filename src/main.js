import { createApp } from "vue";
import router from "./router";
import "./styles/index.scss";
import App from "./App.vue";
import { createI18n, useI18n } from "vue-i18n";
import { defaultLocale, languages } from "./i18n";

const messages = Object.assign(languages);
const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: "en",
  messages,
});

const app = createApp(App, {
  setup() {
    const { t } = useI18n;
    return { t };
  },
});
app.use(router);
app.use(i18n);
app.mount("#app");
