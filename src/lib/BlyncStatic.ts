import { HID, devices } from 'node-hid';
import { BlyncWireless } from './BlyncWireless';

class BlyncStatic {
  static getDevices() {
    const hidDevices = devices();

    const blyncs = hidDevices
      .filter(
        ({ vendorId, productId, path }) =>
          vendorId === 11277 && productId === 11 && path
      )
      .map(x => ({ ...x, path: x.path ? x.path : '' }))
      .map(({ path }) => new BlyncWireless(new HID(path)));

    return blyncs;
  }
  static getDevice(index: number) {
    index = +index || 0;

    const devices = this.getDevices();
    if (index < 0) {
      throw new Error('Invalid device index');
    }
    if (index >= devices.length) {
      throw new Error('Device index #' + index + ' not found');
    }

    return devices[index];
  }
}

export { BlyncStatic };
