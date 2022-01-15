export declare function timeBeforeSec(sec: number): number;
export declare function timeBeforeMin(min: number): number;
export declare type TimeSpan = 'year' | 'month' | 'day' | 'hour' | 'minute';
export declare function getTimeStampKey(time: string | number | Date, type: TimeSpan, ago?: number): number;
