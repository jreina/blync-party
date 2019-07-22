import { Color } from "../Color";
import { ColorTransform } from "./ColorTransform";



const incrementRed: ColorTransform = ([r, b, g]: Color) => [r + 1, b, g];
const decrementRed: ColorTransform = ([r, b, g]: Color) => [r - 1, b, g];
const incrementBlue: ColorTransform = ([r, b, g]: Color) => [r, b + 1, g];
const decrementBlue: ColorTransform = ([r, b, g]: Color) => [r, b - 1, g];
const incrementGreen: ColorTransform = ([r, b, g]: Color) => [r, b, g + 1];
const decrementGreen: ColorTransform = ([r, b, g]: Color) => [r, b, g - 1];

export const MoodRingUtils = {
  incrementRed,
  incrementBlue,
  incrementGreen,
  decrementBlue,
  decrementGreen,
  decrementRed
};
