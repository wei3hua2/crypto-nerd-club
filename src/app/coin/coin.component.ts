import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { EsService } from '../service/es.service';
import { GhService } from '../service/gh.service';
import { Observable, of, from } from 'rxjs';
import * as _ from 'lodash';
import { first } from 'rxjs/operators';
import { LoadMainCoin, LoadRepoList, LoadCoinGH,
  LoadCoinMemberGH } from '../actions/coin.actions';

@Component({
  selector: 'coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.sass']
})
export class CoinComponent implements OnInit {

  symbol: string;
  // org: Observable<any>;

  coin: Observable<any>;
  repos: Observable<any[]>;
  ghLogin: Observable<string>;
  coinGithub: Observable<any>;
  dashboard: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private rtr: Router,
    private store: Store<fromRoot.State>
  ) {
    this.symbol = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.store.dispatch(new LoadMainCoin(this.symbol));

    this.coin = this.store.select<any>(state => state.coin.coinDetail);
    this.repos = this.store.select<any>(state => state.coin.coinDetail.repos);
    this.ghLogin = this.store.select<string>(state => state.coin.coinDetail.ghLogin);
    this.coinGithub = this.store.select<any>(state => state.coin.coinDetail.github);

    this.dashboard = this.store.select<any>(state => state.coin.coinDashboard);

    this.ghLogin.subscribe((ghLogin) => {
      if (ghLogin) {
        this.store.dispatch(new LoadRepoList(ghLogin));
        this.store.dispatch(new LoadCoinGH(ghLogin));
        this.store.dispatch(new LoadCoinMemberGH(ghLogin));
      }
    });
  }

  onCellClick(evt) {
    if ( evt.type === 'click') {
      this.ghLogin.pipe(first()).subscribe(
        (ghLogin) => this.rtr.navigate([ '/repo', this.symbol, ghLogin, evt.row.name ])
      );
    }
  }

}
