import {BaseDirectory, readTextFile, writeTextFile} from "@tauri-apps/api/fs";
import {DB_DIR, DB_EXT} from "./consts.ts";
import {makeAppDataDir} from "./shared.ts";

const appDataDir :BaseDirectory.Home = BaseDirectory.Home;
const databaseName :string = "food-storage-db";
const dataFile :string = databaseName + DB_EXT;

export async function writeFoodStorage(foodStorage: {}) :Promise<void | Error> {
    try {
        await makeAppDataDir();
        await writeTextFile(DB_DIR + "/" + dataFile, JSON.stringify(foodStorage), {dir: appDataDir});
    } catch (error) {
        return new Error('Error writing to database: ' + databaseName+ ", error: " + error);
    }
}

export async function readFoodStorage() :Promise<any | Error> {
    try {
        const data :string = await readTextFile(DB_DIR + "/" + dataFile, {dir: appDataDir})
        return JSON.parse(data);
    } catch (error) {
        return new Error('Error writing to database: ' + databaseName+ ", error: " + error);
    }
}

