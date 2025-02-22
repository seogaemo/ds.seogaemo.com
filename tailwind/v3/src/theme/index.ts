import type { Config } from "tailwindcss";

import colors from "./colors";
import typhography from "./typhography";

const theme: Pick<Config, "theme"> = {
  theme: {
    ...typhography,
    extend: {
      ...colors,
    },
  },
};

export default theme;
