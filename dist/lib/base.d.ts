export interface BaseObject {
    uuid: string;
    import: (jsn: any) => void;
    export: () => any;
}
export interface BaseObjectVariables {
    _uuid: string;
}
export declare class BaseObjectClass implements BaseObject {
    private _uuid;
    constructor();
    import(jsn: any): void;
    export(): any;
    get uuid(): string;
}
