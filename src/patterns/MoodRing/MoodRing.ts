import { IPattern } from "../IPattern";
import { Color } from "../Color";
import { MoodRingStateMachine } from "./MoodRingStateMachine";

export class MoodRing implements IPattern {
  private _stateMachine: MoodRingStateMachine;
  public delay = 25;
  public loop = true;
  public name = "Mood Ring";

  constructor() {
    this._stateMachine = new MoodRingStateMachine();
  }
  colors(color: Color): Color {
    return this._stateMachine.next(color);
  }
}
