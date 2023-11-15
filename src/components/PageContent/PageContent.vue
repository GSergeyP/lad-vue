<template>
  <main class="main">
    <div v-if="device == 'Mobile'">
      <PageContentMobile />
    </div>
    <div v-else-if="device == 'Tablet'">
      <PageContentTablet />
    </div>
    <div v-else>
      <PageContentDesktop />
    </div>
  </main>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import PageContentMobile from '@/components/PageContent/PageContent.mobile.vue';
import PageContentTablet from '@/components/PageContent/PageContent.tablet.vue';
import PageContentDesktop from '@/components/PageContent/PageContent.desktop.vue';

const props = defineProps<{ device: string }>();
const { device } = toRefs(props);
</script>

<style lang="scss" src="@/components/PageContent/PageContent.style.scss" scoped />