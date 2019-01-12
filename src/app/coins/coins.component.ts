import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';
import { CoinListItem, CoinsDashboard } from '../models';
import { Router } from '@angular/router';
import * as fromRoot from '../reducers';
import { Store } from '@ngrx/store';
import { EsService } from '../service/es.service';
import * as _ from 'lodash';
import { LoadMainCoinsData, LoadMarketPriceData } from '../actions/coin.actions';
import { CoinStatus } from '../reducers/coin.reducer';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.sass']
})
export class CoinsComponent implements OnInit {

  coins: Observable<CoinListItem[]>;
  dashboard: Observable<CoinsDashboard>;
  status: Observable<CoinStatus>;

  constructor(
    private esSvc: EsService,
    private store: Store<fromRoot.State>,
    private router: Router) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadMainCoinsData({}));

    this.coins = this.store.select<CoinListItem[]>(state => state.coin.coinTableList);
    this.dashboard = this.store.select<CoinsDashboard>(state => state.coin.coinsDashboard);
    this.status = this.store.select<CoinStatus>(state => state.coin.status);

    this.status.subscribe((stat) => {
      if (stat.init_main_coins && !stat.loaded_coins_price) {
        this.coins.pipe(first()).subscribe((coins) => {
          const syms = _.map(coins, 'symbol');
          this.store.dispatch(new LoadMarketPriceData({symbols: syms}));
        });
      }
    });
  }

  onCellClick(evt) {
    if ( evt.type === 'click') {
      this.router.navigate([ '/coin', evt.row.symbol ]);
    }
  }

}
