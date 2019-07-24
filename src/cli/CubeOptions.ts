import { IPattern } from '../patterns/IPattern';
import { IPatternEngine } from '../engine/IPatternEngine';

export interface CubeOptions {
  pattern: IPattern;
  engine: IPatternEngine;
  name: string;
  description: string;
}
