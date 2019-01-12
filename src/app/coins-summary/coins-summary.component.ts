import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'coins-summary',
  templateUrl: './coins-summary.component.html',
  styleUrls: ['./coins-summary.component.sass']
})
export class CoinsSummaryComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  label: string;

  _chartType;
  @Input('chartType')
  set chartType(chartType) {
    this._chartType = chartType;
  }
  get chartType(){ return this._chartType; }

  _dashboard;
  @Input('dashboard')
  set dashboard(db) {
    this._dashboard = _.filter(db, (v) => !!v.value);
    this._dashboard = _.reverse(_.sortBy(this._dashboard, 'value'));
    this._dashboard = _.take(this._dashboard, 5);
  }
  get dashboard() {
    return this._dashboard;
  }

  constructor() {}

  ngOnInit() {
  }
}
