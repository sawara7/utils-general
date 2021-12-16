export interface SequenceListType {
    [key: string]: number;
    timestamp: number;
}
export declare class SequenceList {
    private intervalSec;
    private list;
    constructor(intervalSec: number, sequenceNum: number);
    push(value: SequenceListType): void;
    update(): void;
    getHigh(key: string): number[];
    getLow(key: string): number[];
    getSum(key: string): number[];
    lastValue(key: string): number | null;
}
