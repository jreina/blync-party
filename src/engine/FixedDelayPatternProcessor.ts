import { IPattern } from "../patterns/IPattern";
import { IBlyncDevice } from "../lib/IBlyncDevice";

export class FixedDelayPatternProcessor {
  static processPattern({ colors, delay }: IPattern, device: IBlyncDevice) {
    return new Promise(function(res, req) {
      let i = 0;
      setTimeout(() => {
        if (i >= colors.length) i = 0;
        let [red, green, blue] = colors[i];
        device.sendCommand({ red, green, blue, blink: 0, dim: false });
      }, delay);
    });
  }
}
