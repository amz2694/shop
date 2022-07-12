import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import cart from '../views/cart.vue';
import checkout from '../views/checkout.vue';
import product from '../views/product.vue';
import shop from '../views/shop.vue';
import myAccount from '../views/myAccount.vue';
import search from '../views/search.vue';

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
    path: '/search',
    name: 'search',
    component: search
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
    path: '/shop',
    name: 'shop',
    component: shop
  },
  {
    path: '/myAccount',
    name: 'myAccount',
    component: myAccount
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
