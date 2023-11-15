<template>
  <footer class="footer">
    <div v-if="device == 'Mobile'">
      <PageFooterMobile />
    </div>
    <div v-else-if="device == 'Tablet'">
      <PageFooterTablet />
    </div>
    <div v-else>
      <PageFooterDesktop />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import PageFooterMobile from '@/components/PageFooter/PageFooter.mobile.vue';
import PageFooterTablet from '@/components/PageFooter/PageFooter.tablet.vue';
import PageFooterDesktop from '@/components/PageFooter/PageFooter.desktop.vue';

const props = defineProps<{ device: string }>();
const { device } = toRefs(props);
</script>

<style lang="scss" src="@/components/PageFooter/PageFooter.style.scss" scoped />