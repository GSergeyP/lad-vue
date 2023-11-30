<template>
  <BlockSlideres>
    <UTags :class="$style['item-h1']" tag="h1" title="GROWTASK" />
  </BlockSlideres>
</template>
<script setup lang="ts">
import BlockSlideres from '@/components/BlockSlider/BlockSlider.vue';
import UTags from '@/components/UTags/UTags.vue';
</script>

<style src="./SliderView.style.scss" lang="scss" module />
