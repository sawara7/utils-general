"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeStampKey = exports.timeBeforeMin = exports.timeBeforeSec = void 0;
function timeBeforeSec(sec) {
    return Date.now() - sec * 1000;
}
exports.timeBeforeSec = timeBeforeSec;
function timeBeforeMin(min) {
    return Date.now() - min * 1000 * 60;
}
exports.timeBeforeMin = timeBeforeMin;
function setZero(type, date) {
    if (['year'].includes(type))
        date.setMonth(0);
    if (['year', 'month'].includes(type))
        date.setDate(0);
    if (['year', 'month', 'day'].includes(type))
        date.setHours(0);
    if (['year', 'month', 'day', 'hour'].includes(type))
        date.setMinutes(0);
    if (['year', 'month', 'day', 'hour', 'minute'].includes(type))
        date.setSeconds(0);
    date.setMilliseconds(0);
}
function setAgo(type, date, ago) {
    if (['year'].includes(type))
        date.setFullYear(date.getFullYear() - ago);
    if (['month'].includes(type))
        date.setMonth(date.getMonth() - ago);
    if (['day'].includes(type))
        date.setDate(date.getDate() - ago);
    if (['hour'].includes(type))
        date.setHours(date.getHours() - ago);
    if (['minute'].includes(type))
        date.setMinutes(date.getMinutes() - ago);
}
function getTimeStampKey(time, type, ago) {
    const d = new Date(time);
    if (ago)
        setAgo(type, d, ago);
    setZero(type, d);
    return d.getTime();
}
exports.getTimeStampKey = getTimeStampKey;
