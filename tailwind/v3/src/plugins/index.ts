import { PluginsConfig } from "tailwindcss/types/config";

import { fonts } from "./fonts";
import { tokens } from "./tokens";
import { common } from "./common";

const plugins: PluginsConfig = [fonts, tokens, common];

export default plugins;
