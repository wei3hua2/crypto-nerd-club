import { Component, OnInit } from '@angular/core';
import { Chart, StockChart } from 'angular-highcharts';
import { ActivatedRoute } from '@angular/router';
import { CoinService } from '../coin.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements OnInit {

  currency: string;

  exchange: string;
  market: string;
  base: string;
  quote: string;

  name: string;
  stockChart: StockChart;

  constructor(
    private route: ActivatedRoute,
    private coinSvc: CoinService
  ) {
    this.currency = this.route.snapshot.paramMap.get('currency');

    this.exchange = this.route.snapshot.paramMap.get('exchange');
    this.base = this.route.snapshot.paramMap.get('base');
    this.quote = this.route.snapshot.paramMap.get('quote');
    this.market = this.base + this.quote;


    this.name = this.currency || this.exchange + ' : ' + this.base + '/' + this.quote;
  }

  ngOnInit() {

    const param = {};
    if (this.currency) param['currency'] = this.currency;
    else if (this.market) {
      param['exchange'] = this.exchange;
      param['market'] = this.market;
      param['base'] = this.base;
      param['quote'] = this.quote;
    }

    this.coinSvc.nomicOHCL(param).subscribe(data => {

      const ohlc: [number, number][] = <[number, number][]>_.map(data, d => {
        return [Date.parse('' + d.timestamp), d.open, d.high, d.low, d.close];
      });

      const volumes: [number, number][] = <[number, number][]>_.map(data, d => {
        return [Date.parse('' + d.timestamp), d.volume];
      });


      this.stockChart = new StockChart({
        yAxis: [{
          labels: {align: 'left'}, height: '80%', resize: {enabled: true}
        }, {
          labels: {align: 'left'}, top: '80%', height: '20%', offset: 0
        }],
        title: {text: this.name + ' Price'},
        series: [
          {type: 'area', id: 'stock-ohcl', name: this.name, data: ohlc},
          {type: 'column', id: 'stock-volume', name: 'volume', data: volumes, yAxis: 1}]
      });
    });

  }

}
