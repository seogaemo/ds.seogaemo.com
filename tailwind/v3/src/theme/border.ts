import { CustomThemeConfig } from "tailwindcss/types/config";

const borderColor: Partial<CustomThemeConfig> = {
  borderColor: ({ theme }) => ({
    base: theme("colors.gray.800"),
    accent: theme("colors.blue.400"),
    positive: theme("colors.green.600"),
    negative: theme("colors.red.600"),
    warning: theme("colors.yellow.600"),
  }),
};

export default borderColor;
