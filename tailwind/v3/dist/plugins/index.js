"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fonts_1 = require("./fonts");
const tokens_1 = require("./tokens");
const common_1 = require("./common");
const plugins = [fonts_1.fonts, tokens_1.tokens, common_1.common];
exports.default = plugins;
