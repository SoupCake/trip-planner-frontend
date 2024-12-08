import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutView from '../views/About.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import TripPlanner from '@/views/TripPlanner.vue'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/my-trip-planner',
      name: 'My Trip Planner',
      component: TripPlanner
    }
  ]
})

export default router;