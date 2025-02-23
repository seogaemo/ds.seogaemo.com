import { CustomThemeConfig } from "tailwindcss/types/config";

const typography: Partial<CustomThemeConfig> = {
  fontFamily: {
    default: "Pretendard",
    special: "SUITE",
  },
  fontWeight: {
    default: "500",
    strong: "600",
  },
  fontSize: (utils) => ({
    caption: [
      "12px",
      {
        lineHeight: "16px",
        letterSpacing: "-0.3px",
        fontWeight: utils.theme("fontWeight.default"),
      },
    ],
    label: [
      "13px",
      {
        lineHeight: "18px",
        letterSpacing: "-0.3px",
        fontWeight: utils.theme("fontWeight.default"),
      },
    ],
    footnote: [
      "14px",
      {
        lineHeight: "20px",
        letterSpacing: "-0.4px",
        fontWeight: utils.theme("fontWeight.default"),
      },
    ],
    body: [
      "15px",
      {
        lineHeight: "22px",
        letterSpacing: "-0.4px",
        fontWeight: utils.theme("fontWeight.default"),
      },
    ],
    title: [
      "16px",
      {
        lineHeight: "24px",
        letterSpacing: "-0.5px",
        fontWeight: utils.theme("fontWeight.default"),
      },
    ],
    heading: [
      "17px",
      {
        lineHeight: "26px",
        letterSpacing: "-0.5px",
        fontWeight: utils.theme("fontWeight.default"),
      },
    ],
    headline: [
      "20px",
      {
        lineHeight: "28px",
        letterSpacing: "-0.8px",
        fontWeight: utils.theme("fontWeight.default"),
      },
    ],
    display: [
      "28px",
      {
        lineHeight: "40px",
        letterSpacing: "-1px",
        fontWeight: utils.theme("fontWeight.default"),
      },
    ],
  }),
};

export default typography;
