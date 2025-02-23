import type { Config } from "tailwindcss";

import colors from "./colors";
import typography from "./typography";

const theme: Pick<Config, "theme"> = {
  theme: {
    ...typography,
    extend: {
      ...colors,
    },
  },
};

export default theme;
