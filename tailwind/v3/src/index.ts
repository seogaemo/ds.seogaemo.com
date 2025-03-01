import type { Config } from "tailwindcss";

import theme from "./theme";
import plugins from "./plugins";

const config: Omit<Config, "content"> = {
  ...theme,
  plugins: plugins,
};

export default config;
