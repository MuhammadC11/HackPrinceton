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
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/dashboard.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next();
    } else {
      alert("You must be logged in to view this page");
      next("/login");
    }
  }
});

export default router;
