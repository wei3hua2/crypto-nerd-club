import { Injectable } from '@angular/core';
import { CoinService } from '../coin.service';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import * as coinActions from '../actions/coin.actions';

@Injectable()
export class CoinEffects {

  constructor(
    private actions$: Actions,
    private coinSvc: CoinService) {}

    @Effect()
    initCurrencies$: Observable<Action> = this.actions$.pipe(
      ofType(coinActions.CoinActionTypes.InitCurrency),
      switchMap(
        () => {
          return this.coinSvc.getCurenciesList().pipe(
            map(db => new coinActions.InitCurrencySuccess(db)));
        }
      )
    );


  @Effect()
  loadDashboard$: Observable<Action> = this.actions$.pipe(
    ofType(coinActions.CoinActionTypes.LoadDashboard),
    switchMap(
      () => {
        return this.coinSvc.nomicDashboard().pipe(
          map(db => new coinActions.LoadDashboardSuccess(db)));
      }
    )
  );

  @Effect()
  loadMarkets$: Observable<Action> = this.actions$.pipe(
    ofType(coinActions.CoinActionTypes.LoadExchanges),
    switchMap(
      (action) => {
        const params = action['payload'] || {};

        return this.coinSvc.nomicMarketsPrice(params).pipe(
          map(db => new coinActions.LoadExchangesSuccess(db)));
      }
    )
  );

  @Effect()
  loadCoinDetail$: Observable<Action> = this.actions$.pipe(
    ofType(coinActions.CoinActionTypes.LoadCoinDetail),
    switchMap(
      (action) => {
        const cur = action['payload'];
        return this.coinSvc.nomicOHCL(cur).pipe(
          map(db => {
            const result = {currency: cur, ohlcv: db};
            return new coinActions.LoadCoinDetailSuccess(result);
          }
          ));
      }
    )
  );

  @Effect()
  loadOHCLV$: Observable<Action> = this.actions$.pipe(
    ofType(coinActions.CoinActionTypes.LoadOHCLV),
    switchMap(
      (action) => {
        const cur = action['payload'];
        return this.coinSvc.nomicOHCL(cur).pipe(
          map(db => {
            const result = {currency: cur, ohlcv: db};
            return new coinActions.LoadOHCLVSuccess(result);
          }
        ));
      }
    )
  );

  @Effect()
  loadGlobalVolume$: Observable<Action> = this.actions$.pipe(
    ofType(coinActions.CoinActionTypes.LoadGlobalVolume),
    switchMap(
      (action) => {
        return this.coinSvc.nomicGlobalVolumeHistory(action['payload']['start'], action['payload']['end']).pipe(
          map(db => new coinActions.LoadGlobalVolumeSuccess(db)));
      }
    )
  );

  @Effect()
  loadGlobalMarketCap$: Observable<Action> = this.actions$.pipe(
    ofType(coinActions.CoinActionTypes.LoadGlobalMarketCap),
    switchMap(
      (action) => {
        return this.coinSvc.nomicMarketCapHistory(action['payload']['start'], action['payload']['end']).pipe(
          map(db => new coinActions.LoadGlobalMarketCapSuccess(db)));
      }
    )
  );

}