import { IPattern } from '../IPattern';
import { Color } from '../Color';
import got from 'got';

export class Bitcoin implements IPattern {
  private _timer: NodeJS.Timeout;
  name = 'Bitcoin';
  delay = 3600000;
  loop = true;
  colors = [[0, 128, 0] as Color];

  constructor() {
    this._timer = setTimeout(this.updateColor, 1800000);
  }

  private async updateColor() {
    const { body } = await got('v1/public/coin/1', {
      baseUrl: 'https://api.coinranking.com',
      json: true
    });

    this.colors = [
      [0, Math.min(this.colors[0][1] + body.change, 255), 0] as Color
    ];
  }
}
