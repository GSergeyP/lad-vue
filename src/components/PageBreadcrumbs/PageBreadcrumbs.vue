<template>
  <div class="breadcrumbs" v-if="data.length > 0">
    <router-link
      :key="item"
      v-for="item in data"
      active-class="active-link"
      class="link"
      :to="{
        name: PathNames[item.path.toUpperCase() as keyof typeof PathNames],
        query:
          $route.query.theme != undefined ? { theme: `${$route.query.theme}` } : { theme: null }
      }"
    >
      {{ item.title }}
      /
    </router-link>
    {{ $route.meta.title }}
  </div>
</template>

<script setup lang="ts">
import { PathNames } from '@/constants/route.constants';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const data: { [key: string]: any } = computed(() => {
  return route.meta.breadcrumb;
});
</script>

<style src="@/components/PageBreadcrumbs/PageBreadcrumbs.scss" scoped></style>
