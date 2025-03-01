import { CustomThemeConfig } from "tailwindcss/types/config";

const contentColor: Partial<CustomThemeConfig> = {
  colors: ({ theme }) => ({
    primary: theme("colors.gray.100"),
    secondary: theme("colors.gray.300"),
    tertiary: theme("colors.gray.400"),
    quaternary: theme("colors.gray.500"),
    unselected: theme("colors.gray.600"),
    unable: theme("colors.gray.700"),
    accent: theme("colors.blue.500"),
    positive: theme("colors.green.500"),
    negative: theme("colors.red.500"),
    warning: theme("colors.yellow.500"),
  }),
};

export default contentColor;
