import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BlogView from '../views/BlogView.vue';
import ArticleView from '@/views/ArticleView';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/blog/:id',
    name: 'article',
    component: ArticleView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
