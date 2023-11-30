import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout/MainLayout.vue';
import { Links, PathNames } from '@/constants/route.constants';
import MainView from '@/views/MainView/MainView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Links.MAIN,
      name: PathNames.MAIN,
      component: MainView,
      meta: {
        layout: MainLayout,
        title: 'Главная'
      }
    },
    {
      path: Links.SLIDER,
      name: PathNames.SLIDER,
      component: () => import('@/views/SliderView/SliderView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Слайдер'
      }
    },
    {
      path: Links.CARD,
      name: PathNames.CARD,
      component: () => import('@/views/ErrorView/ErrorView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Карточки'
      }
    },
    {
      path: Links.FORM,
      name: PathNames.FORM,
      component: () => import('@/views/ErrorView/ErrorView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Форма'
      }
    },
    {
      path: Links.LIST,
      name: PathNames.LIST,
      component: () => import('@/views/ErrorView/ErrorView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Список'
      }
    },
    {
      path: Links.MODAL,
      name: PathNames.MODAL,
      component: () => import('@/views/ErrorView/ErrorView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Модалка'
      }
    },
    {
      path: Links.NOTFOUND,
      name: PathNames.NOTFOUND,
      component: () => import('@/views/ErrorView/ErrorView.vue'),
      meta: {
        layout: MainLayout,
        title: '404'
      }
    }
  ]
});

export default router;
