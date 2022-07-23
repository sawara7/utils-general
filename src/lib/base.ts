import { v4 as uuidv4 } from 'uuid'

export interface BaseObject {
    uuid: string
    import: (jsn: any) => void
    export: () => any
}

export interface BaseObjectVariables {
    _uuid: string
}

export class BaseObjectClass implements BaseObject {
    private _uuid: string

    constructor() {
        this._uuid = uuidv4()
    }

    public import(jsn: any) {
        const v = jsn as BaseObjectVariables
        this._uuid = v._uuid
    }

    public export(): any {
        return {
            _uuid: this._uuid
        } as BaseObjectVariables
    }

    get uuid() {
        return this._uuid
    }
}