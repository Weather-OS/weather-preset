
import { join } from "node:path";
import { readdir, readFile, writeFile } from "node:fs/promises";

export interface Project {
    base_profile: {
        platforms: string[];
        merge_source: string[];
        exclude_patterns: string;
        include_patterns: string[];
    };
    profiles: Record<string, {
        macros: string[];
    }>;
}

export default async function main() {
    const project: Project = {
        "base_profile": {
            "platforms": [
                "Direct3D_SM65",
            ],
            "merge_source": [
                "vanilla",
            ],
            "exclude_patterns": "vanilla",
            "include_patterns": [
                "RTXStub",
                "RTXPostFX.*",
            ],
        },
        "profiles": {},
    };

    const PRESETS_DIR = join(process.cwd(), "presets");

    const presets = await readdir(PRESETS_DIR, {
        withFileTypes: true,
    });

    const profiles: string[] = [];

    for (const preset of presets) {
        if (preset.isFile()) {
            continue;
        }

        try {
            project.profiles[preset.name] = {
                macros: JSON.parse(
                    await readFile(
                        join(PRESETS_DIR, preset.name, "macros.json"),
                        "utf-8",
                    ),
                ),
            };

            profiles.push(preset.name);
        } catch (err: any) {
            if (err.code !== "ENOENT") {
                console.error(err);
                continue;
            }

            console.warn(`Preset ${preset.name} is missing macros.json`);
        }
    }

    await writeFile(
        join(process.cwd(), "brtx-src", "project.json"),
        JSON.stringify(project, null, 4),
    );

    return profiles;
}
