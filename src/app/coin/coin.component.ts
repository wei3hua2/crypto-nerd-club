import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { EsService } from '../service/es.service';
import { GhService } from '../service/gh.service';
import { Observable, of, from } from 'rxjs';
import * as _ from 'lodash';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.sass']
})
export class CoinComponent implements OnInit {

  id: string;
  org: Observable<any>;
  repos: Observable<any[]>;

  constructor(
    private esSvc: EsService,
    private ghSvc: GhService,
    private route: ActivatedRoute,
    private rtr: Router,
    private store: Store<fromRoot.State>
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    // this.org = this.esSvc.get({index: 'orgs', type: '_doc', id: this.id});
    // this.repos = this.esSvc.search({
    //   index: 'repos', type: '_doc', size: 1000,
    //   q: 'owner.id:' + this.id}).pipe(
    //     switchMap((result) => {
    //       return of(_.map(result.hits, '_source'));
    //     })
    //   );
    this.org = from(this.ghSvc.orgs.get({org: this.id}));
    this.repos = from(this.ghSvc.repos.listForOrg({org: this.id, per_page: 100}));
    // this.org.subscribe(console.log);
    // this.repos.subscribe(console.log);
  }

  onCellClick(evt) {
    if ( evt.type === 'click') {
      this.rtr.navigate([ '/repo', this.id, evt.row.name ]);
    }
  }

}
