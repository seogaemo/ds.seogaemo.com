import { PluginCreator } from "tailwindcss/types/config";

export const fonts: PluginCreator = (api) =>
  api.addBase([
    {
      "@import":
        'url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");',
    },
    {
      "@import":
        'url("https://cdn.jsdelivr.net/gh/sun-typeface/SUITE@2/fonts/static/woff2/SUITE.css");',
    },
  ]);
