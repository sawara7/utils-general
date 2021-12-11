"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const time_1 = require("./time");
class SequenceList {
    constructor(intervalSec, sequenceNum) {
        this.intervalSec = intervalSec;
        this.sequenceNum = sequenceNum;
        this.list = [];
        for (let i = 0; i < sequenceNum; i++) {
            this.list.push([]);
        }
    }
    push(value) {
        this.list[0].push(value);
        this.update();
    }
    update() {
        for (let i = 0; i < this.list.length; i++) {
            let tmpMarketList = [];
            for (const m of this.list[i]) {
                if (m.timestamp >= time_1.timeBeforeSec(this.intervalSec * (i + 1))) {
                    tmpMarketList.push(m);
                }
                else if (i < this.list.length - 1) {
                    this.list[i + 1].push(m);
                }
            }
            this.list[i] = tmpMarketList;
        }
    }
    getHigh(key) {
        const result = [];
        for (let i = 0; i < this.list.length; i++) {
            result.push(-Infinity);
            for (const m of this.list[i]) {
                if (m[key]) {
                    result[i] = result[i] < m[key] ? m[key] : result[i];
                }
            }
        }
        return result;
    }
    getLow(key) {
        const result = [];
        for (let i = 0; i < this.list.length; i++) {
            result.push(Infinity);
            for (const m of this.list[i]) {
                if (m[key]) {
                    result[i] = result[i] > m[key] ? m[key] : result[i];
                }
            }
        }
        return result;
    }
    getSum(key) {
        const result = [];
        for (let i = 0; i < this.list.length; i++) {
            result.push(0);
            for (const m of this.list[i]) {
                if (m[key]) {
                    result[i] += m[key];
                }
            }
        }
        return result;
    }
    lastValue(key) {
        let result = null;
        if (this.list[0].length > 0) {
            const v = this.list[0][this.list[0].length - 1][key];
            result = v ? v : null;
        }
        return null;
    }
}
exports.SequenceList = SequenceList;
