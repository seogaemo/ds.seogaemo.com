import { CustomThemeConfig } from "tailwindcss/types/config";

const backgroundColor: Partial<CustomThemeConfig> = {
  backgroundColor: {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    base: {
      DEFAULT: "var(--bg-base)",
      pressed: "var(--bg-base-pressed)",
      elevated: {
        DEFAULT: "var(--bg-base-elevated)",
        pressed: "var(--bg-base-elevated-pressed)",
      },
    },
    accent: {
      DEFAULT: "var(--bg-accent)",
      pressed: "var(--bg-accent-pressed)",
      elevated: {
        DEFAULT: "var(--bg-accent-elevated)",
        pressed: "var(--bg-accent-elevated-pressed)",
      },
    },
    positive: {
      DEFAULT: "var(--bg-positive)",
      pressed: "var(--bg-positive-pressed)",
      elevated: {
        DEFAULT: "var(--bg-positive-elevated)",
        pressed: "var(--bg-positive-elevated-pressed)",
      },
    },
    negative: {
      DEFAULT: "var(--bg-negative)",
      pressed: "var(--bg-negative-pressed)",
      elevated: {
        DEFAULT: "var(--bg-negative-elevated)",
        pressed: "var(--bg-negative-elevated-pressed)",
      },
    },
    warning: {
      DEFAULT: "var(--bg-warning)",
      hover: "var(--bg-warning-hover)",
      elevated: {
        DEFAULT: "var(--bg-warning-elevated)",
        pressed: "var(--bg-warning-elevated-pressed)",
      },
    },
  },
};

export default backgroundColor;
