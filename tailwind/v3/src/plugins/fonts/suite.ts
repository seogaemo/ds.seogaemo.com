const base =
  "https://cdn.jsdelivr.net/gh/sun-typeface/SUITE@2/fonts/static/woff2";

const family = "SUITE";

const weight = {
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold",
  800: "ExtraBold",
  900: "Heavy",
};

export const suite = {
  "@font-face": Object.entries(weight).map(([wgt, name]) => ({
    "font-family": family,
    "font-weight": Number(wgt),
    src: `url('${base}/${family}-${name}.woff2') format('woff2')`,
  })),
};
