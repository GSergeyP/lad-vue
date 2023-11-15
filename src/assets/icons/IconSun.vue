<template>
  <svg-icon type="mdi" :path="path" class="icon"></svg-icon>
</template>


<script lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiWhiteBalanceSunny } from '@mdi/js';

export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
       path: mdiWhiteBalanceSunny,
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