import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'full',
    textTransform: 'uppercase',
    variants: {
      custom: {
        color: '#d1d1e9',
      },
    },
  },
});
