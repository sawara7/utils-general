"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoryUsageRate = void 0;
const os_1 = require("os");
function memoryUsageRate() {
    return (0, os_1.freemem)() / (0, os_1.totalmem)() * 100;
}
exports.memoryUsageRate = memoryUsageRate;
