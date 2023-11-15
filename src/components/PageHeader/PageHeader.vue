<template>
  <header class="header">
    <div v-if="device == 'Mobile'">
      <PageHeaderMobile />
    </div>
    <div v-else-if="device == 'Tablet'">
      <PageHeaderTablet />
    </div>
    <div v-else>
      <PageHeaderDesktop />
    </div>

    <button @click="() => toggleTheme('dark')" v-if="userTheme != 'dark'"><IconMoon /></button>
    <button @click="() => toggleTheme('light')" v-if="userTheme != 'light'"><IconSun /></button>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, toRefs } from 'vue';
import PageHeaderMobile from '@/components/PageHeader/PageHeader.mobile.vue';
import PageHeaderTablet from '@/components/PageHeader/PageHeader.tablet.vue';
import PageHeaderDesktop from '@/components/PageHeader/PageHeader.desktop.vue';
import IconSun from '@/assets/icons/IconSun.vue';
import IconMoon from '@/assets/icons/IconMoon.vue';
import type { TUserTheme } from '@/components/PageHeader/PageHeader.types';

const props = defineProps<{ device: string }>();
const { device } = toRefs(props);

///////////////////////////////////////
const getTheme = (): TUserTheme => {
  // Проверка установки темы
  let htmlElement = document.documentElement;
  let userTheme = localStorage.getItem('theme') as TUserTheme;

  if (!userTheme) userTheme = 'light';
  htmlElement.setAttribute('theme', userTheme);
  return userTheme;
};

const userTheme = ref<TUserTheme>(getTheme());

watch(
  userTheme,
  (theme) => {
    let htmlElement = document.documentElement;
    localStorage.setItem('theme', theme);
    htmlElement.setAttribute('theme', theme);
  },
  {}
);

const toggleTheme = (theme: TUserTheme): void => {
  userTheme.value = theme;
};
</script>

<style lang="scss" src="@/components/PageHeader/PageHeader.style.scss" scoped />