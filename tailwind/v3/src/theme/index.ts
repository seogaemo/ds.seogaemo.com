import type { Config } from "tailwindcss";

import colors from "./colors";
import typography from "./typography";
import background from "./background";
import border from "./border";

const theme: Pick<Config, "theme"> = {
  theme: {
    ...colors,
    ...typography,
    extend: {
      ...background,
      ...border,
    },
  },
};

export default theme;
