import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import { Links, PathNames } from '@/constants/route.constants';
import MainView from '@/views/MainView/MainView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Links.HOME,
      name: PathNames.HOME,
      component: MainView,
      meta: {
        layout: MainLayout,
        title: 'Main Page',
        breadcrumb: []
      }
    },
    {
      path: Links.POSTS,
      name: PathNames.POSTS,
      component: () => import('@/views/PostsView/PostsView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Posts',
        breadcrumb: [
          {
            path: PathNames.HOME,
            title: 'Main Page'
          }
        ]
      }
    },
    {
      path: `${Links.POSTS}/:id`,
      name: PathNames.POST,
      component: () => import('@/views/PostView/PostView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Post',
        breadcrumb: [
          {
            path: PathNames.HOME,
            title: 'Main Page'
          },
          {
            path: PathNames.POSTS,
            title: 'Posts'
          }
        ]
      }
    },
    {
      path: Links.FORM,
      name: PathNames.FORM,
      component: () => import('@/views/FormView/FormView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Form',
        breadcrumb: [
          {
            path: PathNames.HOME,
            title: 'Main Page'
          }
        ]
      }
    }
  ]
});

export default router;
