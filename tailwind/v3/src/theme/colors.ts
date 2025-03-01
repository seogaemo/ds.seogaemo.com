import { CustomThemeConfig } from "tailwindcss/types/config";

import { chip } from "./chip";

const colors: Pick<CustomThemeConfig, "colors"> = {
  colors: {
    primary: "var(--content-primary)",
    secondary: "var(--content-secondary)",
    tertiary: "var(--content-tertiary)",
    quaternary: "var(--content-quaternary)",
    unselected: "var(--content-unselected)",
    unable: "var(--content-unable)",
    accent: "var(--content-accent)",
    positive: "var(--content-positive)",
    negative: "var(--content-negative)",
    warning: "var(--content-warning)",

    ...chip,
  },
};

export default colors;
