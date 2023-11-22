<template>
  <div class="wrapper">
    <PageHeader />
    <PageNavigate />
    <PageContent>
      <template #breadcrumbs>
        <PageBreadcrumbs />
      </template>
      <slot></slot>
    </PageContent>
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/PageContent/PageContent.vue';
import PageFooter from '@/components/PageFooter/PageFooter.vue';
import PageHeader from '@/components/PageHeader/PageHeader.vue';
import PageNavigate from '@/components/PageNavigate/PageNavigate.vue';
import PageBreadcrumbs from '@/components/PageBreadcrumbs/PageBreadcrumbs.vue';
</script>

<style src="./MainLayout.style.scss" lang="scss" scoped></style>
