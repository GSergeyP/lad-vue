<template>
  <nav>
    <IconMenu
      @click="isToggle"
      :class="$style['item-icon']"
      v-if="device == 'mobile' && !visibility"
    />
    <IconClose
      @click="isToggle"
      :class="$style['item-icon']"
      v-if="device == 'mobile' && visibility"
    />

    <ul :class="$style[`item-${device}`]" v-if="visibility">
      <li :key="item.title" v-for="item in data">
        <router-link
          @click="
            () => {
              device == 'mobile' ? isToggle() : null;
            }
          "
          :active-class="$style['active-link']"
          :class="$style.link"
          :to="{ name: item.href }"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import IconMenu from '@/assets/icon/IconMenu.vue';
import IconClose from '@/assets/icon/IconClose.vue';
import type { ILinks } from './ElementNavigate.type';

const props = defineProps<ILinks>();
const { data, device, show } = toRefs(props);
const visibility = ref<boolean>(show.value);

const isToggle = () => {
  visibility.value = !visibility.value;
};
</script>

<style src="./ElementNavigate.style.scss" lang="scss" module />
