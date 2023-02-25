<script setup>
const props = defineProps({
  slidersData: Array,
});
function nextSlide(sliders) {
  let activeSlide;
  sliders.forEach((slide) => {
    if (slide.isActive == true && slide.id != sliders.length - 1) {
      activeSlide = slide.id;
      slide.isActive = false;
    }
    if (slide.id == activeSlide + 1) {
      slide.isActive = true;
    }
  });
}

function prevSlide(sliders) {
  let activeSlide;
  sliders.forEach((slide) => {
    if (slide.isActive == true && slide.id != 0) {
      activeSlide = slide.id;
      console.log("1st parth" + activeSlide);
      slide.isActive = false;
    }
    sliders.forEach((slide) => {
      if (slide.id == activeSlide - 1) {
        slide.isActive = true;
        console.log("2nd parth " + slide.id);
      }
    });
  });
}
function selectedSlide(sliders, id) {
  sliders.forEach((slide) => {
    if (slide.id != id) {
      slide.isActive = false;
    } else {
      slide.isActive = true;
    }
  });
}
</script>
<template>
  <div class="EA-slides">
    <div class="CSSgal">
      <div class="slider">
        <div v-for="slide in slidersData">
          <img
            v-if="slide.isActive"
            class="slider__image"
            :src="slide.img"
            :alt="slide.alt"
          />
        </div>
      </div>

      <div class="prevNext">
        <div
          class="prevNext__btn prevNext__btn--left"
          @click="prevSlide(slidersData)"
        >
          &#60;
        </div>
        <div
          class="prevNext__btn prevNext__btn--right"
          @click="nextSlide(slidersData)"
        >
          &#62;
        </div>
      </div>

      <div class="bullets">
        <div
          v-for="slide in slidersData"
          class="bullets__bullets"
          :class="{
            'bullets__bullets--active': slide.isActive,
          }"
          @click="selectedSlide(slidersData, slide.id)"
        >
          {{ slide.id + 1 }}
        </div>
      </div>
    </div>
  </div>
</template>
