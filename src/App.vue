<template>
  <div class="wrapper">
    <PageHeader :device="device" />
    <PageContent :device="device" />
    <PageFooter :device="device" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import PageHeader from '@/components/PageHeader/PageHeader.vue';
import PageContent from '@/components/PageContent/PageContent.vue';
import PageFooter from './components/PageFooter/PageFooter.vue';
import { screenResolution } from '@/App.data';
import type { IWindowWidth } from '@/App.types';

const windowWidth: IWindowWidth = ref<number>(window.innerWidth);

const handleResize = (): void => {
  windowWidth.value = window.innerWidth;
};

onMounted((): void => {
  window.addEventListener('resize', handleResize);
});

onUnmounted((): void => {
  window.removeEventListener('resize', handleResize);
});

const device = computed((): string => {
  if (windowWidth.value <= screenResolution[0]) return 'Mobile';
  else if (windowWidth.value > screenResolution[0] && windowWidth.value <= screenResolution[1])
    return 'Tablet';
  else return 'Desktop';
});
</script>

<style lang="scss" src="@/App.style.scss" scoped />
