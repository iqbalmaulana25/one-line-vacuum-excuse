// The Robot Vacuum's Best Excuse
// Writes one deadpan one-line excuse to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I cleaned around the shoe 14 times. In my world, anything that doesn't move for a week is load-bearing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
