import plugin from "tailwindcss/plugin";

import { suite } from "./suite";
import { pretendard } from "./pretendard";

export const fonts = plugin((api) => api.addBase([suite, pretendard]));
