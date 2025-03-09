import plugin from "tailwindcss/plugin";

export const common = plugin(({ addBase }) =>
  addBase({
    "*": {
      // 기본 텍스트 컬러
      color: "var(--content-primary)",
    },
  })
);
