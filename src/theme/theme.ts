/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeConfig, extendTheme } from '@chakra-ui/react';

import { switchTheme } from 'src/theme/Switch';

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
    text: {
      light: '#1A202C',
      dark: '#F7FAFC',
    },
    primary: {
      50: '#f1eefe',
      100: '#d4cbfc',
      200: '#a997f9',
      300: '#9a85f8',
      400: '#7d62f6',
      500: '#6f51f5',
      600: '#6449dd',
      700: '#433193',
      800: '#2c2062',
      900: '#161031',
    },
    dark: {
      bg: '#141414',
      text: '#F7FAFC',
    },
    light: {
      bg: '#FAF9F6',
      text: '#1A202C',
    },
  },
  components: { Switch: switchTheme },
});

export default theme;
