export function TimeBeforeSec(sec: number): number {
    return Date.now() - sec * 1000
}

export function TimeBeforeMin(min: number): number {
    return Date.now() - min * 1000 * 60
}