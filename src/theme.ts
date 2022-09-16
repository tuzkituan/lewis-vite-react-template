import { theme } from '@chakra-ui/pro-theme';
import { extendTheme } from '@chakra-ui/react';

import '@fontsource/inter'; // yarn add @fontsource/inter

const overrides = {
  colors: { ...theme.colors, brand: theme.colors.red }, // main color
  fonts: {
    heading: 'Inter, -apple-system, system-ui, sans-serif',
    body: 'Inter, -apple-system, system-ui, sans-serif',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
};

export default extendTheme(overrides);
