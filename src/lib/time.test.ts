import { timeBeforeMin, timeBeforeSec } from "./time"

test('timeBeforeSec', () => {
    const sec = 1
    const expected = Date.now() - sec * 1000
    const actual = timeBeforeSec(sec)
    expect(
        (actual > expected - 2) && (actual < expected + 2)
        ).toBeTruthy()
})

test('timeBeforeMin', () => {
    const min = 1
    const expected = Date.now() - min * 60 * 1000
    const actual = timeBeforeMin(min)
    expect(
        (actual > expected - 2) && (actual < expected + 2)
        ).toBeTruthy()
})