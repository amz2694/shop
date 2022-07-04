import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import cart from '../views/cart.vue'
import checkout from '../views/checkout.vue'
import product from '../views/product.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: checkout
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:product',
    name: 'product',
    component: product
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
