import { IBlyncCommand } from "./IBlyncCommand";

export interface IBlyncDevice {
    sendCommand(command: IBlyncCommand): Promise<number>;
}