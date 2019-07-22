import { TransformDirection } from "./TransformDirection";
import { ColorTransform } from "./ColorTransform";

export interface MoodRingState {
  direction: TransformDirection;
  transform: ColorTransform;
  nextState: (state: MoodRingState) => MoodRingState;
}
