import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCoin from './coin.reducer';

export interface State {

  coin: fromCoin.State;
}

export const reducers: ActionReducerMap<State> = {

  coin: fromCoin.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
