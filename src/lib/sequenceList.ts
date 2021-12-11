import { timeBeforeSec } from "./time"

export interface SequenceListType {
    [key: string]: number,
    timestamp: number
}

export class SequenceList {
    private list: SequenceListType[][] = []
    constructor(
        private intervalSec: number,
        private sequenceNum: number) {
        for (let i=0; i<sequenceNum; i++) {
            this.list.push([])
        }
    }

    public push(value: SequenceListType) {
        this.list[0].push(value)
        this.update()
    }

    public update() {
        for (let i=0; i< this.list.length; i++) {
            let tmpMarketList: SequenceListType[] = []
            for (const m of this.list[i]) {
                if (m.timestamp >= timeBeforeSec(this.intervalSec * (i+1))) {
                    tmpMarketList.push(m)
                }else if (i < this.list.length-1) {
                    this.list[i+1].push(m)
                }
            }
            this.list[i] = tmpMarketList
        }
    }

    public getHigh(key: string): number[] {
        const result = []
        for (let i=0; i< this.list.length; i++) {
            result.push(-Infinity)
            for (const m of this.list[i]) {
                if (m[key]) {
                    result[i] = result[i] < m[key]? m[key]: result[i]
                }
            }
        }
        return result
    }

    public getLow(key: string): number[] {
        const result = []
        for (let i=0; i< this.list.length; i++) {
            result.push(Infinity)
            for (const m of this.list[i]) {
                if (m[key]) {
                    result[i] = result[i] > m[key]? m[key]: result[i]
                }
            }
        }
        return result
    }

    public getSum(key: string): number[] {
        const result = []
        for (let i=0; i< this.list.length; i++) {
            result.push(0)
            for (const m of this.list[i]) {
                if (m[key]) {
                    result[i] += m[key]
                }
            }
        }
        return result
    }

    public lastValue(key: string): number | null {
        let result = null
        if (this.list[0].length > 0) {
            const v = this.list[0][this.list[0].length - 1][key]
            result = v? v: null;
        }
        return null
    }
}