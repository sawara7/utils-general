import { exponential } from "./math"

test('exponential', () => {
    expect(exponential(50, 1)).toEqual(1.0)
    expect(exponential(50, 0)).toEqual(0.0)
})
