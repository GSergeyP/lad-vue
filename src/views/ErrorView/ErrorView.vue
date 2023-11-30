<template>
  <UTags :class="$style['item-logo']" tag="h1" title="GROWTASK" />
  <UTags :class="$style['item-h1']" tag="h1" title="404" />
</template>

<script setup lang="ts">
import UTags from '@/components/UTags/UTags.vue';
</script>

<style src="./ErrorView.stule.scss" lang="scss" module />
