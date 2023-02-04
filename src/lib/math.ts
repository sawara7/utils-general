export function floor(value: number, precision: number): number {
    const d = Math.pow(10, precision)
    return Math.floor(value * d)/d
}

export function exponential(base:number, e: number): number {
    if (e === 0) { return 0 }
    return (Math.pow(base, e))/base
}
