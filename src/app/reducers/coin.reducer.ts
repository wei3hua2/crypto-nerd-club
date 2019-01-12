import { CoinsDashboard, CoinDashboard, CoinListItem, RepositoryDetail } from '../models';
import * as coinActions from '../actions/coin.actions';
import * as _ from 'lodash';

export interface CoinStatus {
  init_main_coins: boolean;
  loaded_coins_price: boolean;
}

export interface State {
  status: CoinStatus;
  coinsDashboard: CoinsDashboard;
  coinTableList: CoinListItem[];
  coinDetail: any;
  coinDashboard: CoinDashboard;
  repoDetail: RepositoryDetail;
}

export const initialState: State = {
  status: {
    init_main_coins: false,
    loaded_coins_price: false
  },
  coinsDashboard: {},
  coinTableList: [],
  coinDetail: {},
  coinDashboard: {},
  repoDetail: {}
};

export function reducer(state = initialState, action: coinActions.CoinActions): State {
  switch (action.type) {
    case coinActions.CoinActionTypes.LoadMainCoinsDataSuccess:
      return handleMainCoins(state, action);

    case coinActions.CoinActionTypes.LoadMainCoin:
      return initLoadCoinDetail(state, action);

    case coinActions.CoinActionTypes.LoadMainCoinSuccess:
      return handleLoadCoinSuccess(state, action);

    case coinActions.CoinActionTypes.LoadMarketPriceDataSuccess:
      return handleMarketCoins(state, action);

    case coinActions.CoinActionTypes.LoadRepoListSuccess:
      return handleRepoListSuccess(state, action);

    case coinActions.CoinActionTypes.LoadCoinGHSuccess:
      return handleCoinGHSuccess(state, action);

    case coinActions.CoinActionTypes.LoadCoinMemberGHSuccess:
      return handleCoinMemberGHSuccess(state, action);

    case coinActions.CoinActionTypes.LoadRepoGHSuccess:
      return handleRepoGHSuccess(state, action);

    default:
      return state;
  }
}

function handleMainCoins(state, action) {
  let curCoinTableList = state.coinTableList;
  const curCoinsDashboard = _.cloneDeep(state.coinsDashboard);
  const payload = action.payload;

  const updatingData = _.map(payload, (pl) => {
    return {
      ghLogin: pl.ghLogin, name: pl.name, symbol: pl.symbol,
      avatar_url: pl.avatar_url, public_repos: pl.public_repos, created_at: pl.created_at
    };
  });

  if (curCoinTableList.length === 0)
    curCoinTableList = updatingData;

  curCoinsDashboard.noOfRepositories = _.map(updatingData,
    (pl) => ({'name': pl.name, 'value': pl.public_repos}));

  return {
      ...state,
      status: {init_main_coins: true, loaded_coins_price: false},
      coinTableList: curCoinTableList,
      coinsDashboard: curCoinsDashboard
    };
}

function handleMarketCoins(state, action) {
  const updatingData = _.map(action.payload, (pl) => {
    const close = !!pl.close ? +pl.close : 0;
    const availSup = !!pl.availableSupply ? +pl.availableSupply : 0;
    const maxSup = !!pl.maxSupply ? +pl.maxSupply : 0;
    return {
      currency: pl.currency.toLowerCase(),
      price: close,
      availableSupply: availSup,
      maxSupply: maxSup,
      marketCap: close * availSup
    };
  });

  const newTableList = _.map(state.coinTableList, (coin) => {
    const found = _.find(updatingData, {currency: coin.symbol});
    return _.assign(coin, found);
  });

  const curCoinsDashboard = _.cloneDeep(state.coinsDashboard);

  curCoinsDashboard.marketCaps = _.map(newTableList,
    (pl) => ({'name': pl.name, 'value': pl.marketCap}));

  return {
    ...state,
    status: {init_main_coins: true, loaded_coins_price: true},
    coinTableList: newTableList,
    coinsDashboard: curCoinsDashboard
  };
}

function handleRepoListSuccess(state, action) {
  const detail = _.cloneDeep(state.coinDetail);
  detail.repos = action.payload.data;

  const curCoinDashboard = _.cloneDeep(state.coinDashboard);

  curCoinDashboard.noOfRepoStars = _.map(detail.repos,
    (pl) => ({'name': pl.name, 'value': pl.stargazers_count}));

  return {
    ...state,
    coinDetail: detail,
    coinDashboard: curCoinDashboard
  };
}

function initLoadCoinDetail(state, action) {
  const symbol = action.payload;
  const coin = _.find(state.coinTableList, ['symbol', symbol]) || {};
  if (coin) {
    return {
      ...state,
      coinDetail: coin
    };
  }
  else return state;
}

function handleLoadCoinSuccess(state, action) {
  const updates = action.payload;
  const coin = _.cloneDeep(state.coinDetail);
  const coinD = _.assign(coin, updates);

  return {
    ...state,
    coinDetail: coinD
  };
}

function handleCoinGHSuccess(state, action) {
  const orgGH = action.payload;
  const detail = _.cloneDeep(state.coinDetail);
  detail.github = orgGH.data;

  return {
    ...state,
    coinDetail: detail
  };
}

function handleCoinMemberGHSuccess(state, action) {
  const memGH = action.payload;
  const detail = _.cloneDeep(state.coinDetail);
  detail.githubMembers = memGH.data;

  return {
    ...state,
    coinDetail: detail
  };
}

function handleRepoGHSuccess(state, action) {
  const repoGH = action.payload.data;
  const detail = _.assign(state.repoDetail, repoGH);

  return {
    ...state,
    repoDetail: detail
  };
}
