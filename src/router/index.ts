import { createRouter, createWebHistory } from 'vue-router'
import { RoutePath } from '@/constants/RoutePath'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutePath.HOME,
      name: 'home',
      component: HomeView
    },
    {
      path: RoutePath.POSTS,
      name: 'posts',
      component: () => import('../views/PostsView.vue')
    }
  ]
})

export default router
