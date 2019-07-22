import { IPattern } from './IPattern';
import { Color } from './Color';

type colorXform = (x: Color) => Color;

const incrementRed: colorXform = ([r, b, g]: Color) => [r + 1, b, g];
const decrementRed: colorXform = ([r, b, g]: Color) => [r - 1, b, g];
const incrementBlue: colorXform = ([r, b, g]: Color) => [r, b + 1, g];
const decrementBlue: colorXform = ([r, b, g]: Color) => [r, b - 1, g];
const incrementGreen: colorXform = ([r, b, g]: Color) => [r, b, g + 1];
const decrementGreen: colorXform = ([r, b, g]: Color) => [r, b, g - 1];

class MoodRing implements IPattern {
  name = 'MoodRing';
  delay = 50;
  private _colorFunc: colorXform = incrementRed;
  colors([r, b, g]: Color): Color {
    if (r >= 256) this._colorFunc = decrementRed;
    if (r === 0) this._colorFunc = incrementGreen;
    if (g >= 256) this._colorFunc = decrementGreen;
    if (g === 0) this._colorFunc = incrementBlue;
    if (b >= 256) this._colorFunc = decrementBlue;
    if (b === 0) this._colorFunc = incrementRed;
    console.log(this._colorFunc);
    return this._colorFunc([r, b, g]);
  }
  loop = true;
}

export const moodRing = new MoodRing();
