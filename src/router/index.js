import { createRouter, createWebHistory } from 'vue-router'
const routerHistroy = createWebHistory()
const router = createRouter({
  history: routerHistroy,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('../view/layout/layout.vue'),
      children: [
        {
          path: '/index',
          component: () => import('../view/index/index.vue'),
        },
      ],
    },
  ],
})
export default router
