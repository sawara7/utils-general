"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exponential = exports.floor = void 0;
function floor(value, precision) {
    return Math.floor(value * precision) / precision;
}
exports.floor = floor;
function exponential(base, e) {
    if (e === 0) {
        return 0;
    }
    return (Math.pow(base, e)) / base;
}
exports.exponential = exponential;
