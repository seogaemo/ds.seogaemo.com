const base =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static";

const family = "Pretendard";

const weight = {
  100: "Thin",
  200: "ExtraLight",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold",
  800: "ExtraBold",
  900: "Black",
};

export const pretendard = {
  "@font-face": Object.entries(weight).map(([wgt, name]) => ({
    "font-family": family,
    "font-weight": Number(wgt),
    "font-display": "swap",
    src: `local('${family} ${name}'), url('${base}/woff2/${family}-${name}.woff2') format('woff2'), url('${base}/woff/${family}-${name}.woff') format('woff')`,
  })),
};
