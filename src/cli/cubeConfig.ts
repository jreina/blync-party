import { MoodRing, Police, Party } from '../patterns';
import { FunctionPatternProcessor } from '../engine/FunctionPatternProcessor';
import { FixedDelayPatternProcessor } from '../engine/FixedDelayPatternProcessor';
import { CubeOptions } from './CubeOptions';

export const options: Map<string, CubeOptions> = new Map([
  [
    'mood',
    {
      pattern: new MoodRing(),
      engine: new FunctionPatternProcessor(),
      name: 'mood',
      description: 'Chill mode activated!'
    }
  ],
  [
    'police',
    {
      pattern: new Police(),
      engine: new FixedDelayPatternProcessor(),
      name: 'police',
      description: 'Tha block is hot!'
    }
  ],
  [
    'party',
    {
      pattern: new Party(),
      engine: new FixedDelayPatternProcessor(),
      name: 'party',
      description: "Let's party boiiiiii!!!1!"
    }
  ]
]);
