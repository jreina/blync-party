import { Color } from "../patterns/Color";
import { IPattern } from "../patterns/IPattern";
import { IBlyncDevice } from "../lib/IBlyncDevice";
import Bluebird from "bluebird";
import { CommandFactory } from "../util/commandFactory";
import { IPatternEngine } from "./IPatternEngine";

export class FunctionPatternProcessor implements IPatternEngine {
  private _current: Color = [0, 0, 0];

  async process(pattern: IPattern, device: IBlyncDevice): Promise<number> {
    if (Array.isArray(pattern.colors))
      throw new Error("`colors` must be a function!");
    while (this._current !== null) {
      this._current = pattern.colors(this._current);
      const command = CommandFactory.fromColor(this._current);
      await Bluebird.delay(pattern.delay);
      await device.sendCommand(command);
    }
    return 0;
  }
}
