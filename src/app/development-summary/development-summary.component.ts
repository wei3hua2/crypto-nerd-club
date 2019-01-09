import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'development-summary',
  templateUrl: './development-summary.component.html',
  styleUrls: ['./development-summary.component.sass']
})
export class DevelopmentSummaryComponent implements OnInit {
  @Input()
  development;

  constructor() {}

  ngOnInit() {
  }

}
