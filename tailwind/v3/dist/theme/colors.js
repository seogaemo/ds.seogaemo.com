"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chip_1 = require("./chip");
const colors = {
    colors: {
        primary: "var(--content-primary)",
        secondary: "var(--content-secondary)",
        tertiary: "var(--content-tertiary)",
        quaternary: "var(--content-quaternary)",
        unselected: "var(--content-unselected)",
        unable: "var(--content-unable)",
        content: {
            accent: "var(--content-accent)",
            positive: "var(--content-positive)",
            negative: "var(--content-negative)",
            warning: "var(--content-warning)",
        },
        ...chip_1.chip,
    },
};
exports.default = colors;
