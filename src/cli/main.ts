#!/usr/bin/env node

import { BlyncStatic } from "../lib/BlyncStatic";
import { options } from "./cubeConfig";
import { CubeOptions } from "./CubeOptions";
import { showMenu } from "./showMenu";

const [, , patt] = process.argv;
if (!patt) {
  showMenu();
  process.exit();
}

if (!options.has(patt)) throw new Error(`Pattern (${patt}) not found!`);
const pattern = options.get(patt) as CubeOptions;

(async function run() {
  const blync = BlyncStatic.getDevice(0);
  await pattern.engine.process(pattern.pattern, blync);
})();
