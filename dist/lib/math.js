"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exponential = exports.round = exports.floor = void 0;
function floor(value, precision) {
    const d = Math.pow(10, precision);
    return Math.floor(value * d) / d;
}
exports.floor = floor;
function round(value, precision) {
    const d = Math.pow(10, precision);
    return Math.round(value * d) / d;
}
exports.round = round;
function exponential(base, e) {
    if (e === 0) {
        return 0;
    }
    return (Math.pow(base, e)) / base;
}
exports.exponential = exponential;
