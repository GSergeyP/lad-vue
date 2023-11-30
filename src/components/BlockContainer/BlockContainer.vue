<template>
  <div :style="style" :class="$style.container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';
import type { IWidth } from './BlockContainer.type';

const props = defineProps<IWidth>();
const { width } = toRefs(props);

const style = computed(() => {
  return { ['--width']: `${width.value}` };
});
</script>

<style src="./BlockContainer.style.scss" lang="scss" module />
