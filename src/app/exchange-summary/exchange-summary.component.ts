import { Component, Input } from '@angular/core';
import { Exchange } from '../models';


@Component({
  selector: 'exchange-summary',
  templateUrl: './exchange-summary.component.html',
  styleUrls: ['./exchange-summary.component.sass']
})
export class ExchangeSummaryComponent {

  @Input()
  exchange: Exchange;

  // chart = HighCharts

  constructor() {}

}
