import { exponential, floor } from "./math"

test('exponential', () => {
    expect(floor(1.1234, 0)).toEqual(1)
    expect(floor(1.1234, 1)).toEqual(1.1)
    expect(floor(1.1234, 2)).toEqual(1.12)
    expect(floor(1.1234, 3)).toEqual(1.123)
    expect(exponential(50, 1)).toEqual(1.0)
    expect(exponential(50, 0)).toEqual(0.0)
})
