import { BlyncStatic } from './lib/BlyncStatic';
import { FixedDelayPatternProcessor } from './engine/FixedDelayPatternProcessor';
import { FunctionPatternProcessor } from './engine/FunctionPatternProcessor';
import { Color } from './patterns/Color';
import { MoodRing } from './patterns/MoodRing';

const blync = BlyncStatic.getDevice(0);
(async function run() {
  // await FixedDelayPatternProcessor.processPattern(
  //   {
  //     colors,
  //     delay: 50,
  //     name: 'Mood Ring',
  //     loop: true
  //   },
  //   blync
  // );
  FunctionPatternProcessor.setSeed([1, 0, 0]);
  await FunctionPatternProcessor.process(MoodRing, blync);
})();
