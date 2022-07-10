import { timeBeforeSec } from "./time"

export interface SequenceListType {
    [key: string]: number,
    timestamp: number
}

export class SequenceList {
    private _list: SequenceListType[][] = []
    private _intervalSec: number = 0
    private _sequenceNum: number = 0
    constructor( intervalSec: number, sequenceNum: number ) {
        this._intervalSec = intervalSec
        this._sequenceNum = sequenceNum
        for (let i=0; i<sequenceNum; i++) {
            this._list.push([])
        }
    }

    public push(value: SequenceListType) {
        this._list[0].push(value)
        this.update()
    }

    public update() {
        for (let i=0; i< this._list.length; i++) {
            let tmpMarketList: SequenceListType[] = []
            for (const m of this._list[i]) {
                if (m.timestamp >= timeBeforeSec(this._intervalSec * (i+1))) {
                    tmpMarketList.push(m)
                }else if (i < this._list.length-1) {
                    this._list[i+1].push(m)
                }
            }
            this._list[i] = tmpMarketList
        }
    }

    public getHigh(key: string): number[] {
        const result = []
        for (let i=0; i< this._list.length; i++) {
            result.push(-Infinity)
            for (const m of this._list[i]) {
                if (m[key]) {
                    result[i] = result[i] < m[key]? m[key]: result[i]
                }
            }
        }
        return result
    }

    public getLow(key: string): number[] {
        const result = []
        for (let i=0; i< this._list.length; i++) {
            result.push(Infinity)
            for (const m of this._list[i]) {
                if (m[key]) {
                    result[i] = result[i] > m[key]? m[key]: result[i]
                }
            }
        }
        return result
    }

    public getSum(key: string): number[] {
        const result = []
        for (let i=0; i< this._list.length; i++) {
            result.push(0)
            for (const m of this._list[i]) {
                if (m[key]) {
                    result[i] += m[key]
                }
            }
        }
        return result
    }

    public lastValue(key: string): number | null {
        let result = null
        if (this._list[0].length > 0) {
            const v = this._list[0][this._list[0].length - 1][key]
            result = v? v: null;
        }
        return null
    }
}