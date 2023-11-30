<template>
  <component :is="tag" :src="src" :alt="alt">
    {{ title }}
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import type { IUTags } from './UTags.type';

const props = defineProps<IUTags>();

const { tag, title } = toRefs(props);
</script>
