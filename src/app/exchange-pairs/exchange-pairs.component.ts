import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Exchange } from '../models';
import * as _ from 'lodash';

@Component({
  selector: 'exchange-pairs',
  templateUrl: './exchange-pairs.component.html',
  styleUrls: ['./exchange-pairs.component.sass']
})
export class ExchangePairsComponent implements OnInit {

  exchg;

  _quote;
  quotes;
  all_pairs = [];
  pairs = [];


  columns = [];

  @Output()
  cellClick = new EventEmitter;

  @Input()
  set exchange(exchange: Exchange) {
    if (exchange) {
      this.exchg = exchange;

      this.all_pairs = exchange.pairs;
      this.quotes = _.uniq(_.map(exchange.pairs, 'quote'));
    }
  }
  get exchange() {
    return this.exchg;
  }

  set quote(q: string) {
    this.pairs = _.filter(this.all_pairs, (p) => p.quote === q);
    this._quote = q;
  }
  get quote() {
    return this._quote;
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.columns = [
      {prop: 'base', name: 'Base'},
      {prop: 'quote', name: 'Quote'},
      {prop: 'price_quote', name: 'Price Quote'},
      {prop: 'timestamp', name: 'Update Time'}];

    this.quote = 'BTC';
  }

  onCellClick($event) {
    this.cellClick.emit($event);
  }

}
