import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import ProjectDetail from '../pages/ProjectDetail.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/projekt/:slug', name: 'project-detail', component: ProjectDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    return { top: 0, behavior: 'instant' };
  },
});

export default router;
