import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/cinemas",
    name: "Cinemas",
    component: () => import("@/views/Cinemas.vue"),
  },
  {
    path: "/cinema/:id",
    name: "Cinema",
    component: () => import("@/views/Cinema.vue"),
    props: true,
  },
  {
    path: "/films",
    name: "Films",
    component: () => import("@/views/Films.vue"),
  },
  {
    path: "/film/:id",
    name: "Film",
    component: () => import("@/views/Film.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("@/views/SignUp.vue"),
  },
  {
    path: "/login",
    name: "LogIn",
    component: () => import("@/views/LogIn.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/Profile.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
