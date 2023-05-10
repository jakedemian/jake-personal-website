/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeConfig, extendTheme } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles = {
  global: (props: Record<string, any>) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'dark.bg' : 'light.bg',
      color: props.colorMode === 'dark' ? 'dark.text' : 'light.text',
    },
  }),
};

const theme = extendTheme({
  config,
  styles,
  colors: {
    dark: {
      brand: {
        //100: "#ff0000",
      },
      bg: '#1A202C',
      text: '#F7FAFC',
    },
    light: {
      bg: '#F7FAFC',
      text: '#1A202C',
    },
  },
});

export default theme;
