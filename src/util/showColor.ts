import { IBlyncDevice } from "../lib/IBlyncDevice";

export function showColor(device: IBlyncDevice) {
  return function showColorClosure(red: number, green: number, blue: number) {
    return showColorOnDevice(device, red, green, blue);
  };
}

export function showColorOnDevice(
  device: IBlyncDevice,
  red: number,
  green: number,
  blue: number
) {
  device.sendCommand({ blink: 0, dim: false, blue, green, red });
}
