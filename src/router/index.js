import Vue from 'vue';
import VueRouter from 'vue-router';
import People from '@/views/People.vue';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Tags from '../views/Tags.vue';

Vue.use(VueRouter);

const DEFAULT_TITLE = 'MyLife';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'About',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/people',
    name: 'People',
    component: People,
    meta: {
      title: 'People',
    },
  },
  {
    path: '/settings/tags',
    name: 'Tags',
    component: Tags,
    meta: {
      title: 'Settings - Tags',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    if (to.meta.title) {
      document.title = `${DEFAULT_TITLE} - ${to.meta.title}`;
    }
    else {
      document.title = DEFAULT_TITLE;
    }
  });
});

export default router;
