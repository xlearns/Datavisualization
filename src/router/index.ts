import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TestEcharts from '@/views/test/echarts/index.vue'
import TestWindicss from '@/views/test/windicss/index.vue'
import Test from '@/views/test/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/test',
      redirect:'/test/echarts',
      component:Test,
      children:[
        {
          path:"echarts",
          component:TestEcharts
        },
        {
          path:"windicss",
          component:TestWindicss
        }
      ]
    },
  ]
})

export default router
