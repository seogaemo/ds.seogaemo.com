import { CustomThemeConfig } from "tailwindcss/types/config";

const borderColor: Partial<CustomThemeConfig> = {
  borderColor: {
    base: "var(--border-base)",
    accent: "var(--border-accent)",
    positive: "var(--border-positive)",
    negative: "var(--border-negative)",
    warning: "var(--border-warning)",
  },
};

export default borderColor;
