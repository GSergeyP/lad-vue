<template>
  <BlockContainer :class="$style.block" :width="device.device == 'mobile' ? '100%' : '90%'">
    <UTags tag="h1" :class="$style['item-h1']" title="GROWTASK" />
    <UTags tag="button" :class="$style['item-button']" title="Модальное окно" />
  </BlockContainer>
</template>

<script setup lang="ts">
import { useMedia } from '@/composables/useMedia/useMedia';
import BlockContainer from '@/components/BlockContainer/BlockContainer.vue';
import UTags from '@/components/UTags/UTags.vue';

const { device } = useMedia();
</script>

<style src="./MainView.style.scss" lang="scss" module />
