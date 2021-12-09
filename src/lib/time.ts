export function timeBeforeSec(sec: number): number {
    return Date.now() - sec * 1000
}

export function timeBeforeMin(min: number): number {
    return Date.now() - min * 1000 * 60
}