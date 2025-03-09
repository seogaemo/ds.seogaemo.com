import plugin from "tailwindcss/plugin";

export const common = plugin(({ addBase, theme }) =>
  addBase({
    "*": {
      // 기본 텍스트 컬러
      color: theme("colors.primary"),
    },
  })
);
