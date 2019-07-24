import { IPattern } from '../IPattern';
import { Color } from '../Color';

export class Police implements IPattern {
  name = 'Police';
  colors = [[255, 0, 0] as Color, [0, 0, 255] as Color];
  delay = 100;
  loop = true;
}
