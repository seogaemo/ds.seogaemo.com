import plugin from "tailwindcss/plugin";

export const tokens = plugin(({ addBase, theme }) =>
  addBase({
    // Light
    ":root": {
      "--bg-base": theme("colors.gray.100"),
      "--bg-base-pressed": theme("colors.gray.200"),
      "--bg-base-elevated": theme("colors.white"),
      "--bg-base-elevated-pressed": theme("colors.gray.100"),
      "--border-base": theme("colors.gray.200"),

      "--bg-accent": theme("colors.blue.500"),
      "--bg-accent-pressed": theme("colors.blue.600"),
      "--bg-accent-elevated": theme("colors.blue.100"),
      "--bg-accent-elevated-pressed": theme("colors.blue.200"),
      "--border-accent": theme("colors.blue.600"),

      "--bg-positive": theme("colors.green.500"),
      "--bg-positive-pressed": theme("colors.green.600"),
      "--bg-positive-elevated": theme("colors.green.100"),
      "--bg-positive-elevated-pressed": theme("colors.green.200"),
      "--border-positive": theme("colors.green.600"),

      "--bg-negative": theme("colors.red.500"),
      "--bg-negative-pressed": theme("colors.red.600"),
      "--bg-negative-elevated": theme("colors.red.100"),
      "--bg-negative-elevated-pressed": theme("colors.red.200"),
      "--border-negative": theme("colors.red.600"),

      "--bg-warning": theme("colors.yellow.500"),
      "--bg-warning-hover": theme("colors.yellow.600"),
      "--bg-warning-elevated": theme("colors.yellow.100"),
      "--bg-warning-elevated-pressed": theme("colors.yellow.200"),
      "--border-warning": theme("colors.yellow.600"),

      "--content-primary": theme("colors.gray.900"),
      "--content-secondary": theme("colors.gray.700"),
      "--content-tertiary": theme("colors.gray.600"),
      "--content-quaternary": theme("colors.gray.500"),
      "--content-unselected": theme("colors.gray.400"),
      "--content-unable": theme("colors.gray.300"),
      "--content-accent": theme("colors.blue.500"),
      "--content-positive": theme("colors.green.500"),
      "--content-negative": theme("colors.red.500"),
      "--content-warning": theme("colors.yellow.500"),
    },

    // Dark
    ":root[data-theme='dark']": {
      "--bg-base": theme("colors.black"),
      "--bg-base-pressed": theme("colors.gray.900"),
      "--bg-base-elevated": theme("colors.gray.900"),
      "--bg-base-elevated-pressed": theme("colors.gray.800"),
      "--border-base": theme("colors.gray.800"),

      "--bg-accent": theme("colors.blue.500"),
      "--bg-accent-pressed": theme("colors.blue.400"),
      "--bg-accent-elevated": theme("colors.blue.900"),
      "--bg-accent-elevated-pressed": theme("colors.blue.800"),
      "--border-accent": theme("colors.blue.400"),

      "--bg-positive": theme("colors.green.500"),
      "--bg-positive-pressed": theme("colors.green.400"),
      "--bg-positive-elevated": theme("colors.green.900"),
      "--bg-positive-elevated-pressed": theme("colors.green.800"),
      "--border-positive": theme("colors.green.600"),

      "--bg-negative": theme("colors.red.500"),
      "--bg-negative-pressed": theme("colors.red.400"),
      "--bg-negative-elevated": theme("colors.red.900"),
      "--bg-negative-elevated-pressed": theme("colors.red.800"),
      "--border-negative": theme("colors.red.600"),

      "--bg-warning": theme("colors.yellow.500"),
      "--bg-warning-hover": theme("colors.yellow.400"),
      "--bg-warning-elevated": theme("colors.yellow.900"),
      "--bg-warning-elevated-pressed": theme("colors.yellow.800"),
      "--border-warning": theme("colors.yellow.600"),

      "--content-primary": theme("colors.gray.100"),
      "--content-secondary": theme("colors.gray.300"),
      "--content-tertiary": theme("colors.gray.400"),
      "--content-quaternary": theme("colors.gray.500"),
      "--content-unselected": theme("colors.gray.600"),
      "--content-unable": theme("colors.gray.700"),
      "--content-accent": theme("colors.blue.500"),
      "--content-positive": theme("colors.green.500"),
      "--content-negative": theme("colors.red.500"),
      "--content-warning": theme("colors.yellow.500"),
    },
  })
);
