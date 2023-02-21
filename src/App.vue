<script setup>
import { ref } from "vue";
import projectsData from "./data/projects.json";
const sidebarShow = ref(false);
const isActive = ref(false);
const projects = ref(projectsData);
</script>

<template>
  <header class="portfolio-header">
    <div class="portfolio-header-content">
      <RouterLink to="/">
        <div class="portfolio-header-title">
          <p class="portfolio-header-title__mainText">Anisimov Stanislav</p>
          <p class="portfolio-header-title__text">project portfolio</p>
        </div>
      </RouterLink>
      <!-- При фуллскрине -->
      <nav class="portfolio-nav">
        <ul class="portfolio-nav__list">
          <RouterLink to="/about">
            <li class="portfolio-nav__item">About</li></RouterLink
          >
          <li v-for="project in projects" :key="project">
            <RouterLink :to="{ path: project.id }">
              <div class="portfolio-nav__item">
                {{ project.name }}
              </div>
            </RouterLink>
          </li>
        </ul>
      </nav>
      <div class="portfolio__links portfolio-links">
        <RouterLink to="/about">
          <div class="portfolio-links__about">?</div></RouterLink
        >
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
    </div>
  </header>
  <router-view></router-view>

  <div id="app"></div>
</template>
