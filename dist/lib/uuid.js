"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUIDInstanceClass = void 0;
const uuid_1 = require("uuid");
class UUIDInstanceClass {
    constructor() {
        this._uuid = (0, uuid_1.v4)();
    }
    get uuid() {
        return this._uuid;
    }
}
exports.UUIDInstanceClass = UUIDInstanceClass;
