import { CubeOptions } from '../cli/CubeOptions';
import { FixedDelayPatternProcessor } from '../engine/FixedDelayPatternProcessor';
import { Police, Party, MoodRing, Deadmau5, SP } from '../patterns';
import { FunctionPatternProcessor } from '../engine/FunctionPatternProcessor';
import { Color } from '../patterns/Color';
import { IBlyncDevice } from '../lib/IBlyncDevice';
import { BlyncStatic } from '../lib/BlyncStatic';
import { CommandFactory } from '../util/commandFactory';
import { IPatternEngine } from '../engine/IPatternEngine';

export class BlyncParty {
  private _patterns: Map<string, CubeOptions> = new Map([
    [
      'mood',
      {
        pattern: new MoodRing(),
        engine: new FunctionPatternProcessor(),
        name: 'mood',
        description: 'Chill mode activated!'
      }
    ],
    [
      'police',
      {
        pattern: new Police(),
        engine: new FixedDelayPatternProcessor(),
        name: 'police',
        description: 'Tha block is hot!'
      }
    ],
    [
      'party',
      {
        pattern: new Party(),
        engine: new FixedDelayPatternProcessor(),
        name: 'party',
        description: "Let's party boiiiiii!!!1!"
      }
    ],
    [
      'deadmau5',
      {
        pattern: new Deadmau5(),
        engine: new FixedDelayPatternProcessor(),
        name: 'deadmau5',
        description: "Let's get LIT!"
      }
    ],
    [
      'sp',
      {
        pattern: new SP(),
        engine: new FixedDelayPatternProcessor(),
        name: 'sp',
        description: 'Smoooooooth Processing!'
      }
    ]
  ]);

  private _device: IBlyncDevice;
  private _runningPatternEngine?: IPatternEngine;

  constructor() {
    this._device = BlyncStatic.getDevice(0);
  }

  /**
   * Registers a pattern name with a set of options.
   * @param name
   * @param options
   */
  registerPattern(name: string, options: CubeOptions): void {
    this._patterns.set(name, options);
  }

  /**
   * Runs a registered pattern.
   * @param name
   */
  runPattern(name: string): Promise<number> {
    this._cancelRunning();
    const pattern = this._patterns.get(name);
    if (!pattern) throw new Error(`Pattern (${name}) not found!`);
    this._runningPatternEngine = pattern.engine;
    return pattern.engine.process(pattern.pattern, this._device);
  }

  /**
   * Sets a solid color on the device.
   * @param color
   */
  setColor(color: Color): Promise<number> {
    this._cancelRunning();
    return this._device.sendCommand(CommandFactory.fromColor(color));
  }

  /**
   * Cancels the current running pattern engine, if one exists.
   */
  private _cancelRunning() {
    if (this._runningPatternEngine) this._runningPatternEngine.stop();
  }
}
