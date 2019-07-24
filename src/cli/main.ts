#!/usr/bin/env node

import { BlyncStatic } from '../lib/BlyncStatic';
import { options } from './cubeConfig';
import { CubeOptions } from './CubeOptions';
import { showMenu } from './showMenu';
import { tryProcessSolidColor } from './solidColors';
import { FixedDelayPatternProcessor } from '../engine/FixedDelayPatternProcessor';
import { SolidColor } from '../patterns/Solid/SolidColor';
import { Color } from '../patterns/Color';

const [, , patt] = process.argv;
if (!patt) {
  showMenu();
  process.exit();
}

const solidColor = tryProcessSolidColor(patt);

if (!options.has(patt) && !solidColor)
  throw new Error(`Pattern (${patt}) not found!`);
const pattern: CubeOptions = options.has(patt)
  ? (options.get(patt) as CubeOptions)
  : {
      description: `Just boring old ${patt}`,
      engine: new FixedDelayPatternProcessor(),
      name: patt,
      pattern: new SolidColor(solidColor as Color)
    };

(async function run() {
  const blync = BlyncStatic.getDevice(0);
  await pattern.engine.process(pattern.pattern, blync);
})();
