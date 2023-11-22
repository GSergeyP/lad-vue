<template>
  <main class="main">
    <PageContainer
      :is-full-width="device[0].device === 'mobile' ? true : false"
      :width="device[0].deviceWidth"
    >
      <slot name="breadcrumbs"></slot>
      <h3>{{ $route.meta.title }}</h3>
      <slot></slot>
    </PageContainer>
  </main>
</template>

<script setup lang="ts">
import PageContainer from '@/components/PageContainer/PageContainer.vue';
import { useMedia } from '@/composables/useMedia';

const { device } = useMedia();
</script>

<style lang="scss" src="@/components/PageContent/PageContent.style.scss" scoped />
