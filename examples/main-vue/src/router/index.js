import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Multiple from "../views/Multiple.vue";

const basename = process.env.NODE_ENV === "production" ? "/demo-main-vue/" : "";
Vue.use(VueRouter);

const routes = [
  {
    path: "/all",
    name: "all",
    component: Multiple,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置

const router = new VueRouter({
  mode: "hash",
  base: basename,
  routes,
});

export default router;
