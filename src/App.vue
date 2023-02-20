<script setup>
import { ref } from "vue";
import projectsData from "./data/projects.json";
const sidebarShow = ref(false);
const isActive = ref(false);
const projects = ref(projectsData);
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
        <li class="portfolio-nav__item">About</li>
        <li
          v-for="project in projects"
          :key="project"
          class="portfolio-nav__item"
        >
          {{ project.name }}
        </li>
      </ul>
    </nav>
    <div class="portfolio__links portfolio-links">
      <div class="portfolio-links__about">?</div>
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
      <div v-for="project in projects" :key="project" class="project">
        <img
          class="project__image"
          :src="`../../src/assets/${project.img}.png`"
          alt="тут будет картинка проекта "
        />
        <div class="project__title">
          <p>{{ project.name }}</p>
        </div>
        <div class="project__description">{{ project.description }}</div>
      </div>
    </div>
  </main>

  <div id="app"></div>
</template>
