import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'
import PolicyView from '../views/PolicyView.vue'
import CategoryView from '../views/CategoryView.vue'
import AuthorView from '../views/AuthorView.vue'
import ContactView from '../views/ContactView.vue'
import AboutUsView from '../views/AboutUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/post',
      name: 'post',
      component: PostView,
    },
    {
      path: '/policy',
      name: 'policy',
      component: PolicyView,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/author',
      name: 'author',
      component: AuthorView,
    },
    {
      path:'/contact',
      name:'contact',
      component: ContactView,
    },
    {
      path:'/aboutus',
      name:'aboutus',
      component: AboutUsView,
    },
  ],
})

export default router
