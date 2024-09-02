
import { $ } from "bun";
import { ensureDir } from "fs-extra";
import { join } from "node:path";
import type { Project } from "./collect";

export default async function compile(profiles: Array<keyof Project["profiles"]>) {
    for (const profile of profiles) {
        try {
            console.log(`Compiling profile "${profile}"...`);
            const outputDir = join(process.cwd(), "output", profile, "renderer", "materials");
            await ensureDir(outputDir);
            await $`python -m lazurite build ./brtx-src --dxc "./bin/dxc.exe" --output "${outputDir}" --profile ${profile}`;
        } catch (err) {
            console.error(`Failed to compile profile "${profile}"`);
            console.error(err);
        }
    }
}