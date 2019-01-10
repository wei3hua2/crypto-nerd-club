// import { Action } from '@ngrx/store';
// import { CoinDashboard, Currency, Coin } from '../models';

// export enum CoinActionTypes {

//   LoadGlobalVolume = '[Coin] Load Global Volume',
//   LoadGlobalVolumeSuccess = '[Coin] Load Global Volume Success',

//   LoadGlobalMarketCap = '[Coin] Load Global Marketcap',
//   LoadGlobalMarketCapSuccess = '[Coin] Load Global Marketcap Success',

//   LoadAlltimeHigh = '[Coin] Load All time High',
//   LoadAlltimeHighSuccess = '[Coin] Load All time High Success',

//   InitCurrency = '[Coin] Init Currencies',
//   InitCurrencySuccess = '[Coin] Init Currencies Success',

//   LoadCoins = '[Coin] Load Coins',

//   LoadDashboard = '[Coin] Load Dashboard',
//   LoadDashboardSuccess = '[Coin] Load Dashboard Success',

//   LoadCoinDetail = '[Coin] Load Coin Detail',
//   LoadCoinDetailSuccess = '[Coin] Load Coin Detail Success',

//   LoadExchanges = '[Coin] Load Exchanges',
//   LoadExchangesSuccess = '[Coin] Load Exchanges Success',

//   LoadOHCLV = '[Coin] Load OHCLV',
//   LoadOHCLVSuccess = '[Coin] Load OHCLV Success'
// }

// export class LoadGlobalVolume implements Action {
//   readonly type = CoinActionTypes.LoadGlobalVolume;
//   constructor(public payload: any) {}
// }
// export class LoadGlobalVolumeSuccess implements Action {
//   readonly type = CoinActionTypes.LoadGlobalVolumeSuccess;
//   constructor(public payload: any) {}
// }
// export class LoadGlobalMarketCap implements Action {
//   readonly type = CoinActionTypes.LoadGlobalMarketCap;
//   constructor(public payload: any) {}
// }
// export class LoadGlobalMarketCapSuccess implements Action {
//   readonly type = CoinActionTypes.LoadGlobalMarketCapSuccess;
//   constructor(public payload: any) {}
// }

// export class InitCurrency implements Action {
//   readonly type = CoinActionTypes.InitCurrency;
// }
// export class InitCurrencySuccess implements Action {
//   readonly type = CoinActionTypes.InitCurrencySuccess;
//   constructor(public payload: Currency[]) {}
// }

// export class LoadDashboard implements Action {readonly type = CoinActionTypes.LoadDashboard; }
// export class LoadDashboardSuccess implements Action {
//   readonly type = CoinActionTypes.LoadDashboardSuccess;
//   constructor(public payload: CoinDashboard[]) {}
// }

// export class LoadCoinDetail implements Action {
//   readonly type = CoinActionTypes.LoadCoinDetail;
//   constructor(public payload: string) {}
// }
// export class LoadCoinDetailSuccess implements Action {
//   readonly type = CoinActionTypes.LoadCoinDetailSuccess;
//   constructor(public payload: Coin) {}
// }

// export class LoadExchanges implements Action {
//   readonly type = CoinActionTypes.LoadExchanges;
//   constructor(public payload?: any) {}
// }
// export class LoadExchangesSuccess implements Action {
//   readonly type = CoinActionTypes.LoadExchangesSuccess;
//   constructor(public payload: any) {}
// }

// export class LoadOHCLV implements Action {
//   readonly type = CoinActionTypes.LoadOHCLV;
//   constructor(public payload: any) {}
// }
// export class LoadOHCLVSuccess implements Action {
//   readonly type = CoinActionTypes.LoadOHCLVSuccess;
//   constructor(public payload: any) {}
// }

// export type CoinActions = InitCurrency | InitCurrencySuccess |
//   LoadCoinDetail | LoadCoinDetailSuccess |
//   LoadExchanges | LoadExchangesSuccess |
//   LoadGlobalVolume | LoadGlobalVolumeSuccess |
//   LoadGlobalMarketCap | LoadGlobalMarketCapSuccess |
//   LoadDashboard | LoadDashboardSuccess |
//   LoadOHCLV | LoadOHCLVSuccess;
