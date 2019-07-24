import { MoodRingState } from './MoodRingState';
import { TransformDirection } from './TransformDirection';
import { MoodRingUtils } from './MoodRingUtils';
import { Chance } from 'chance';
const chance = Chance.Chance(Math.random);

const RedDescending: MoodRingState = {
  direction: TransformDirection.Down,
  transform: MoodRingUtils.decrementRed,
  nextState(x) {
    return findNextStartState(x);
  }
};

const RedAscending: MoodRingState = {
  direction: TransformDirection.Up,
  transform: MoodRingUtils.incrementRed,
  nextState: () => RedDescending
};

const GreenDescending: MoodRingState = {
  direction: TransformDirection.Down,
  transform: MoodRingUtils.decrementGreen,
  nextState(x) {
    return findNextStartState(x);
  }
};

const GreenAscending: MoodRingState = {
  direction: TransformDirection.Up,
  transform: MoodRingUtils.incrementGreen,
  nextState: () => GreenDescending
};

const BlueDescending: MoodRingState = {
  direction: TransformDirection.Down,
  transform: MoodRingUtils.decrementBlue,
  nextState(x) {
    return findNextStartState(x);
  }
};

const BlueAscending: MoodRingState = {
  direction: TransformDirection.Up,
  transform: MoodRingUtils.incrementBlue,
  nextState: () => BlueDescending
};

const Noop: MoodRingState = {
  direction: TransformDirection.Up,
  transform: color => color,
  nextState(x) {
    return findNextStartState(x);
  }
};

export function findInitialState(): MoodRingState {
  return chance.pickone([
    RedAscending,
    GreenAscending,
    BlueAscending,
    RedDescending,
    GreenDescending,
    BlueDescending
  ]);
}

export function findNextStartState(current?: MoodRingState): MoodRingState {
  const ascendingStates = [RedAscending, GreenAscending, BlueAscending, Noop];
  const set = current
    ? ascendingStates.filter(state => state !== current)
    : ascendingStates;
  return chance.pickone(set);
}
