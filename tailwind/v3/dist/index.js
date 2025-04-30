"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = __importDefault(require("./theme"));
const plugins_1 = __importDefault(require("./plugins"));
const config = {
    ...theme_1.default,
    plugins: plugins_1.default,
};
exports.default = config;
