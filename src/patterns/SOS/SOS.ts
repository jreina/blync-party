import { IPattern } from '../IPattern';
import { white, black } from 'color-name';

export const SOS: IPattern = {
  colors: [
    // S
    white,
    black,
    white,
    black,
    white,
    //
    black,
    black,
    // O
    white,
    white,
    white,
    black,
    white,
    white,
    white,
    black,
    white,
    white,
    white,
    //
    black,
    black,
    // S
    white,
    black,
    white,
    black,
    white,
    //
    black,
    black,
    black
  ],
  delay: 250,
  loop: true,
  name: 'SOS'
};
