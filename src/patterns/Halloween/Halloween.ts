import { IPattern } from '../IPattern';
import { Color } from '../Color';

export class Halloween implements IPattern {
  name = 'Halloween';
  colors = [[255, 80, 0] as Color, [0, 0, 0] as Color];
  delay = 75;
  loop = true;
}
