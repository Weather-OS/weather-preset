import build from "./src/collect";
import compile from "./src/compile";

await compile(await build());