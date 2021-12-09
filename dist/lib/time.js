"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function timeBeforeSec(sec) {
    return Date.now() - sec * 1000;
}
exports.timeBeforeSec = timeBeforeSec;
function timeBeforeMin(min) {
    return Date.now() - min * 1000 * 60;
}
exports.timeBeforeMin = timeBeforeMin;
