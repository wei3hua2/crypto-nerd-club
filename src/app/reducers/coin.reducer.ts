import { CoinsDashboard, CoinListItem } from '../models';
import * as coinActions from '../actions/coin.actions';
import * as _ from 'lodash';

export interface State {
  coinsDashboard: CoinsDashboard;
  coinTableList: CoinListItem[];
}

export const initialState: State = {
  coinsDashboard: {},
  coinTableList: []
};

export function reducer(state = initialState, action: coinActions.CoinActions): State {
  switch (action.type) {
    case coinActions.CoinActionTypes.LoadMainCoinsDataSuccess:
      return handleMainCoins(state, action);

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
      ghLogin: pl.login, name: pl.name, symbol: pl.symbol,
      avatar_url: pl.avatar_url, public_repos: pl.public_repos, created_at: pl.created_at
    };
  });

  if (curCoinTableList.length === 0)
    curCoinTableList = updatingData;

  curCoinsDashboard.noOfRepositories = _.map(updatingData,
    (pl) => ({'name': pl.ghLogin, 'value': pl.public_repos}));

  return {
      ...state,
      coinTableList: curCoinTableList,
      coinsDashboard: curCoinsDashboard
    };
}
  // const coinDB = _.map()

  // return {
  //   coinsDashboard: {id: '1'},
  //   coinTableList: coinTable
  // };

