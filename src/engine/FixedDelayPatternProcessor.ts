import { IPattern } from '../patterns/IPattern';
import { IBlyncDevice } from '../lib/IBlyncDevice';
import Bluebird from 'bluebird';
import { Color } from '../patterns/Color';
import { IPatternEngine } from './IPatternEngine';

export class FixedDelayPatternProcessor implements IPatternEngine {
  private _createCommand([red, green, blue]: Color) {
    return {
      red,
      green,
      blue,
      blink: 0 as 0 | 1 | 2 | 3,
      dim: false
    };
  }
  private _run = true;
  async process({ colors, delay, loop }: IPattern, device: IBlyncDevice) {
    if (typeof colors === 'function')
      throw new Error('`colors` must be an array of colors');

    if (delay === 0) {
      await device.sendCommand(this._createCommand(colors[0]));
      return 0;
    }

    let index = 0;
    while (true && this._run) {
      if (index === colors.length) {
        if (loop) index = 0;
        else break;
      }
      await device.sendCommand(this._createCommand(colors[index]));
      await Bluebird.delay(delay);
      index++;
    }
    return 0;
  }
  stop() {
    this._run = false;
  }
}
