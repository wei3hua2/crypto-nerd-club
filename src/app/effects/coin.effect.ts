import { Injectable } from '@angular/core';
import { EsService } from '../service/es.service';
import { NomicsService } from '../service/nomics.service';
import { GhService } from '../service/gh.service';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, from } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import * as coinActions from '../actions/coin.actions';
import * as _ from 'lodash';

@Injectable()
export class CoinEffects {

  constructor(
    private actions$: Actions,
    private ghSvc: GhService,
    private nomicSvc: NomicsService,
    private esSvc: EsService) {}

    @Effect()
    loadMainCoins$: Observable<Action> = this.actions$.pipe(
      ofType(coinActions.CoinActionTypes.LoadMainCoinsData),
      switchMap(
        () => {
          return this.esSvc.search({index: 'coins', size: 1000}).pipe(
            map(result => {
              return new coinActions.LoadMainCoinsDataSuccess(
                _.map(result.hits, '_source')
              );
            })
          );
        }
      )
    );

    @Effect()
    loadMarketDataCoins$: Observable<Action> = this.actions$.pipe(
      ofType(coinActions.CoinActionTypes.LoadMarketPriceData),
      switchMap(
        (action) => {
          const symbols = _.map(action['payload']['symbols'], _.upperCase);
          return this.nomicSvc.dashboard(symbols).pipe(
            map(result => {
              const res = _.filter(result, (r) => _.includes(symbols, r.currency));

              return new coinActions.LoadMarketPriceDataSuccess(res);
            })
          );
        }
      )
    );

    @Effect()
    loadMainCoin$: Observable<Action> = this.actions$.pipe(
      ofType(coinActions.CoinActionTypes.LoadMainCoin),
      switchMap(
        (action) => {
          const symbol = action['payload'];

          return this.esSvc.get({index: 'coins', type: '_doc', id: symbol}).pipe(
            map(result => {
              return new coinActions.LoadMainCoinSuccess(result);
            })
          );
        })
    );

    @Effect()
    loadCoinReposList$: Observable<Action> = this.actions$.pipe(
      ofType(coinActions.CoinActionTypes.LoadRepoList),
      switchMap(
        (action) => {
          const org = action['payload'];
          return from(this.ghSvc.repos.listForOrg({org: org, per_page: 100})).pipe(
            map( (result: any[]) => {
              return new coinActions.LoadRepoListSuccess(result);
            })
          );
        })
    );

    @Effect()
    loadCoinGithub$: Observable<Action> = this.actions$.pipe(
      ofType(coinActions.CoinActionTypes.LoadCoinGH),
      switchMap(
        (action) => {
          const orgId = action['payload'];

          return from(this.ghSvc.orgs.get({org: orgId})).pipe(
            map((result: any[]) => {
              return new coinActions.LoadCoinGHSuccess(result);
            })
          );
        })
    );

    @Effect()
    loadCoinMemberGithub$: Observable<Action> = this.actions$.pipe(
      ofType(coinActions.CoinActionTypes.LoadCoinMemberGH),
      switchMap(
        (action) => {
          const orgId = action['payload'];

          return from(this.ghSvc.orgs.listMembers({org: orgId})).pipe(
            map((result: any[]) => {
              return new coinActions.LoadCoinMemberGHSuccess(result);
            })
          );
        })
    );

    @Effect()
    loadRepoGithub$: Observable<Action> = this.actions$.pipe(
      ofType(coinActions.CoinActionTypes.LoadRepoGH),
      switchMap(
        (action) => {
          return from(this.ghSvc.repos.get(action['payload'])).pipe(
            map((result: any) => {
              return new coinActions.LoadRepoGHSuccess(result);
            })
          );
        })
    );
}
