import { v4 as uuidv4 } from 'uuid'

export class UUIDInstanceClass {
    private _uuid: string

    constructor() {
        this._uuid = uuidv4()
    }

    get uuid() {
        return this._uuid
    }
}