"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequenceList = void 0;
const time_1 = require("./time");
class SequenceList {
    constructor(intervalSec, sequenceNum) {
        this._list = [];
        this._intervalSec = 0;
        this._sequenceNum = 0;
        this._intervalSec = intervalSec;
        this._sequenceNum = sequenceNum;
        for (let i = 0; i < sequenceNum; i++) {
            this._list.push([]);
        }
    }
    push(value) {
        this._list[0].push(value);
        this.update();
    }
    update() {
        for (let i = 0; i < this._list.length; i++) {
            let tmpMarketList = [];
            for (const m of this._list[i]) {
                if (m.timestamp >= (0, time_1.timeBeforeSec)(this._intervalSec * (i + 1))) {
                    tmpMarketList.push(m);
                }
                else if (i < this._list.length - 1) {
                    this._list[i + 1].push(m);
                }
            }
            this._list[i] = tmpMarketList;
        }
    }
    getHigh(key) {
        const result = [];
        for (let i = 0; i < this._list.length; i++) {
            result.push(-Infinity);
            for (const m of this._list[i]) {
                if (m[key]) {
                    result[i] = result[i] < m[key] ? m[key] : result[i];
                }
            }
        }
        return result;
    }
    getLow(key) {
        const result = [];
        for (let i = 0; i < this._list.length; i++) {
            result.push(Infinity);
            for (const m of this._list[i]) {
                if (m[key]) {
                    result[i] = result[i] > m[key] ? m[key] : result[i];
                }
            }
        }
        return result;
    }
    getSum(key) {
        const result = [];
        for (let i = 0; i < this._list.length; i++) {
            result.push(0);
            for (const m of this._list[i]) {
                if (m[key]) {
                    result[i] += m[key];
                }
            }
        }
        return result;
    }
    lastValue(key) {
        let result = null;
        if (this._list[0].length > 0) {
            const v = this._list[0][this._list[0].length - 1][key];
            result = v ? v : null;
        }
        return null;
    }
}
exports.SequenceList = SequenceList;
