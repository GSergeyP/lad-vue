<template>
  <header class="header">
    Учебный проект 2023
    <button @click="() => toggleTheme('false')" v-if="theme == 'true'"><IconSun /></button>
    <button @click="() => toggleTheme('true')" v-else><IconMoon /></button>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { LocalStorageConstants } from '@/constants/ls.constants';
import { useTheme } from '@/composables/useTheme';

import { useRoute } from 'vue-router';

import IconSun from '@/assets/icons/IconSun.vue';
import IconMoon from '@/assets/icons/IconMoon.vue';

const route = useRoute();
const currentTheme = useTheme();
const theme = ref<string>(currentTheme);

onMounted(() => {
  if (route.query.theme == 'true' || route.query.theme == 'false') theme.value = route.query.theme;
});

watch(theme, (newTheme) => {
  localStorage.setItem(LocalStorageConstants.THEME, newTheme);
  useTheme();
});

const toggleTheme = (themes: string): void => {
  theme.value = themes;
  window.location.href = `${route.path}?theme=${theme.value}`;
};
</script>

<style lang="scss" src="@/components/PageHeader/PageHeader.style.scss" scoped />
