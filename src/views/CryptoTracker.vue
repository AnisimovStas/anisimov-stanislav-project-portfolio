<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });
const sliderStatus = ref([true]);
function swipeReverse(slider) {
  if (slider.length > 1) {
    for (let i = 0; i < slider.length; i++) {
      slider[i] = false;
    }
    slider.shift();
    slider[slider.length - 1] = true;

    return slider;
  }
}
function swipe(slider) {
  if (slider.length < 4) {
    slider.unshift(false);
  }
  return slider;
}
function selectSlide(slider, slide) {
  for (let i = 0; i < 4; i++) {
    slider[i] = false;
  }
  slider.splice(slide, 4 - slide, true);
}
</script>
<template>
  <div class="EA">
    <div class="EA-content">
      <div class="EA-slides">
        <div class="CSSgal">
          <div class="slider">
            <div v-if="sliderStatus[0] == true">
              <img
                class="slider__image"
                src="https://i.ibb.co/PMJSD5F/CT1.png"
                alt="slide1"
              />
            </div>
            <div v-if="sliderStatus[1] == true" style="background: #85b">
              <img
                class="slider__image"
                src="https://i.ibb.co/s2LXmNF/CT2.png"
                alt="slide2"
              />
            </div>
            <div v-if="sliderStatus[2] == true" style="background: #e95">
              <img
                class="slider__image"
                src="https://i.ibb.co/9VYvjVw/CT3.png"
                alt="slide3"
              />
            </div>
            <div v-if="sliderStatus[3] == true" style="background: #e59">
              <img
                class="slider__image"
                src="https://i.ibb.co/SxPgpRT/CT4.png"
                alt="slide4"
              />
            </div>
          </div>

          <div class="prevNext">
            <div
              class="prevNext__btn prevNext__btn--left"
              @click="swipeReverse(sliderStatus)"
            >
              &#60;
            </div>
            <div
              class="prevNext__btn prevNext__btn--right"
              @click="swipe(sliderStatus)"
            >
              &#62;
            </div>
          </div>

          <div class="bullets">
            <div
              class="bullets__bullets"
              :class="{
                'bullets__bullets--active': sliderStatus[0],
              }"
              @click="selectSlide(sliderStatus, 0)"
            >
              1
            </div>
            <div
              class="bullets__bullets"
              :class="{
                'bullets__bullets--active': sliderStatus[1],
              }"
              @click="selectSlide(sliderStatus, 1)"
            >
              2
            </div>
            <div
              class="bullets__bullets"
              :class="{
                'bullets__bullets--active': sliderStatus[2],
              }"
              @click="selectSlide(sliderStatus, 2)"
            >
              3
            </div>
            <div
              class="bullets__bullets"
              :class="{
                'bullets__bullets--active': sliderStatus[3],
              }"
              @click="selectSlide(sliderStatus, 3)"
            >
              4
            </div>
          </div>
        </div>
      </div>
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
