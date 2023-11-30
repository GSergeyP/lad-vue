<template>
  <BlockContainer :width="'100%'" :class="$style.block">
    <ElementNavigate
      v-if="navigateLinksDesktop.length > 0"
      :data="navigateLinksDesktop"
      :device="'desktop'"
      :show="true"
    />
    <ElementNavigate
      v-if="navigateLinksMobile.length > 0"
      :data="navigateLinksMobile"
      :device="'mobile'"
      :show="false"
    />
  </BlockContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useMedia } from '@/composables/useMedia/useMedia';
import BlockContainer from '@/components/BlockContainer/BlockContainer.vue';
import ElementNavigate from '@/components/ElementNavigate/ElementNavigate.vue';

import { navigateLinks } from './BlockNavigation.data';
import type { INavigateLinks } from './BlockNavigation.type';

const { device } = useMedia();

const navigateLinksMobile = computed(() => {
  let navigateLinksMobile: INavigateLinks[] = [];
  if (device.value.device == 'tablet') {
    let index =
      Math.trunc(
        (Number(device.value.screenWidth.replace('px', '')) * 1.1 - device.value.bSR_0) /
          ((device.value.bSR_1 - device.value.bSR_0) / (navigateLinks.length - 2))
      ) + 3;
    navigateLinksMobile = navigateLinks.slice(index);
  }
  if (device.value.device == 'mobile') {
    navigateLinksMobile = navigateLinks;
  }
  return navigateLinksMobile;
});

const navigateLinksDesktop = computed(() => {
  let navigateLinksDesktop: INavigateLinks[] = [];
  if (device.value.device == 'tablet') {
    navigateLinksDesktop = navigateLinks.filter(
      (item) => navigateLinksMobile.value.indexOf(item) == -1
    );
  }
  if (device.value.device == 'desktop') {
    navigateLinksDesktop = navigateLinks;
  }
  return navigateLinksDesktop;
});
</script>

<style src="./BlockNavigation.style.scss" lang="scss" module />
