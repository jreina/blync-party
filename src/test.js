const Blync = require("./lib/blync");
var device = Blync.getDevice(0);

function wait(milli = 5) {
  var waitTill = new Date(new Date().getTime() + milli);
  while (waitTill > new Date()) {}
}

const showColor = (r,g,b) => () => device.sendCommand(r, g, b, false, 0);
const purple = showColor(255, 0, 255);
const green = showColor(0, 255, 0);
const white = showColor(255, 255, 255);
const black = showColor(0, 0, 0);
const red = showColor(255, 0, 0);
const blue = showColor(0, 0, 255);
const orange = showColor(255,165,0);
const yellow = showColor(255,255,0);

const party = del => {
  while(true) {
    purple();
    wait(del);
    blue();
    wait(del);
    green();
    wait(del);
    yellow();
    wait(del);
    red();
    wait(del);
    orange();
    wait(del);
  }
}

const copMode = (del) => {
  while (true) {
    red();
    wait(del);
    blue();
    wait(del);
  }
};
const strobe = (del) => {
  while(true) {
    white();
    wait(del);
    black();
    wait(del);
  }
}

party(100);
