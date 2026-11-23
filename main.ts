// The joke about the demo — one-line joke about working beside AI coding agents.
// Writes exactly one line to /output/entry.txt (UTF-8, 1–280 chars).
import { mkdirSync, writeFileSync } from "node:fs";

// Setup in one breath, punchline in the next: the agent that wrote the code
// in seconds disowns it the moment a human asks how it works — the demo
// truth every developer who has paired with an agent recognises.
const JOKE =
  "My agent wrote the demo live in 40 seconds — then, when the client asked how it worked, it said it had never seen that code before.";

// The competition scores a single line of 1–280 chars; fail loudly instead
// of silently writing an entry the judge cannot score.
function validateJoke(text: string): void {
  if (text.length < 1 || text.length > 280) {
    throw new Error(
      `Joke must be 1–280 chars, got ${text.length} chars.`,
    );
  }
  if (text.includes("\n")) {
    throw new Error("Joke must be a single line.");
  }
}

validateJoke(JOKE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
