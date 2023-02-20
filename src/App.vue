<script setup>
import { ref } from "vue";
const sidebarShow = ref(false);
const isActive = ref(false);
</script>

<template>
  <header class="portfolio-header">
    <div class="portfolio-header-title">
      <p class="portfolio-header-title__mainText">Anisimov Stanislav</p>
      <p class="portfolio-header-title__text">project portfolio</p>
    </div>
    <!-- При фуллскрине -->
    <nav class="portfolio-nav">
      <ul class="portfolio-nav__list">
        <li class="portfolio-nav__item">Обо мне</li>
        <li class="portfolio-nav__item">Проект 1</li>
        <li class="portfolio-nav__item">Проект 2</li>
      </ul>
    </nav>
    <div class="portfolio__links portfolio-links">
      <div class="portfolio-links__about">
        <p>Обо мне</p>
      </div>
      <div class="portfolio-links__language-switcher language-switcher">
        <div class="language-switcher">
          <button
            @click="isActive = !isActive"
            :disabled="!isActive"
            :class="{ 'language-switcher-button bounce': isActive }"
          >
            <img
              src="./assets/russia_icon.png"
              :class="{
                ' language-switcher-button__image language-switcher-button__image--active':
                  !isActive,
                ' language-switcher-button__image language-switcher-button__image--disabled':
                  isActive,
              }"
            />
          </button>
          <button
            @click="isActive = !isActive"
            :disabled="isActive"
            :class="{ 'language-switcher-button bounce': !isActive }"
          >
            <img
              src="./assets/usa_icon.png"
              :class="{
                'language-switcher-button__image language-switcher-button__image--active':
                  isActive,
                ' language-switcher-button__image language-switcher-button__image--disabled':
                  !isActive,
              }"
            />
          </button>
        </div>
      </div>
    </div>
  </header>
  <main class="portfolio-content">
    <!-- Список проектов-->
    <div class="main">
      <div class="project">
        <img
          class="project__image"
          src="random"
          alt="тут будет картинка проекта "
        />
        <div class="project__title"><p>Проект</p></div>
      </div>
      <div class="project">
        <img
          class="project__image"
          src="random"
          alt="тут будет картинка проекта "
        />
        <div class="project__title"><p>Проект</p></div>
      </div>
      <div class="project">
        <img
          class="project__image"
          src="random"
          alt="тут будет картинка проекта "
        />
        <div class="project__title"><p>Проект</p></div>
      </div>
    </div>
  </main>

  <div id="app"></div>
</template>
