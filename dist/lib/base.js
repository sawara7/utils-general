"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseObjectClass = void 0;
const uuid_1 = require("uuid");
class BaseObjectClass {
    constructor() {
        this._uuid = (0, uuid_1.v4)();
    }
    import(jsn) {
        const v = jsn;
        this._uuid = v._uuid;
    }
    export() {
        return {
            _uuid: this._uuid
        };
    }
    get uuid() {
        return this._uuid;
    }
}
exports.BaseObjectClass = BaseObjectClass;
