import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: '/product',
    name: 'product',
    component: () => import("@/views/ProductPage.vue"),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/DashboardPage.vue'),
    children: [
      {
        path: 'create-product',
        name: 'create-product',
        meta: { requiresAuth: true },
        component: () => import('@/views/dashboard/ProductPage.vue'),
      }]
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
export default router