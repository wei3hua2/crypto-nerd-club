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

  _chartType;
  @Input('chartType')
  set chartType(chartType) {
    this._chartType = chartType;
  }
  get chartType(){ return this._chartType; }

  noOfRepos;
  _dashboard;
  @Input('dashboard')
  set dashboard(db) {
    this._dashboard = db;
    this.noOfRepos = db.noOfRepositories;
  }
  get dashboard() {
    return this._dashboard;
  }

  constructor() {}

  ngOnInit() {
  }
}
