import { createApp } from "vue";
import { createStore } from "vuex";
import * as VueRouter from "vue-router";

import "./index.scss";

import App from "./App.vue";
import Home from "./Home.vue";
import About from "remote/About";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const store = createStore({
  state() {
    return {
      count: 1,
    };
  },
  mutations: {
    addOne(state) {
      console.log("addOne");
      state.count++;
    },
  },
});

createApp(App).use(router).use(store).mount("#app");
