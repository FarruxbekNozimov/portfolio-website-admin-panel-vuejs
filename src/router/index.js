import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/Home.vue')
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('@/views/About.vue')
        },
        {
          path: '/blog',
          name: 'Blog',
          component: () => import('@/views/Blog.vue')
        },
        {
          path: '/blog/:id',
          name: 'BlogOne',
          component: () => import('@/views/BlogOne.vue')
        },
        {
          path: '/blog/add',
          name: 'AddPost',
          component: () => import('@/views/AddPost.vue')
        },
        {
          path: '/projects',
          name: 'Projects',
          component: () => import('@/views/Projects.vue')
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'Error',
          component: () => import('@/views/Error.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.name != 'Login' && !localStorage.getItem('token')) {
//     next('/login')
//   } else if (to.name == 'Login' && localStorage.getItem('token')) {
//     next('/')
//   } else {
//     next()
//   }
// })

export default router
