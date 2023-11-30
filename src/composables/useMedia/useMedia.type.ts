import type { ComputedRef } from 'vue';

interface IDevice {
  screenWidth: string;
  device: string;
  bSR_0: number;
  bSR_1: number;
}

interface IUseMedia {
  device: ComputedRef<IDevice>;
}

export type { IDevice, IUseMedia };
