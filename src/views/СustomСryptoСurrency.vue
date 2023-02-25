<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import ImageSlider from "../components/ImageSlider/ImageSlider.vue";
const { t } = useI18n({ useScope: "global" });
const slidersData = ref([
  {
    img: "https://i.ibb.co/r5t7MNZ/CCC1-title.png",
    id: 0,
    alt: "slide #1",
    isActive: true,
  },
  {
    img: "https://i.ibb.co/Bg0wyRG/CCC3.png",
    id: 1,
    alt: "slide #2",
    isActive: false,
  },
  {
    img: "https://i.ibb.co/gSHJ44Z/CCC2.png",
    id: 2,
    alt: "slide #3",
    isActive: false,
  },
  {
    img: "https://i.ibb.co/J5GDrxR/CCC4.png",
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
        <h1 class="text__title">Custom Crypto Currency</h1>
        <div class="text__description">
          <p>
            {{ t("cccDescription") }}
          </p>
        </div>
        <div class="text-Stack">
          <h2 class="text-Stack__title">{{ t("stack") }}</h2>
          <div class="text-stack__text">
            <p>CSS: Tailwind</p>
            <p>Framework: Vue.js</p>
            <p>Builder: Vite</p>
            <p>API: fetch API</p>
          </div>
        </div>
        <div class="text-links">
          <h2 class="text-links__title">{{ t("links") }}</h2>
          <div class="text-links__text">
            <p>
              GitHub:
              <a href="https://github.com/AnisimovStas/CCC" target="_blank"
                >link</a
              >
            </p>
            <p>
              {{ t("build") }}
              <a href="https://anisimovstas.github.io/CCC/" target="_blank"
                >link</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
