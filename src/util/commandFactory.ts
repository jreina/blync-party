import { Color } from '../patterns/Color';
import { IBlyncCommand } from '../lib/IBlyncCommand';

export class CommandFactory {
  static fromColor([red, green, blue]: Color): IBlyncCommand {
    return {
      red,
      green,
      blue,
      blink: 0 as 0 | 1 | 2 | 3,
      dim: false
    };
  }
}
