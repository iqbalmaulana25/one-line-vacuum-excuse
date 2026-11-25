// The Robot Vacuum's Best Excuse
// Writes one deadpan one-line excuse to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My map labels that corner 'furniture' because your cat has slept there 41 days straight. I do not argue with residents.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
