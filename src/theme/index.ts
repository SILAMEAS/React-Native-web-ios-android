import {extendTheme} from 'native-base';
import {
  colors,
  spacing,
  typography,
  borderWidths,
  breakpoints,
  borderRadius,
  opacity,
  sizes,
} from './config';
export const BaseTheme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: '8px',
        color: 'gray.300',
      },
      // variants: {
      //     rounded: ({
      //                   colorScheme
      //               }:any) => {
      //         return {
      //             bg: `${colorScheme}.500`,
      //             rounded: "full"
      //         };
      //     }
      // }
    },
    Input: {
      baseStyle: {
        color: 'white',
        paddingLeft: '10px',
        height: '40px',
        border: '5px solid',
        borderColor: 'white',
        borderBottomColor: 'white',
        hovered: {
          borderColor: 'white',
        },
        focused: {
          background: 'none',
          outline: 'none',
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'gray.300',
      },
      variants: {
        smallText: {
          color: 'gray.300',
          fontWeight: '300',
          fontSize: 12,
        },
      },
      sizes: {
        xl: {
          fontSize: '64px',
        },
        lg: {
          fontSize: '32px',
        },
        md: {
          fontSize: '20px',
        },
        sm: {
          fontSize: '14px',
        },
      },
    },
  },
  sizes,
  space: spacing,
  opacity,
  ...typography,
  borderWidths,
  breakpoints,
  colors,
  radii: borderRadius,
  Pressable: {
    cursor: 'pointer',
  },

  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'light',
  },
});
