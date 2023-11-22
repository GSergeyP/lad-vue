import { LocalStorageConstants } from '@/constants/ls.constants';
import { getBooleanValueFromLs } from '@/utils/ls.utils';

export const useTheme = () => {
  const currentTheme = getBooleanValueFromLs(LocalStorageConstants.THEME);
  const htmlElement = document.documentElement;

  htmlElement.setAttribute('theme', !currentTheme ? 'light' : 'dark');
  return String(currentTheme);
};
