import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoinDashboard, Currency, Global } from '../models';

import { CoinService } from '../coin.service';
import * as fromRoot from '../reducers';
import { LoadGlobalVolume, LoadGlobalMarketCap } from '../actions/coin.actions';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  // dashboard$: Observable<CoinDashboard[]>;
  // currencies$: Observable<Currency[]>;
  glob: Observable<Global>;
  volumes: Observable<any>;
  marketcaps: Observable<any>;

  constructor(
    private store: Store<fromRoot.State>,
    private coinSvc: CoinService) {}

  ngOnInit() {
    const time = moment().subtract(360, 'days').toDate();

    this.store.dispatch(new LoadGlobalVolume({start: time}));
    this.store.dispatch(new LoadGlobalMarketCap({start: time}));

    this.glob = this.store.select<Global>(state => state.coin.glob);
    this.volumes = this.store.select<any>(state => state.coin.glob.volumes);
    this.marketcaps = this.store.select<any>(state => state.coin.glob.marketCaps);

  }
}
