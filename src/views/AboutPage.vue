<script setup></script>
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
              src="../assets/russia_icon.png"
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
              src="../assets/usa_icon.png"
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
  <main class="portfolio-content">хехехе</main>
</template>
