import { IPattern } from '../IPattern';
import { Color } from '../Color';

export class Deadmau5 implements IPattern {
  name = 'Deadmau5';
  colors = [[175, 12, 193] as Color, [44, 192, 222] as Color];
  delay = 75;
  loop = true;
}
