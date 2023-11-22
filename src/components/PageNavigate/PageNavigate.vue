<template>
  <PageContainer class="links-container" :width="device[0].deviceWidth" :is-full-width="false">
    <nav class="menu-links">
      <router-link
        active-class="active-link"
        class="link"
        :to="{
          name: PathNames.HOME,
          query:
            $route.query.theme != undefined ? { theme: `${$route.query.theme}` } : { theme: null }
        }"
      >
        Main
      </router-link>
      <router-link
        active-class="active-link"
        class="link"
        :to="{
          name: PathNames.POSTS,
          query:
            $route.query.theme != undefined ? { theme: `${$route.query.theme}` } : { theme: null }
        }"
      >
        Posts
      </router-link>
      <router-link
        active-class="active-link"
        class="link"
        :to="{
          name: PathNames.FORM,
          query:
            $route.query.theme != undefined ? { theme: `${$route.query.theme}` } : { theme: null }
        }"
      >
        Form
      </router-link>
    </nav>
  </PageContainer>
</template>

<script setup lang="ts">
import { useMedia } from '@/composables/useMedia';
import PageContainer from '../PageContainer/PageContainer.vue';
import { PathNames } from '@/constants/route.constants';

const { device } = useMedia();
</script>

<style src="./PageNavigate.style.scss" lang="scss" scoped></style>
