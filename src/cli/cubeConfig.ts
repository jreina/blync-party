import { MoodRing, Police, Party, Deadmau5, Halloween } from '../patterns';
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
  ],
  [
    'deadmau5',
    {
      pattern: new Deadmau5(),
      engine: new FixedDelayPatternProcessor(),
      name: 'deadmau5',
      description: 'LET US GET LIT'
    }
  ],
  [
    'halloween',
    {
      pattern: new Halloween(),
      engine: new FixedDelayPatternProcessor(),
      name: 'halloween',
      description: "Let's get spoopy 🎃"
    }
  ]
]);
