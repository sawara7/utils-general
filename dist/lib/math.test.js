"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
test('exponential', () => {
    expect((0, math_1.floor)(1.1234, 0)).toEqual(1);
    expect((0, math_1.floor)(1.1234, 1)).toEqual(1.1);
    expect((0, math_1.floor)(1.1234, 2)).toEqual(1.12);
    expect((0, math_1.floor)(1.1234, 3)).toEqual(1.123);
    expect((0, math_1.floor)(123, -1)).toEqual(120);
    expect((0, math_1.floor)(23, -1)).toEqual(20);
    expect((0, math_1.exponential)(50, 1)).toEqual(1.0);
    expect((0, math_1.exponential)(50, 0)).toEqual(0.0);
});
