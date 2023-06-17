import * as fs from "fs"

export function getJSON(path: string): any {
    return JSON.parse(fs.readFileSync(path, 'utf8'))
}