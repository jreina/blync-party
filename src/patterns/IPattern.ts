import { Color } from './Color';

export interface IPattern {
  name: string;
  colors: Array<Color> | ((color: Color) => Color);
  delay: number;
  loop: boolean;
}
