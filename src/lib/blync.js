const hid = require("node-hid");

const Blync = {
  getDevices: function() {
    const devices = hid.devices();
      
    const blyncs = devices.filter(
        ({ vendorId, productId }) => vendorId === 11277 && productId === 11
      )
      .map(({path}) => new Blync.Device(new hid.HID(path)));

    return blyncs;
  },

  getDevice: function(index) {
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
};

Blync.Device = require("./device").Device;

module.exports = Blync;
