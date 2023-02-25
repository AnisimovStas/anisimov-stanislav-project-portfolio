<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import ImageSlider from "@/components/ImageSlider/ImageSlider.vue";
const { t } = useI18n({ useScope: "global" });
const slidersData = ref([
  {
    img: "https://i.ibb.co/PMJSD5F/CT1.png",
    id: 0,
    alt: "slide #1",
    isActive: true,
  },
  {
    img: "https://i.ibb.co/s2LXmNF/CT2.png",
    id: 1,
    alt: "slide #2",
    isActive: false,
  },
  {
    img: "https://i.ibb.co/9VYvjVw/CT3.png",
    id: 2,
    alt: "slide #3",
    isActive: false,
  },
  {
    img: "https://i.ibb.co/SxPgpRT/CT4.png",
    id: 3,
    alt: "slide #4",
    isActive: false,
  },
]);
</script>
<template>
  <div class="EA">
    <div class="EA-content">
      <ImageSlider :slidersData="slidersData" />

      <div class="EA-text">
        <h1 class="text__title">Crypto Tracker</h1>
        <div class="text__description">
          <p>
            {{ t("ctDescription") }}
          </p>
        </div>
        <div class="text-Stack">
          <h2 class="text-Stack__title">{{ t("stack") }}</h2>
          <div class="text-stack__text">
            <p>CSS: Tailwind</p>
            <p>Framework: Vue.js</p>
            <p>Builder: Vue CLI</p>
            <p>API: Web Socket</p>
          </div>
        </div>
        <div class="text-links">
          <h2 class="text-links__title">{{ t("links") }}</h2>
          <div class="text-links__text">
            <p>
              GitHub:
              <a
                href="https://github.com/AnisimovStas/cryptoPortfolio"
                target="_blank"
                >link</a
              >
            </p>
            <p>
              {{ t("build") }}
              <a
                href="https://anisimovstas.github.io/cryptoPortfolio/"
                target="_blank"
                >Link</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
