import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CoinListItem, CoinsDashboard } from '../models';
import { Router } from '@angular/router';
import * as fromRoot from '../reducers';
import { Store } from '@ngrx/store';
import { EsService } from '../service/es.service';
import * as _ from 'lodash';
import { LoadMainCoinsData } from '../actions/coin.actions';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.sass']
})
export class CoinsComponent implements OnInit {

  coins: Observable<CoinListItem[]>;
  dashboard: Observable<CoinsDashboard>;

  constructor(
    private esSvc: EsService,
    private store: Store<fromRoot.State>,
    private router: Router) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadMainCoinsData({}));
    // this.store.dispatch(new LoadCoinsDashboard());

    this.coins = this.store.select<CoinListItem[]>(state => state.coin.coinTableList);
    this.dashboard = this.store.select<CoinsDashboard>(state => state.coin.coinsDashboard);

    // this.coins.subscribe(console.log);
    this.dashboard.subscribe(console.log);


    // this.orgs = this.esSvc.search({index: 'orgs', size: 1000}).pipe(
    //   switchMap((result) => {
    //     return of(_.map(result.hits, '_source'));
    //   })
    // );
    // this.summary = this.orgs.pipe(
    //   switchMap((result) => {
    //     return of(_.map(result, function (row) {
    //       return {'name': row.login, 'value': row.public_repos};
    //     }));
    //   })
    // );
  }

  onCellClick(evt) {
    if ( evt.type === 'click') {
      this.router.navigate([ '/coin', evt.row.login ]);
    }
  }

}
