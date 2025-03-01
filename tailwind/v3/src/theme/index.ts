import type { Config } from "tailwindcss";

import colors from "./colors";
import typography from "./typography";
import background from "./background";
import content from "./content";

const theme: Pick<Config, "theme"> = {
  theme: {
    ...content,
    ...typography,
    ...background,

    extend: {
      ...colors,
    },
  },
};

export default theme;
