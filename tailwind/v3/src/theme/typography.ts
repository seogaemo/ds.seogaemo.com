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
  fontSize: (utils) => {
    const defaultFontWeight = utils.theme("fontWeight.default") as string;

    const sizes: {
      [k: string]: [
        fontSize: string,
        configuration: Partial<{
          lineHeight: string;
          letterSpacing: string;
          fontWeight: string | number;
        }>
      ];
    } = {
      caption: [
        "12px",
        {
          lineHeight: "16px",
          letterSpacing: "-0.3px",
          fontWeight: defaultFontWeight,
        },
      ],
      label: [
        "13px",
        {
          lineHeight: "18px",
          letterSpacing: "-0.3px",
          fontWeight: defaultFontWeight,
        },
      ],
      footnote: [
        "14px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.4px",
          fontWeight: defaultFontWeight,
        },
      ],
      body: [
        "15px",
        {
          lineHeight: "22px",
          letterSpacing: "-0.4px",
          fontWeight: defaultFontWeight,
        },
      ],
      title: [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.5px",
          fontWeight: defaultFontWeight,
        },
      ],
      heading: [
        "17px",
        {
          lineHeight: "26px",
          letterSpacing: "-0.5px",
          fontWeight: defaultFontWeight,
        },
      ],
      headline: [
        "20px",
        {
          lineHeight: "28px",
          letterSpacing: "-0.8px",
          fontWeight: defaultFontWeight,
        },
      ],
      display: [
        "28px",
        {
          lineHeight: "40px",
          letterSpacing: "-1px",
          fontWeight: defaultFontWeight,
        },
      ],
    };

    // Paragraph
    Object.entries(sizes).forEach(([key, value]) => {
      sizes[`${key}-paragraph`] = [
        value[0],
        {
          lineHeight: `${
            Number(value[1].lineHeight?.split("px")[0] ?? 0) + 4
          }px`,
          letterSpacing: value[1].letterSpacing,
          fontWeight: value[1].fontWeight,
        },
      ];
    });

    return sizes;
  },
};

export default typography;
