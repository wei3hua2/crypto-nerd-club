import { Injectable } from '@angular/core';
import { EsService } from '../service/es.service';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import * as coinActions from '../actions/coin.actions';
import * as _ from 'lodash';

@Injectable()
export class CoinEffects {

  constructor(
    private actions$: Actions,
    private esSvc: EsService) {}

    @Effect()
    loadMainCoins$: Observable<Action> = this.actions$.pipe(
      ofType(coinActions.CoinActionTypes.LoadMainCoinsData),
      switchMap(
        () => {
          return this.esSvc.search({index: 'orgs', size: 1000}).pipe(
            map(result => {
              return new coinActions.LoadMainCoinsDataSuccess(
                _.map(result.hits, '_source')
              );
            })
          );
        }
      )
    );
}
