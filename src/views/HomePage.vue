<script setup>
import { ref } from "vue";
import projectsData from "../data/projects.json";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n({ useScope: "global" });
const projects = ref(projectsData);

</script>
<template>
  <main class="portfolio-content">
    <!-- Список проектов-->
    <div class="main">
      <div v-for="project in projects" :key="project">
        <RouterLink :to="{ path: project.id }" class="project">
          <img
            class="project__image"
            :src="`${project.img}`"
            alt="тут будет картинка проекта "
          />
          <div class="project__title">
            <p>{{ project.name }}</p>
          </div>
          <div class="project__description">{{ project.description }}</div>
        </RouterLink>
      </div>
    </div>
  </main>
</template>
