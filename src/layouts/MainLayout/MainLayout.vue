<template>
  <BlockContainer :width="device.screenWidth">
    <BlockNavigation />
    <slot></slot>
  </BlockContainer>
</template>

<script setup lang="ts">
import BlockContainer from '@/components/BlockContainer/BlockContainer.vue';
import BlockNavigation from '@/components/BlockNavigation/BlockNavigation.vue';
import { useRoute } from 'vue-router';
import { useMedia } from '@/composables/useMedia/useMedia';
import { computed, ref, watch, type ComputedRef } from 'vue';

const { device } = useMedia();
const route = useRoute();
const title = ref<string>(`${route.meta.title}`);

const currentTitle: ComputedRef = computed(() => {
  document.title = title.value;
  return route.meta.title;
});

watch(currentTitle, (newTitle) => {
  document.title = newTitle;
});
</script>
