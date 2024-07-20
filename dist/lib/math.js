"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.floor = floor;
exports.round = round;
exports.exponential = exponential;
function floor(value, precision) {
    const d = Math.pow(10, precision);
    return Math.floor(value * d) / d;
}
function round(value, precision) {
    const d = Math.pow(10, precision);
    return Math.round(value * d) / d;
}
function exponential(base, e) {
    if (e === 0) {
        return 0;
    }
    return (Math.pow(base, e)) / base;
}
