import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CourseList from '../views/courses/CourseList.vue'

Vue.use(VueRouter)


//标记类型: RouteConfig[]
const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [   // 子路由
      { name: 'home', path: '/', component: Home },
      { name: 'courses-list', path: '/courses/list', component: CourseList },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
