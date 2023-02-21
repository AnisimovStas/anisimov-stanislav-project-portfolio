import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import exercisesAtlas from "@/views/ExercisesAtlas.vue";
import CCC from "@/views/СustomСryptoСurrency.vue";
import CT from "@/views/CryptoTracker.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
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
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
