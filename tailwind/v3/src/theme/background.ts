import { CustomThemeConfig } from "tailwindcss/types/config";

const backgroundColor: Partial<CustomThemeConfig> = {
  backgroundColor: ({ theme }) => ({
    base: {
      DEFAULT: theme("colors.black"),
      pressed: theme("colors.gray.900"),
      elevated: {
        DEFAULT: theme("colors.gray.900"),
        pressed: theme("colors.gray.800"),
      },
      border: theme("colors.gray.800"),
    },
    accent: {
      DEFAULT: theme("colors.blue.500"),
      pressed: theme("colors.blue.400"),
      elevated: {
        DEFAULT: theme("colors.blue.900"),
        pressed: theme("colors.blue.800"),
      },
      border: theme("colors.blue.400"),
    },
    positive: {
      DEFAULT: theme("colors.green.500"),
      pressed: theme("colors.green.400"),
      elevated: {
        DEFAULT: theme("colors.green.900"),
        pressed: theme("colors.green.800"),
      },
      border: theme("colors.green.600"),
    },
    negative: {
      DEFAULT: theme("colors.red.500"),
      pressed: theme("colors.red.400"),
      elevated: {
        DEFAULT: theme("colors.red.900"),
        pressed: theme("colors.red.800"),
      },
      border: theme("colors.red.600"),
    },
    warning: {
      DEFAULT: theme("colors.yellow.500"),
      hover: theme("colors.yellow.400"),
      elevated: {
        DEFAULT: theme("colors.yellow.900"),
        pressed: theme("colors.yellow.800"),
      },
      border: theme("colors.yellow.600"),
    },
  }),
};

export default backgroundColor;
