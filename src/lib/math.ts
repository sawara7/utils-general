export function floor(value: number, precision: number): number {
    return Math.floor(value * precision)/precision
}