import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.sass']
})
export class DashboardChartComponent implements OnInit {

  @Input()
  valname: string;

  @Input()
  name: string;

  _series: any[];

  @Input()
  set series(s: any) {
    this._series = s;

    const chartSeries = _.zip(
      _.map(_.keys(s) , (ts) => moment(ts).toDate().getTime()),
      // _.keys(s),
      _.values(s));

    if (this.chart) {
      this.chart.removeSeries(0);
      this.chart.addSeries({name: this.name, data: chartSeries});
    }
  }
  get series() {
    return this._series;
  }

  chart: Chart;

  constructor() {}

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
