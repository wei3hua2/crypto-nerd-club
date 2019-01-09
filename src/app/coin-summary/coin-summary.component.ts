import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'coin-summary',
  templateUrl: './coin-summary.component.html',
  styleUrls: ['./coin-summary.component.sass']
})
export class CoinSummaryComponent implements OnInit {
  @Input()
  coin;

  constructor() {}

  ngOnInit() {
  }

}
