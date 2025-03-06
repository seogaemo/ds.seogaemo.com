import plugin from "tailwindcss/plugin";

import { pretendard } from "./pretendard";
import { suite } from "./suite";

export const fonts = plugin((api) =>
  api.addBase([
    pretendard as any,
    suite as any,
    { "*": { fontFamily: "'Pretendard', sans-serif" } },
  ])
);
