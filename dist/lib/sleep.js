"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sleep(waitSec) {
    return new Promise(function (resolve) {
        setTimeout(function () { resolve(); }, waitSec);
    });
}
exports.sleep = sleep;
