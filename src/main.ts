import { BlyncStatic } from './lib/BlyncStatic';
import { FixedDelayPatternProcessor } from './engine/FixedDelayPatternProcessor';
import { Color } from './patterns/Color';

const range = Array(256)
  .fill(0)
  .map((_, i) => i);
const colors = range.map<Color>(i => [i, 0, 255]);
const blync = BlyncStatic.getDevice(0);
(async function run() {
  await FixedDelayPatternProcessor.processPattern(
    {
      colors,
      delay: 50,
      name: 'Mood Ring'
    },
    blync
  );
})();
