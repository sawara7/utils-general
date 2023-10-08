import { readdirSync } from "fs"

export async function getHDDRate(): Promise<void> {
    const res = await readdirSync('/')
    console.log(res)
}

(async () => {
    await getHDDRate()
})()

