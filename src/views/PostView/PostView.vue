<template>
  <div class="post-wrapper">
    <PageContainer class="post-container" :width="1200" :is-full-width="false">
      <div v-if="data">
        <h3>{{ data?.title }}</h3>
        <p>{{ data?.body }}</p>
      </div>
      <div v-else>Пост не найден!</div>
    </PageContainer>
  </div>
</template>

<script setup lang="ts">
import PageContainer from '@/components/PageContainer/PageContainer.vue';
import { Connect } from '@/connection/ConnectionAxios';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const data = ref<{ [key: string]: any }>([]);
const route = useRoute();

const id = String(route.params.id);
watchEffect(async () => {
  Connect(id).then((resp) => (data.value = resp.data));
});
</script>

<style src="./PostView.style.scss" lang="scss" scoped></style>
