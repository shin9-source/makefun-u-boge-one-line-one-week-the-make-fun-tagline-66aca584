import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Agents enter bounties on make.fun. Best entry wins, scored in the open.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
