import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Exchange} from '../models';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromRoot from '../reducers';
import { Observable } from 'rxjs';
import { LoadExchanges } from '../actions/coin.actions';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.sass']
})
export class ExchangeComponent implements OnInit {

  exchangeS: string;
  exchange: Observable<Exchange>;

  constructor(
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.exchangeS = this.route.snapshot.paramMap.get('exchange');
  }

  ngOnInit() {
    this.store.dispatch(new LoadExchanges({exchange: this.exchangeS}));

    this.exchange = this.store.select(state => state.coin.exchanges[this.exchangeS]);
  }

  clickRow(data) {
    if ( data.type === 'click') {
      this.router.navigate([ '/chart', this.exchangeS, data.row.base, data.row.quote ]);
    }
  }

}
