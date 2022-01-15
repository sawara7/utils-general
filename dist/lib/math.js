"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.floor = void 0;
function floor(value, precision) {
    return Math.floor(value * precision) / precision;
}
exports.floor = floor;
