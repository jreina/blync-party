import { IPattern } from '../IPattern';
import { Color } from '../Color';

export class SP implements IPattern {
  name = 'SP';
  colors = [
    [51, 255, 255] as Color,
    [51, 204, 255] as Color,
    [51, 153, 255] as Color,
    [51, 102, 255] as Color,
    [51, 204, 255] as Color,
    [51, 51, 255] as Color,
    [107, 130, 199] as Color,
    [143, 148, 163] as Color
  ];
  delay = 75;
  loop = true;
}
