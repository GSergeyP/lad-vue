<template>
  <IconArrow :class="$style['icon-left']" @click="prev" v-if="!isLoading" />
  <IconArrow :class="$style['icon-rigth']" @click="next" v-if="!isLoading" />
  <BlockContainer width="100%" :class="$style.block" v-if="!isLoading">
    <slot></slot>
    <ElementSlider :key="n" v-for="n in numberUnits" :data="data[n - 1]" :numberUnits="n - 1" />
  </BlockContainer>
  <UTags tag="div" title="Loading..." :class="$style['item-div']" v-else>
    <slot></slot>
  </UTags>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useSliderStore } from '@/stores/SliderStore';
import { useMedia } from '@/composables/useMedia/useMedia';
import BlockContainer from '@/components/BlockContainer/BlockContainer.vue';
import ElementSlider from '@/components/ElementSlider/ElementSlider.vue';
import UTags from '@/components/UTags/UTags.vue';
import IconArrow from '@/assets/icon/IconArrow.vue';
import type { IGetData } from './BlockSlider.type';

const { device } = useMedia();
const store = useSliderStore();
const data = ref<{ [key: string]: any }>({});
const isLoading = ref<boolean>(false);
const isErrorData = ref<boolean>(false);
const numberUnits = ref<number>(1);

onMounted(() => {
  store.fetchSliderData();
});

watch(store, (newStore) => {
  data.value = newStore.data;
  isLoading.value = newStore.isLoading;
  isErrorData.value = newStore.isErrorData;
});

watch(device, (newDevice) => {
  if (newDevice.device == 'mobile') numberUnits.value = 1;
  else numberUnits.value = 3;
});

const next = () => {
  let remountingData: IGetData[] = [];
  let index: number = 0;
  const { 0: DISMANTLED, ...dismantlingData } = data.value;

  for (let item in dismantlingData) {
    remountingData[index] = dismantlingData[item];
    index++;
  }

  remountingData[data.value.length - 1] = DISMANTLED;
  data.value = remountingData;
};

const prev = () => {
  let remountingData: IGetData[] = [];
  let index: number = 1;

  const { [data.value.length - 1]: DISMANTLED, ...dismantlingData } = data.value;

  for (let item in dismantlingData) {
    remountingData[index] = dismantlingData[item];
    index++;
  }

  remountingData[0] = DISMANTLED;
  data.value = remountingData;
};
</script>

<style src="./BlockSlider.style.scss" lang="scss" module />
