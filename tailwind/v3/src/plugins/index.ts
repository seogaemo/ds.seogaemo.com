import { PluginsConfig } from "tailwindcss/types/config";

import { fonts } from "./fonts";
import { tokens } from "./tokens";

const plugins: PluginsConfig = [fonts, tokens];

export default plugins;
