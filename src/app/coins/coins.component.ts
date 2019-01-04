import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {CoinDashboard} from '../models';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import * as fromRoot from '../reducers';
import { LoadDashboard } from '../actions/coin.actions';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.sass']
})
export class CoinsComponent implements OnInit {

  coins: Observable<CoinDashboard[]>;

  rows = [];

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router) {}

  ngOnInit() {

    this.store.dispatch(new LoadDashboard);

    this.coins = this.store.select<CoinDashboard[]>(state => state.coin.dashboards);

    this.coins.subscribe(data => {
      this.rows = _.sortBy(data, d => d.close);
      this.rows = _.reverse(this.rows);
    });
  }

  onCellClick(data: any) {
    if ( data.type === 'click') {
      this.router.navigate([ '/coin', data.row.currency ]);
    }
  }

}
