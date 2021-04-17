import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Cards from './views/Cards.vue';
import Transfer from './views/Transfer.vue';
import Payment from './views/Payment.vue';
import Settings from './views/Settings.vue';
import Password from './views/Password.vue';
import News from './views/News.vue';
import Products from './views/Products.vue';
import Journals from './views/Journals.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/cards',
      name: 'cards',
      component: Cards,
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: Transfer,
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
    {
      path: '/password',
      name: 'password',
      component: Password,
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/product',
      name: 'products',
      component: Products,
    },
    {
      path: '/journals',
      name: 'journals',
      component: Journals,
    },

  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'login') next({ name: 'login' })
//   else next()
// })

export default router;