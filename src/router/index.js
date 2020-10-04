import Vue from 'vue'
import Router from 'vue-router'

const Upload = () => import("@/pages/Upload")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"Upload",
      component:Upload
    }
  ]
})