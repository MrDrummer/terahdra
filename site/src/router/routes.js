
const routes = [
  {
    path: '/',
    component: () => import('layouts/main.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/home.vue'),
        meta: {
          title: 'Home'
        }
      },
      {
        path: '/social',
        component: () => import('pages/social.vue'),
        meta: {
          title: 'Social'
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
