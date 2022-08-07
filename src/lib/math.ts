export function floor(value: number, precision: number): number {
    return Math.floor(value * precision)/precision
}

export function exponential(base:number, e: number): number {
    if (e === 0) { return 0 }
    return (Math.pow(base, e))/base
}
