import { computed, onMounted, onUnmounted, ref } from 'vue';
import { borderScreenResolution } from './useMedia.data';
import type { IDevice, IUseMedia } from './useMedia.type';

const useMedia = (): IUseMedia => {
  const screenWidth = ref<number>(0);

  const changeSizeWindow = () => {
    screenWidth.value = window.innerWidth;
  };

  onMounted(() => {
    screenWidth.value = window.innerWidth;

    window.addEventListener('resize', changeSizeWindow);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', changeSizeWindow);
  });

  const device = computed<IDevice>(() => {
    if (screenWidth.value >= borderScreenResolution[1])
      return {
        screenWidth: screenWidth.value * 0.9 + 'px',
        device: 'desktop',
        bSR_0: borderScreenResolution[0],
        bSR_1: borderScreenResolution[1]
      };
    else if (
      screenWidth.value < borderScreenResolution[1] &&
      screenWidth.value >= borderScreenResolution[0]
    )
      return {
        screenWidth: screenWidth.value * 0.9 + 'px',
        device: 'tablet',
        bSR_0: borderScreenResolution[0],
        bSR_1: borderScreenResolution[1]
      };
    else
      return {
        screenWidth: '100%',
        device: 'mobile',
        bSR_0: borderScreenResolution[0],
        bSR_1: borderScreenResolution[1]
      };
  });

  return { device };
};

export { useMedia };
