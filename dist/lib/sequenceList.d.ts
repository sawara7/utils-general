export interface SequenceListType {
    [key: string]: number;
    timestamp: number;
}
export declare class SequenceList {
    private _list;
    private _intervalSec;
    private _sequenceNum;
    constructor(intervalSec: number, sequenceNum: number);
    push(value: SequenceListType): void;
    update(): void;
    getHigh(key: string): number[];
    getLow(key: string): number[];
    getSum(key: string): number[];
    lastValue(key: string): number | null;
}
