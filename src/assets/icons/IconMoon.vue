<template>
  <svg-icon type="mdi" :path="path" class="icon"></svg-icon>
</template>


<script lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiWeatherNight } from '@mdi/js';

export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
       path: mdiWeatherNight,
    }
  }
}
</script>

<style>
	.icon {
		width: 4vw;
		height: 4vw;
	}
</style>