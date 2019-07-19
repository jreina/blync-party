import { HID, devices } from "node-hid";
import { BlyncWireless } from "./device";

class BlyncStatic {
  static getDevices() {
    const hidDevices = devices();

    const blyncs = hidDevices
      .filter(
        ({ vendorId, productId }) => vendorId === 11277 && productId === 11
      )
      .map(({ path }) => new BlyncWireless(new HID(path)));

    return blyncs;
  }
  static getDevice(index) {
    index = +index || 0;

    const devices = this.getDevices();
    if (index < 0) {
      throw new Error("Invalid device index");
    }
    if (index >= devices.length) {
      throw new Error("Device index #" + index + " not found");
    }

    return devices[index];
  }
}

export { BlyncStatic };
