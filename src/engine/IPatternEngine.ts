import { IBlyncDevice } from "../lib/IBlyncDevice";
import { IPattern } from "../patterns/IPattern";

export interface IPatternEngine {
    process(pattern: IPattern, device: IBlyncDevice): Promise<number>;
}