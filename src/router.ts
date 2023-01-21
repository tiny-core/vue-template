import { createRouter, createWebHistory } from 'vue-router'

export enum ROUTE {
  HOME = 'home'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/Default.vue'),
      children: [{ path: '', name: ROUTE.HOME, component: () => import('@/views/Home.vue') }]
    }
  ]
})

export default router
