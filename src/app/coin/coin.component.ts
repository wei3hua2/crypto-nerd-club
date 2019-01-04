import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadCoinDetail, LoadOHCLV } from '../actions/coin.actions';
import * as fromRoot from '../reducers';
import { Coin, OHLCV } from '../models';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.sass']
})
export class CoinComponent implements OnInit {

  currency: string;
  currencyUri: string;
  ohclv$: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromRoot.State>
  ) {
    this.currency = this.route.snapshot.paramMap.get('currency');
    this.currencyUri = '/chart/' + this.currency;
  }

  ngOnInit() {
    this.store.dispatch(new LoadCoinDetail(this.currency));
    this.store.dispatch(new LoadOHCLV({currency: this.currency}));

    const coin$ = this.store.select<Coin>(state => state.coin.coin);
    this.ohclv$ = this.store.select<any>(state => state.coin.ohlcv);

  }

}
