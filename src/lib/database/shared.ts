import {BaseDirectory, createDir, exists} from "@tauri-apps/api/fs";
import {DB_DIR} from "./consts.ts";

const appDataDir :BaseDirectory.Home = BaseDirectory.Home;

export async function makeAppDataDir():Promise<void|Error> {
    try {
        if (!(await exists(DB_DIR, { dir: appDataDir }))) {
            await createDir(DB_DIR, { dir: appDataDir });
        }
    } catch (error: any) {
        console.log("makeAppDataDir func error: " + error);
        return new Error('Error creating DB directory: ' + error);
    }
}