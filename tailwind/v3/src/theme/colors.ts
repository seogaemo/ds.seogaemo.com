import { CustomThemeConfig } from "tailwindcss/types/config";

import { chip } from "./chip";

const colors: Pick<CustomThemeConfig, "colors"> = {
  colors: {
    primary: chip.gray[100],
    secondary: chip.gray[300],
    tertiary: chip.gray[400],
    quaternary: chip.gray[500],
    unselected: chip.gray[600],
    unable: chip.gray[700],
    accent: chip.blue[500],
    positive: chip.green[500],
    negative: chip.red[500],
    warning: chip.yellow[500],

    ...chip,
  },
};

export default colors;
