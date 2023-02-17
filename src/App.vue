<script setup>
import { ref } from "vue";
const sidebarShow = ref(false);
</script>

<template>
  <header class="portfolio-header">
    <div class="portfolio-header-title">
      Anisimov Stanislav project portfolio
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
        Смена языка
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
