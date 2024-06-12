import Home from "@/views/Home.vue";
import Cinemas from "@/views/Cinemas.vue";
import Films from "@/views/Films.vue";
import Film from "@/views/Film.vue";
import Cinema from "@/views/Cinema.vue";
import SignUp from "@/views/SignUp.vue";
import LogIn from "@/views/LogIn.vue";
import Profile from "@/views/Profile.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/cinemas", name: "Cinemas", component: Cinemas },
  { path: "/cinema/:id", name: "Cinema", component: Cinema },
  { path: "/films", name: "Films", component: Films },
  { path: "/film/:id", name: "Film", component: Film },
  { path: "/signup", name: "SignUp", component: SignUp },
  { path: "/login", name: "LogIn", component: LogIn },
  { path: "/profile", name: "Profile", component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
