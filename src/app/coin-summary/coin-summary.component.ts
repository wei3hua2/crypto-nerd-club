import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'coin-summary',
  templateUrl: './coin-summary.component.html',
  styleUrls: ['./coin-summary.component.sass']
})
export class CoinSummaryComponent implements OnInit {

  members;

  @Input()
  dashboard;

  _coin;
  @Input('coin')
  set coin(coin){
    this._coin = coin;
    this.members = coin.githubMembers;
  }
  get coin(){
    return this._coin;
  }

  constructor() {}

  ngOnInit() {
  }

}
