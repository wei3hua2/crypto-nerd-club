import { Action } from '@ngrx/store';
import { CoinsDashboard } from '../models';

export enum CoinActionTypes {
  LoadMainCoinsData = '[Coin] Load Main Coins',
  LoadMainCoinsDataSuccess = '[Coin] Load Main Coins Success',

  LoadMarketPriceData = '[Coin] Load Market Data',
  LoadMarketPriceDataSuccess = '[Coin] Load Market Data Success',

  LoadMainCoin = '[Coin] Load Main Coin',
  LoadMainCoinSuccess = '[Coin] Load Main Coin Success',

  LoadCoinGH = '[Coin] Load Coin GH',
  LoadCoinGHSuccess = '[Coin] Load Coin GH Success',

  LoadCoinMemberGH = '[Coin] Load Coin Member GH',
  LoadCoinMemberGHSuccess = '[Coin] Load Coin Member GH Success',

  LoadRepoList = '[Coin] Load Repo List',
  LoadRepoListSuccess = '[Coin] Load Repo List Success',

  LoadRepoGH = '[Coin] Load Repo GH',
  LoadRepoGHSuccess = '[Coin] Load Repo GH Success',

  LoadRepoContrisGH = '[Coin] Load Repo Contris GH',
  LoadRepoContrisGHSuccess = '[Coin] Load Repo Contris GH Success',

  LoadRepoCommitsGH = '[Coin] Load Repo Commits GH',
  LoadRepoCommitsGHSuccess = '[Coin] Load Repo Commits GH Success',

  LoadRepoReleasesGH = '[Coin] Load Repo Releases GH',
  LoadRepoReleasesGHSuccess = '[Coin] Load Repo Releases GH Success',

  LoadRepoIssuesGH = '[Coin] Load Repo Issues GH',
  LoadRepoIssuesGHSuccess = '[Coin] Load Repo Issues GH Success'
}

export class LoadMainCoinsData implements Action {
  readonly type = CoinActionTypes.LoadMainCoinsData;
  constructor(public payload: any) {}
}
export class LoadMainCoinsDataSuccess implements Action {
  readonly type = CoinActionTypes.LoadMainCoinsDataSuccess;
  constructor(public payload: any[]) {}
}

export class LoadMarketPriceData implements Action {
  readonly type = CoinActionTypes.LoadMarketPriceData;
  constructor(public payload: {symbols: string[]}) {}
}
export class LoadMarketPriceDataSuccess implements Action {
  readonly type = CoinActionTypes.LoadMarketPriceDataSuccess;
  constructor(public payload: any) {}
}

export class LoadMainCoin implements Action {
  readonly type = CoinActionTypes.LoadMainCoin;
  constructor(public payload: string) {}
}
export class LoadMainCoinSuccess implements Action {
  readonly type = CoinActionTypes.LoadMainCoinSuccess;
  constructor(public payload: any[]) {}
}

export class LoadRepoList implements Action {
  readonly type = CoinActionTypes.LoadRepoList;
  constructor(public payload: string) {}
}
export class LoadRepoListSuccess implements Action {
  readonly type = CoinActionTypes.LoadRepoListSuccess;
  constructor(public payload: any[]) {}
}

export class LoadCoinGH implements Action {
  readonly type = CoinActionTypes.LoadCoinGH;
  constructor(public payload: string) {}
}
export class LoadCoinGHSuccess implements Action {
  readonly type = CoinActionTypes.LoadCoinGHSuccess;
  constructor(public payload: any[]) {}
}

export class LoadCoinMemberGH implements Action {
  readonly type = CoinActionTypes.LoadCoinMemberGH;
  constructor(public payload: string) {}
}
export class LoadCoinMemberGHSuccess implements Action {
  readonly type = CoinActionTypes.LoadCoinMemberGHSuccess;
  constructor(public payload: any[]) {}
}

export class LoadRepoGH implements Action {
  readonly type = CoinActionTypes.LoadRepoGH;
  constructor(public payload: any) {}
}
export class LoadRepoGHSuccess implements Action {
  readonly type = CoinActionTypes.LoadRepoGHSuccess;
  constructor(public payload: any) {}
}

export class LoadRepoContrisGH implements Action {
  readonly type = CoinActionTypes.LoadRepoContrisGH;
  constructor(public payload: any) {}
}
export class LoadRepoContrisGHSuccess implements Action {
  readonly type = CoinActionTypes.LoadRepoContrisGHSuccess;
  constructor(public payload: any) {}
}

export class LoadRepoCommitsGH implements Action {
  readonly type = CoinActionTypes.LoadRepoCommitsGH;
  constructor(public payload: any) {}
}
export class LoadRepoCommitsGHSuccess implements Action {
  readonly type = CoinActionTypes.LoadRepoCommitsGHSuccess;
  constructor(public payload: any) {}
}

export class LoadRepoReleasesGH implements Action {
  readonly type = CoinActionTypes.LoadRepoReleasesGH;
  constructor(public payload: any) {}
}
export class LoadRepoReleasesGHSuccess implements Action {
  readonly type = CoinActionTypes.LoadRepoReleasesGHSuccess;
  constructor(public payload: any) {}
}

export class LoadRepoIssuesGH implements Action {
  readonly type = CoinActionTypes.LoadRepoIssuesGH;
  constructor(public payload: any) {}
}
export class LoadRepoIssuesGHSuccess implements Action {
  readonly type = CoinActionTypes.LoadRepoIssuesGHSuccess;
  constructor(public payload: any) {}
}

export type CoinActions = LoadMainCoinsData |
  LoadMainCoinsDataSuccess | LoadMarketPriceData | LoadMarketPriceDataSuccess |
  LoadMainCoin | LoadMainCoinSuccess | LoadRepoList | LoadRepoListSuccess |
  LoadCoinGH | LoadCoinGHSuccess | LoadCoinMemberGH | LoadCoinMemberGHSuccess |
  LoadRepoGH | LoadRepoGHSuccess | LoadRepoContrisGH | LoadRepoContrisGHSuccess |
  LoadRepoCommitsGH | LoadRepoCommitsGHSuccess | LoadRepoReleasesGH | LoadRepoReleasesGHSuccess |
  LoadRepoIssuesGH | LoadRepoIssuesGHSuccess;
