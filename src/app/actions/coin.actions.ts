import { Action } from '@ngrx/store';
import { CoinsDashboard, CoinGithub } from '../models';

export enum CoinActionTypes {
  LoadMainCoinsData = '[Coin] Load Main Coins',
  LoadMainCoinsDataSuccess = '[Coin] Load Main Coins Success'
}

export class LoadMainCoinsData implements Action {
  readonly type = CoinActionTypes.LoadMainCoinsData;
  constructor(public payload: any) {}
}
export class LoadMainCoinsDataSuccess implements Action {
  readonly type = CoinActionTypes.LoadMainCoinsDataSuccess;
  constructor(public payload: CoinGithub[]) {}
}


export type CoinActions = LoadMainCoinsData |
  LoadMainCoinsDataSuccess;
