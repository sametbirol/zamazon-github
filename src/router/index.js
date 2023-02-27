// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Products from '@/views/products.vue'

const routes = [
  {
    path: '/',
    name: 'products',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'productpage',
    component: () => import('@/views/productpage.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
