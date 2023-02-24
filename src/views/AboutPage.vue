<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n({ useScope: "global" });
</script>
<template>
  <div class="about">
    <div class="about-content">
      <div class="about-content-photo">
        <div class="photo">
          <img
            class="photo"
            src="https://i.ibb.co/DkW6x45/myPhoto.jpg"
            alt="photo placeholder"
          />
        </div>
        <div class="photo__description">
          {{ t("myname") }}
          <p>Frontend developer</p>
          <p>{{ t("yo") }}</p>
        </div>
      </div>
      <div class="about-content-text">
        <h1 class="about__title">{{ t("about") }}</h1>
        <br />
        <p class="about__text">
          {{ t("hello") }}
        </p>
        <p class="about__text">
          {{ t("graduate") }}
        </p>
        <p class="about__text">
          {{ t("expirience") }}
        </p>
        <p class="about__text">
          {{ t("goodwords") }}
        </p>
        <p class="about__text">
          {{ t("endingwords") }}
          <span style="font-weight: bold">Enjoy!</span>
        </p>
      </div>
    </div>
  </div>
  <div class="contacts">
    <div class="contacts-content">
      <p class="contacts__title">Contact links:</p>
      <p class="contacts__item">
        <a
          href="https://github.com/AnisimovStas"
          target="_blank"
          class="contacts__link"
          >G
        </a>
      </p>
      <p class="contacts__item">
        <a
          href="https://telegram.me/otpbard"
          target="_blank"
          class="contacts__link"
          >TG
        </a>
      </p>
      <p class="contacts__item">
        <a href="mailto: anisimov-stas.stas@yandex.ru" class="contacts__link">
          @
        </a>
      </p>
    </div>
  </div>
</template>
