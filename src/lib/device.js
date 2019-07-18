function Device(hidDevice) {
  this.hidDevice = hidDevice;
};

function toInt(value) {
  if (
    !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10))
  ) {
    return parseInt(value);
  } else {
    return 0;
  }
}

/**
 * @param {0|1|2|3} blink
 */
Device.prototype.sendCommand = function(
  red,
  green,
  blue,
  dim = false,
  blink = 0
) {
  // make sure the parameters are all integer
  red = toInt(red);
  green = toInt(green);
  blue = toInt(blue);
  blink = toInt(blink);

  lightControl = 0b000000;
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

  const commandBuffer = [
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

  this.hidDevice.write(commandBuffer);
};

exports.Device = Device;
