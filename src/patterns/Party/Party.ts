import { IPattern } from '../IPattern';
import { Color } from '../Color';

export class Party implements IPattern {
  name = 'Police';
  colors = [
    [255, 0, 0],
    [255, 127, 0],
    [255, 255, 0],
    [0, 255, 0],
    [0, 0, 255],
    [39, 0, 51],
    [139, 0, 255]
  ] as Array<Color>;
  delay = 75;
  loop = true;
}
