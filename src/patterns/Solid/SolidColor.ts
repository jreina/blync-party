import { Color } from '../Color';
import { IPattern } from '../IPattern';

export class SolidColor implements IPattern {
  colors: Array<Color>;
  constructor(color: Color) {
    this.colors = [color];
  }

  delay = 0;
  loop = true;
  name = 'Solid Color';
}
