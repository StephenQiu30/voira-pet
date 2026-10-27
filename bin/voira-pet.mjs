#!/usr/bin/env node
import { runCli } from "../src/cli.mjs";

try {
  await runCli(process.argv.slice(2));
} catch (error) {
  console.error(`voira-pet: ${error.message}`);
  process.exitCode = 1;
}
