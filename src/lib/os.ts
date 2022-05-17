import { freemem, totalmem } from "os";

export function memoryUsageRate(): number {
    return freemem()/totalmem()*100
}

