import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoadExchanges } from '../actions/coin.actions';
import { Exchange } from '../models';
import * as _ from 'lodash';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.sass']
})
export class ExchangesComponent implements OnInit {

  rows = [];
  columns = [
    {prop: 'exchange'}];

  constructor(
    private store: Store<fromRoot.State>,
    private coinSvc: CoinService,
    private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new LoadExchanges);

    const exchanges = this.store.select(state => state.coin.exchanges);

    exchanges.subscribe((exchange) => this.rows = _.values(exchange));
  }

  onCellClick(data: any) {
    if ( data.type === 'click') {
      this.router.navigate([ '/exchange', data.row.exchange ]);
    }
  }

}
