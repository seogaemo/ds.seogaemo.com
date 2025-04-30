"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("./colors"));
const typography_1 = __importDefault(require("./typography"));
const background_1 = __importDefault(require("./background"));
const border_1 = __importDefault(require("./border"));
const theme = {
    theme: {
        ...colors_1.default,
        ...typography_1.default,
        extend: {
            ...background_1.default,
            ...border_1.default,
        },
    },
};
exports.default = theme;
