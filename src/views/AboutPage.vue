<script setup></script>
<template>
  <div class="about">
    <div class="about-content">
      <div class="about-content-photo">
        <div class="photo">
          <img
            class="photo"
            src="@/assets/myPhoto.jpeg"
            alt="photo placeholder"
          />
        </div>
        <div class="photo__description">
          Anisimov Stanislav
          <p>Frontend developer</p>
          <p>26 y/o</p>
        </div>
      </div>
      <div class="about-content-text">
        <h1 class="about__title">ABOUT</h1>
        <br />
        <p class="about__text">
          Hello, my name is Stanislav Anisimov, im frontend web developer and
          web designer.
        </p>
        <p class="about__text">
          After graduating with MA and 3 years in building estimates works
          expirience i'm become self-taught front-end web development.
        </p>
        <p class="about__text">
          Currently has over 1 years of experience in mainly CSS, HTML
          (TailwindCSS, SCSS) and JavaScript(Vue.js ecosystem).
        </p>
        <p class="about__text">
          Obsessed with application performance, user experience, and
          simplicity.
        </p>
        <p class="about__text">
          At this web portfolio you may see showcases of my works.
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
