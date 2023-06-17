"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_1 = require("./json");
test('getJSON', () => {
    const json = (0, json_1.getJSON)('./test_data/sample.json');
    expect(json["test"]).toEqual(123);
});
