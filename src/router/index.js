import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import exercisesAtlas from "@/views/ExercisesAtlas.vue";
import CCC from "@/views/СustomСryptoСurrency.vue";
import CT from "@/views/CryptoTracker.vue";
import FF from "@/views/FavoriteFilms.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  { path: "/about", name: "About", component: AboutPage },
  {
    path: "/EA",
    name: "Exercises Atlas",
    component: exercisesAtlas,
  },
  {
    path: "/CCC",
    name: "Custom Crypto Currency",
    component: CCC,
  },
  {
    path: "/CT",
    name: "Crypto Tracker",
    component: CT,
  },
  {
    path: "/FF",
    name: "Favorite films",
    component: FF,
  },
];
const router = createRouter({
  history: createWebHistory("/anisimov-stanislav-project-portfolio/"),
  routes,
});

export default router;
