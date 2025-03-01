import type { Config } from "tailwindcss";

import colors from "./colors";
import typography from "./typography";
import background from "./background";

const theme: Pick<Config, "theme"> = {
  theme: {
    ...colors,
    ...typography,
    ...background,
  },
};

export default theme;
