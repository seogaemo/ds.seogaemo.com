"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.common = void 0;
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
exports.common = (0, plugin_1.default)(({ addBase, theme }) => addBase({
    "*": {
        // 기본 텍스트 컬러
        color: theme("colors.primary"),
    },
}));
