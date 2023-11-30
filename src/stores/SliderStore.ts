import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import router from '@/router';
import { PathNames } from '@/constants/route.constants';

const useSliderStore = defineStore('slider', () => {
  const url = import.meta.env.VITE_BASE_URL;
  const data = ref([]);
  const isLoading = ref<boolean>(false);
  const isErrorData = ref<boolean>(false);

  const fetchSliderData = async () => {
    isLoading.value = true;
    try {
      const response = await axios.get(url);

      if (response.status === 200) {
        isErrorData.value = false;
        data.value = response.data;
      }
    } catch {
      isErrorData.value = true;
      router.push({ name: PathNames.NOTFOUND });
    } finally {
      isLoading.value = false;
    }
  };
  return { data, isLoading, isErrorData, fetchSliderData };
});

export { useSliderStore };

/*import { ref, computed } from 'vue';
import { defineStore } from 'pinia';


export interface IFetchingData {
  loadingDATA: boolean,
  DATA: Array<{[key: string]: string | number}> | [],
  errorDATA: boolean,
}

const initialState: IFetchingData = {
  loadingDATA: false,
  DATA: [],
  errorDATA: false,
}*/
/*
export const useFetchingDataStore = defineStore('fetchingData', () => {
  initialState: () => 

  return {  };
});*/
