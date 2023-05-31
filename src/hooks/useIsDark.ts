import { useColorMode } from '@chakra-ui/react';

export const useIsDark = () => {
  const colorMode = useColorMode();
  return {
    isDark: colorMode.colorMode === 'dark',
    isLight: colorMode.colorMode === 'light',
  };
};
