<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import ImageSlider from "@/components/ImageSlider/ImageSlider.vue";
const { t } = useI18n({ useScope: "global" });
const slidersData = ref([
  {
    img: "https://i.ibb.co/rvjBzN3/FF.png",
    id: 0,
    alt: "slide #1",
    isActive: true,
  },
  {
    img: "https://i.ibb.co/q0CjYnm/FF2.png",
    id: 1,
    alt: "slide #2",
    isActive: false,
  },
  {
    img: "https://i.ibb.co/kHh6BP7/fF3.png",
    id: 2,
    alt: "slide #3",
    isActive: false,
  },
  {
    img: "https://i.ibb.co/CbmdKS4/ff4.png",
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
        <h1 class="text__title">Favitire movies</h1>
        <div class="text__description">
          <p>
            {{ t("ffDescription") }}
          </p>
        </div>
        <div class="text-Stack">
          <h2 class="text-Stack__title">{{ t("stack") }}</h2>
          <div class="text-stack__text">
            <p>CSS: pure CSS</p>
            <p>Framework: Vue.js</p>
            <p>Builder: Vue CLI</p>
            <p>Store: pinia</p>
            <p>API: fetch API</p>
          </div>
        </div>
        <div class="text-links">
          <h2 class="text-links__title">{{ t("links") }}</h2>
          <div class="text-links__text">
            <p>
              GitHub:
              <a
                href="https://github.com/AnisimovStas/favorite-movies"
                target="_blank"
                >link</a
              >
            </p>
            <p>
              {{ t("build") }}
              <a
                href="https://anisimovstas.github.io/favorite-movies/"
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
