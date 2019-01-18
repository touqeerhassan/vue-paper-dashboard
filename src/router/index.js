import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store";
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: "active"
});

router.beforeEach((to, from, next) => {
  // console.log(to, from)
  store.dispatch("updateAuth", true);
  console.log(store.getters.getAuth)
  localStorage.setItem('authenticated', true);
  console.log(localStorage.getItem('authenticated'))

  next();
})

export default router;
