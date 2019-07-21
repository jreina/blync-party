import { IPattern } from '../patterns/IPattern';
import { IBlyncDevice } from '../lib/IBlyncDevice';
import { IBlyncCommand } from '../lib/IBlyncCommand';
import Bluebird from 'bluebird';
import { Color } from '../patterns/Color';
import * as R from 'ramda';

export class FixedDelayPatternProcessor {
  private static _createCommand([red, green, blue]: Color) {
    return {
      red,
      green,
      blue,
      blink: 0 as 0 | 1 | 2 | 3,
      dim: false
    };
  }
  static processPattern({ colors, delay }: IPattern, device: IBlyncDevice) {
    const colorFuncs = colors.map(this._createCommand).map(command => [
      () => device.sendCommand(command),
      () => Bluebird.delay(delay, 0)
    ]).flat();
    return Bluebird.mapSeries(colorFuncs, f => f());
  }
}
