import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'developments-summary',
  templateUrl: './developments-summary.component.html',
  styleUrls: ['./developments-summary.component.sass']
})
export class DevelopmentsSummaryComponent implements OnInit {

  @Input()
  title: string;

  _chartType;
  @Input('chartType')
  set chartType(chartType) {
    this._chartType = chartType;
  }
  get chartType(){ return this._chartType; }

  _devs;
  @Input('devs')
  set devs(devs){
    this._devs = devs;
  }
  get devs(){ return this._devs; }

  constructor() {}

  ngOnInit() {
  }
}
