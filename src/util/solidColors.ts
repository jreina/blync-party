import * as colornames from 'color-name';
import { Color } from '../patterns/Color';
import { splitEvery } from 'ramda';

function tryProcessHex(maybeHex: string): Color | undefined {
  if (!/[A-F0-9]{6}/.test(maybeHex)) return;
  maybeHex = maybeHex.replace('#', '');
  return splitEvery(2, maybeHex).map(str => parseInt(str, 16)) as Color;
}

export function tryProcessSolidColor(name: string): Color | undefined {
  if (colornames.hasOwnProperty(name))
    return (<{ [x: string]: Color }>colornames)[name] as Color;

  return tryProcessHex(name);
}
