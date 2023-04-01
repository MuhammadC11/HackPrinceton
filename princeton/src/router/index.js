import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: () => import("../views/Home.vue") },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
    {path: "/Dashboard", name: "Dashboard", component: () => import("../views/Dashboard.vue"),
    meta: { requiresAuth: true },},
  ],
});


export default router;
