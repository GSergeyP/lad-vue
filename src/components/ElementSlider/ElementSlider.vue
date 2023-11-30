<template>
  <BlockContainer
    :width="numberUnits == 1 ? '60%' : device.device == 'mobile' ? '100%' : '30%'"
    :class="$style[`item-${numberUnits}`]"
    :style="{ backgroundImage: `url(${data?.src})` }"
  />
</template>

<script setup lang="ts">
import { toRefs, watch } from 'vue';
import { useMedia } from '@/composables/useMedia/useMedia';
import BlockContainer from '@/components/BlockContainer/BlockContainer.vue';
import type { IData } from './ElementSlider.type';

const props = defineProps<IData>();
const { data, numberUnits } = toRefs(props);
const { device } = useMedia();

watch(data, (newD) => {
  console.log(newD);
});
</script>

<style src="./ElementSlider.style.scss" lang="scss" module />
