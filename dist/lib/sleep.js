"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = sleep;
function sleep(waitSec) {
    return new Promise(function (resolve) {
        setTimeout(function () { resolve(); }, waitSec);
    });
}
