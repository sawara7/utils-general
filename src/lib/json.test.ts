import { getJSON } from "./json"

test('getJSON', () => {
    const json = getJSON('./test_data/sample.json')
    expect(json["test"]).toEqual(123)
})
