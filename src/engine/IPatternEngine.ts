import { IBlyncDevice } from '../lib/IBlyncDevice';
import { IPattern } from '../patterns/IPattern';

export interface IPatternEngine {
  process(
    pattern: IPattern,
    device: IBlyncDevice,
    token?: { run: boolean }
  ): Promise<number>;
  stop(): void;
}
