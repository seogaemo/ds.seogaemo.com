"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fonts = void 0;
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const pretendard_1 = require("./pretendard");
const suite_1 = require("./suite");
exports.fonts = (0, plugin_1.default)((api) => api.addBase([
    pretendard_1.pretendard,
    suite_1.suite,
    { "*": { fontFamily: "'Pretendard', sans-serif" } },
]));
