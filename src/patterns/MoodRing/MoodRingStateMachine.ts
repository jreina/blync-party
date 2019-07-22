import { Color } from "../Color";
import { MoodRingState } from "./MoodRingState";
import { findNextStartState } from "./MoodRingStates";

export class MoodRingStateMachine {
  private _stateMachine: [MoodRingState, MoodRingState];
  private _runCount = 0;
  constructor() {
    const a = findNextStartState()
    const b = findNextStartState(a);
    this._stateMachine = [a, b];
  }
  next(color: Color) {
    const [{ transform: f }, { transform: g }] = this._stateMachine;

    this._runCount++;
    if (this._runCount === 255) {
      this._runCount = 0;
      this._evolve();
    }
    return f(g(color));
  }
  private _evolve() {
    const [a, b] = this._stateMachine;
    const nextA = a.nextState(a);
    this._stateMachine = [nextA, b.nextState(nextA)];
  }
}
