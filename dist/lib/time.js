"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function TimeBeforeSec(sec) {
    return Date.now() - sec * 1000;
}
exports.TimeBeforeSec = TimeBeforeSec;
function TimeBeforeMin(min) {
    return Date.now() - min * 1000 * 60;
}
exports.TimeBeforeMin = TimeBeforeMin;
