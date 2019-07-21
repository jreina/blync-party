import { Color } from "./Color";

export interface IPattern {
  name: string;
  colors: Array<Color>;
  delay: number;
}
