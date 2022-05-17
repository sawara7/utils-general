"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHDDRate = void 0;
const fs_1 = require("fs");
function getHDDRate() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield (0, fs_1.readdirSync)('/');
        console.log(res);
    });
}
exports.getHDDRate = getHDDRate;
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield getHDDRate();
}))();
