<script setup>
import { ref } from "vue";
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
    slider.slice(0, 4);
  }
  return slider;
}
function selectSlide(slider, slide) {
  for (let i = 0; i < slider.length; i++) {
    slider[i] = false;
  }
  slider[slide] = true;
}
</script>
<template>
  <div class="EA">
    <div class="EA-content">
      {{ sliderStatus }}
      <div class="EA-slides">
        <div class="CSSgal">
          <div class="slider">
            <div v-if="sliderStatus[0] == true">
              <img
                class="slider__image"
                src="@/assets/ExercisesAtlas.png"
                alt="slide1"
              />
            </div>
            <div v-if="sliderStatus[1] == true" style="background: #85b">
              <img
                class="slider__image"
                src="@/assets/34234234234234.png"
                alt="slide2"
              />
            </div>
            <div v-if="sliderStatus[2] == true" style="background: #e95">
              <img
                class="slider__image"
                src="@/assets/34234234234234.png"
                alt="slide3"
              />
            </div>
            <div v-if="sliderStatus[3] == true" style="background: #e59">
              <img
                class="slider__image"
                src="@/assets/34234234234234.png"
                alt="slide4"
              />
            </div>
          </div>

          <div class="prevNext">
            <div>
              <a @click="swipeReverse(sliderStatus)"> &#60; </a>
              <a @click="swipe(sliderStatus)">&#62;</a>
            </div>
          </div>

          <div class="bullets">
            <a @click="selectSlide(sliderStatus, 0)">1</a>
            <a @click="selectSlide(sliderStatus, 1)">2</a>
            <a @click="selectSlide(sliderStatus, 2)">3</a>
            <a @click="selectSlide(sliderStatus, 3)">4</a>
          </div>
        </div>
      </div>
      <div class="EA-text">
        <h1 class="text__title">Exercises Atlas</h1>
        <div class="text__description">
          <p>
            This web app helps find out new exercises for each muscle with some
            descripted information about it (general rules, instruction, video)
          </p>
        </div>
        <div class="Text-Stack">
          <h2 class="Text-Stack__title">Stack of used technology</h2>
          <p class="Text-Stack__text">vue | something else</p>
        </div>
        <div class="text-links">
          <h2 class="text-links__title">Links</h2>
          <p class="text-links__text">gitHub: <a>git</a></p>
          <p class="text-links__text">Production build: <a>git</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
