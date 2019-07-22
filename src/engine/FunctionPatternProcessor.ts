import { Color } from '../patterns/Color';
import { IPattern } from '../patterns/IPattern';
import { IBlyncDevice } from '../lib/IBlyncDevice';
import Bluebird from 'bluebird';
import { CommandFactory } from '../util/commandFactory';

export class FunctionPatternProcessor {
  private static _current: Color;
  static setSeed(color: Color) {
    this._current = color;
  }
  static async process(
    pattern: IPattern,
    device: IBlyncDevice
  ): Promise<void> {
    if (Array.isArray(pattern.colors))
      throw new Error('`colors` must be a function!');
    while(this._current !== null) {
      this._current = pattern.colors(this._current);
      console.log(this._current);
      const command = CommandFactory.fromColor(this._current);
      await Bluebird.delay(pattern.delay);
      await device.sendCommand(command);
    }
  }
}
