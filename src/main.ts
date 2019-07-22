import { BlyncStatic } from "./lib/BlyncStatic";
import { FixedDelayPatternProcessor } from "./engine/FixedDelayPatternProcessor";
import { FunctionPatternProcessor } from "./engine/FunctionPatternProcessor";
import { IPattern } from "./patterns/IPattern";
import { IPatternEngine } from "./engine/IPatternEngine";
import { MoodRing, Party, Police } from "./patterns";

type CubeOptions = {
  pattern: IPattern;
  engine: IPatternEngine;
  name: string;
};
const options: Array<CubeOptions> = [
  {
    pattern: new MoodRing(),
    engine: new FunctionPatternProcessor(),
    name: "mood"
  },
  {
    pattern: new Police(),
    engine: new FixedDelayPatternProcessor(),
    name: "police"
  },
  {
    pattern: new Party(),
    engine: new FixedDelayPatternProcessor(),
    name: "party"
  }
];
const [, , patt] = process.argv;
if (!patt) throw new Error("Must provide a pattern!");

const pattern = options.find(({ name }) => name === patt);
if (!pattern) throw new Error(`Pattern (${patt}) not found!`);

(async function run() {
  const blync = BlyncStatic.getDevice(0);
  await pattern.engine.process(pattern.pattern, blync);
})();
