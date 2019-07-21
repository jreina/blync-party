import { HID } from "node-hid";
import { IBlyncCommand } from "./IBlyncCommand";
import { IBlyncDevice } from "./IBlyncDevice";

class BlyncWireless implements IBlyncDevice {
  constructor(private hidDevice: HID) {}

  private _createBuffer({
    red,
    green,
    blue,
    dim,
    blink
  }: IBlyncCommand): Array<number> {
    let lightControl = 0b000000;
    // Bit0: 0 - Light On, 1 - Light Off
    // Bit1: 0 - No Dim (Full Brightness), 1 - Dim by 50%
    if (dim) {
      lightControl += 0b000010;
    }
    // Bit2: 0 - No Flash, 1- Start Flash (Blink)
    // Bit5-Bit3 - Flash speed - 001 - slow, 010 - medium, 100- fast
    switch (blink) {
      case 0:
        // no blink
        break;
      case 1: // slow
        lightControl += 0b001100;
        break;
      case 2: // medium
        lightControl += 0b010100;
        break;
      case 3: // slow
        lightControl += 0b100100;
        break;
    }

    const buffer = [
      0x00,
      red,
      blue,
      green,
      lightControl,
      0x00,
      0x80,
      0xff,
      0x22
    ];

    return buffer;
  }

  sendCommand = async (command: IBlyncCommand) => {
    const buffer = this._createBuffer(command);
    return this.hidDevice.write(buffer);
  }
}

export { BlyncWireless };
