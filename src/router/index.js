import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      meta: { layout: "main" },
      component: () => import("@/views/Question"),
    },
    {
      path: "/list",
      meta: { layout: "main" },
      component: () => import("@/views/List"),
    },
    {
      path: "/home",
      meta: { layout: "main" },
      component: () => import("@/views/Home"),
    },
  ]
})
