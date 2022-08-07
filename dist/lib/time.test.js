"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const time_1 = require("./time");
test('timeBeforeSec', () => {
    const sec = 1;
    const expected = Date.now() - sec * 1000;
    const actual = (0, time_1.timeBeforeSec)(sec);
    expect((actual > expected - 2) && (actual < expected + 2)).toBeTruthy();
});
test('timeBeforeMin', () => {
    const min = 1;
    const expected = Date.now() - min * 60 * 1000;
    const actual = (0, time_1.timeBeforeMin)(min);
    expect((actual > expected - 2) && (actual < expected + 2)).toBeTruthy();
});
