export function timeBeforeSec(sec: number): number {
    return Date.now() - sec * 1000
}

export function timeBeforeMin(min: number): number {
    return Date.now() - min * 1000 * 60
}

export type TimeSpan = 'year' | 'month' | 'day' | 'hour' | 'minute'

function setZero(type: TimeSpan, date: Date): void {
    if (['year'].includes(type)) date.setMonth(0)
    if (['year', 'month'].includes(type)) date.setDate(0)
    if (['year', 'month', 'day'].includes(type)) date.setHours(0)
    if (['year', 'month', 'day', 'hour'].includes(type)) date.setMinutes(0)
    if (['year', 'month', 'day', 'hour', 'minute'].includes(type)) date.setSeconds(0)
    date.setMilliseconds(0)
}

function setAgo(type: TimeSpan, date: Date, ago: number): void {
    if (['year'].includes(type)) date.setFullYear(date.getFullYear() - ago)
    if (['month'].includes(type)) date.setMonth(date.getMonth() - ago)
    if (['day'].includes(type)) date.setDate(date.getDate() - ago)
    if (['hour'].includes(type)) date.setHours(date.getHours() - ago)
    if (['minute'].includes(type)) date.setMinutes(date.getMinutes() - ago)
}

export function getTimeStampKey(time: string | number | Date, type: TimeSpan, ago?: number): number {
    const d = new Date(time)
    if (ago) setAgo(type, d, ago)
    setZero(type, d)
    return d.getTime()
}