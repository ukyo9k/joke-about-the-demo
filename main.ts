// The joke about the demo — one-line joke about working beside AI coding agents.
// Writes exactly one line to /output/entry.txt (UTF-8, 1–280 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My agent built the demo feature live in 40 seconds — then, when the client asked how it worked, said it had never seen that code before.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
