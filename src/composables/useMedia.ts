import { computed, onMounted, onUnmounted, ref, type ComputedRef } from 'vue';

type TDeviceType = 'mobile' | 'tablet' | 'desktop';

interface IUseMedia {
  device: ComputedRef<
    [
      {
        device: TDeviceType;
        deviceWidth: number;
      }
    ]
  >;
}

export const useMedia = (): IUseMedia => {
  const screenWidth = ref<number>(1920);

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

  const device: any = computed<[{ [key: string]: TDeviceType | number }]>(() => {
    if (screenWidth.value >= 1280) return [{ device: 'desktop', deviceWidth: 1200 }];
    else if (screenWidth.value < 1280 && screenWidth.value >= 768)
      return [{ device: 'tablet', deviceWidth: 700 }];
    else return [{ device: 'mobile', deviceWidth: 700 }];
  });

  return {
    device
  };
};
