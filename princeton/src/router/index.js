import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homePage",
      component: () => import("../views/HomePage.vue"),
    },
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
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("../views/Dashboard.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/survey",
      name: "survey",
      component: () => import("../views/Survey.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/Home.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

export default router;
