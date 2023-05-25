import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  track: {
    bg: 'primary.200',
    _checked: {
      bg: 'primary.500',
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
