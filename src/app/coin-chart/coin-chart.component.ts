import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'coin-chart',
  templateUrl: './coin-chart.component.html',
  styleUrls: ['./coin-chart.component.sass']
})
export class CoinChartComponent implements OnInit {

  @Input()
  name: string;

  _series: any[];
  chart: Chart;

  @Input()
  set series(s: any) {
    this._series = s;

    const chartSeries = _.zip(
      _.map(_.map(s, 'timestamp') , (ts) => moment(ts).toDate().getTime()),
      _.map(s, 'close'));
      // _.values(s));

    if (this.chart) {
      this.chart.removeSeries(0);
      this.chart.addSeries({name: this.name, data: chartSeries});
    }
  }
  get series() {
    return this._series;
  }


  constructor() { }

  ngOnInit() {
    this.chart = new Chart({
      chart: {type: 'area'},
      xAxis: {type: 'datetime'},
      title: {text: this.name},
      credits: {enabled: false},
      series: []
    });
  }

}
