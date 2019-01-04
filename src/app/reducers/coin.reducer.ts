import { OHLCV, Global, CoinDashboard, Currency, Coin, Exchange } from '../models';
import * as coinActions from '../actions/coin.actions';
import * as _ from 'lodash';

export interface State {
  glob: Global;
  currencyList: Currency[];
  dashboards: CoinDashboard[];

  coin: Coin;
  coinDetails: {[key: string]: Coin};
  ohlcv: OHLCV[];
  exchanges: {[key: string]: Exchange};
}

export const initialState: State = {
  glob: { volumes: {}, marketCaps: {}},
  currencyList: [],
  dashboards: [],
  coin: null,
  coinDetails: {},
  exchanges: {},
  ohlcv: []
};

export function reducer(state = initialState, action: coinActions.CoinActions): State {
  switch (action.type) {
    case coinActions.CoinActionTypes.LoadDashboardSuccess:
      return handleLoadDB(state, action);

    case coinActions.CoinActionTypes.LoadGlobalMarketCapSuccess:
      return handleMarketCap(state, action);

    case coinActions.CoinActionTypes.LoadGlobalVolumeSuccess:
      return handleGlobalVolume(state, action);

    case coinActions.CoinActionTypes.InitCurrencySuccess:
      return handleInitCurrency(state, action);

    case coinActions.CoinActionTypes.LoadCoinDetailSuccess:
      return handleCoinDetailSuccess(state, action);

    case coinActions.CoinActionTypes.LoadOHCLVSuccess:
      return handleOHCLVSuccess(state, action);

    case coinActions.CoinActionTypes.LoadExchangesSuccess:
      //@ts-ignore
      return handleExchangesSuccess(state, action);

    default:
      return state;
  }
}

function handleLoadDB(state: State, action: coinActions.LoadDashboardSuccess) {
  return {
    ...state,
    dashboards: action.payload
  };
}

function handleInitCurrency(state: State, action: coinActions.InitCurrencySuccess) {
  return {
    ...state,
    currencyList: action.payload
  };
}

function handleExchangesSuccess(state: State, action: coinActions.LoadExchangesSuccess) {
  const pl = _.groupBy(action.payload, function(temp) { return temp.exchange; });
  const result = _.mapValues(pl, (v, k) => ({exchange: k, pairs: v}) );

  return {
    ...state,
    exchanges: result
  };
 }
function handleCoinDetailSuccess(state: State, action: coinActions.LoadCoinDetailSuccess) {
  const curCoin = action.payload;
  const coinDetails = state.coinDetails;
  coinDetails[curCoin.currency] = curCoin;

  return {
    ...state,
    coin: curCoin,
    coinDetails: coinDetails
  };
}

function handleMarketCap(state: State, action: coinActions.LoadGlobalMarketCapSuccess) {

  const caps = _.reduce(action.payload, function(obj, item) {
    obj[item.timestamp] = item.market_cap;
    return obj;
  }, {});

  state.glob.marketCaps = caps;

  return {
    ...state,
    glob: state.glob
  };
}

function handleGlobalVolume(state: State, action: coinActions.LoadGlobalVolumeSuccess) {

  const vol = _.reduce(action.payload, function(obj, item) {
    obj[item.timestamp] = item.volume;
    return obj;
  }, {});

  state.glob.volumes = vol;

  return {
    ...state,
    glob: state.glob
  };
}

function handleOHCLVSuccess(state: State, action: coinActions.LoadOHCLVSuccess) {

  console.log(action.payload);
  const ohlcv = action.payload.ohlcv;
  console.log(ohlcv);

  return {
    ...state,
    ohlcv: ohlcv
  };
}