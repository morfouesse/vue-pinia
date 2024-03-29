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
    },
    {
      path: RoutePath.POST,
      name: 'post',
      component: () => import('../views/PostByIdView.vue')
    },
    {
      path: RoutePath.EDIT_POST,
      name: 'edit-post',
      component: () => import('../views/PostByIdView.vue')
    }
  ]
})

export default router
