"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
test('exponential', () => {
    expect((0, math_1.exponential)(50, 1)).toEqual(1.0);
    expect((0, math_1.exponential)(50, 0)).toEqual(0.0);
});
