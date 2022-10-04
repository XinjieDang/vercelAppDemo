import { createRouter, createWebHistory } from 'vue-router'
const routerHistroy = createWebHistory()
const router = createRouter({
  history: routerHistroy,
  routes: [
    {
      path: '/',
      redirect: '/layout/index',
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('../view/layout/layout.vue'),
      children: [
        {
          path: 'index',
          component: () => import('../view/index/index.vue'),
        },
        {
          path: 'apply',
          component: () => import('../view/apply/index.vue'),
        },
        {
          path: 'message',
          component: () => import('../view/message/index.vue'),
        },
        {
          path: 'user',
          component: () => import('../view/user/index.vue'),
        },
      ],
    },
  ],
})
export default router
