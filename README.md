# BetterRTX Presets

## Generate a UUID

Each pack needs its own UUID. Easily [generate one online](https://www.uuidgenerator.net/) or in VS Code by pressing `Shift+Alt+U`.

## Generate a [Lazurite](https://veka0.github.io/lazurite/) Profile

Use __[BetterRTX Creator](https://bedrock.graphics/creator/lighting-and-shading.html)__ to generate a Lazurite profile.

## Clone the Repository

Clone this repo to begin adding your preset.

Copy the `macros` property from the [output](#generate-a-lazurite-profile) Lazurite `profile.json` into a file called `./presets/[Your UUID]/macro.json`

### Write a README

Add the file `./presets/[Your UUID]/README.md|mdx` to have a Markdown / MDX document loaded on the preset page.

#### Add Frontmatter to the README

Your README's Frontmatter serves as the single-source-of-truth for the preset throughout the website and API.

Example:

```
---
name: "Website Friendly Title"
installerTitle: "The Exact Text Displayed in the Installer"
version: 1.0.0
brtxVersion: 1.2.2
lastUpdated: 2024-09-01
author: Not Mojang
---
```

## Create PR

Create a pull request to add the new preset.

## Wait for Approval

Presets must be manually compiled by a BetterRTX organization member.

## Create a Discord Post

Copy the preset link from https://bedrock.graphics/presets

Include it in a post to [Minecraft RTX Discord BetterRTX Release channel](https://discord.com/channels/691547840463241267/1106805217229541457).

(The `screenshot.png` and `icon.png` files are used as the Discord post image if no other media is provided.)
